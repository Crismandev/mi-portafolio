import React, { useEffect, useRef } from 'react';

export function WebGLBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn("WebGL not supported, falling back to static background.");
      return;
    }

    let animationFrameId;

    // Sync drawing buffer size
    const syncSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    syncSize();

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);

    // Shaders
    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform vec3 u_baseColor;
      uniform vec3 u_waveColor1;
      uniform vec3 u_waveColor2;
      uniform float u_waveOpacity1;
      uniform float u_waveOpacity2;

      void main() {
        vec2 uv = v_texCoord;
        vec2 m = u_mouse / u_resolution;
        
        float t = u_time * 0.15;
        vec3 color = u_baseColor;
        
        // Flowing background wave logic
        float wave1 = sin(uv.x * 3.0 + t + sin(uv.y * 2.0 + t)) * 0.5 + 0.5;
        float wave2 = sin(uv.y * 4.0 - t * 0.8 + cos(uv.x * 3.0 + t)) * 0.5 + 0.5;
        
        color = mix(color, u_waveColor1, wave1 * u_waveOpacity1);
        color = mix(color, u_waveColor2, wave2 * u_waveOpacity2);
        
        // Mouse glow
        float dist = distance(uv, m);
        float glow = smoothstep(0.4, 0.0, dist);
        color += u_waveColor1 * glow * 0.12;
        
        // Noise texture
        float n = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
        color += n * 0.01;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compileShader = (source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const program = gl.createProgram();
    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Buffers
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]), gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uBaseColor = gl.getUniformLocation(program, 'u_baseColor');
    const uWaveColor1 = gl.getUniformLocation(program, 'u_waveColor1');
    const uWaveColor2 = gl.getUniformLocation(program, 'u_waveColor2');
    const uWaveOpacity1 = gl.getUniformLocation(program, 'u_waveOpacity1');
    const uWaveOpacity2 = gl.getUniformLocation(program, 'u_waveOpacity2');

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX;
      targetMouse.y = window.innerHeight - e.clientY; // Flip Y for WebGL coords
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = (time) => {
      // Smooth mouse interpolation
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uTime, time * 0.001);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouse.x, mouse.y);

      // Dynamically send color configurations based on active theme
      if (theme === 'dark') {
        gl.uniform3f(uBaseColor, 0.01, 0.01, 0.02); // Dark obsidian base
        gl.uniform3f(uWaveColor1, 0.54, 0.36, 0.96); // Violet
        gl.uniform3f(uWaveColor2, 0.39, 0.4, 0.95);  // Indigo
        gl.uniform1f(uWaveOpacity1, 0.12);
        gl.uniform1f(uWaveOpacity2, 0.08);
      } else {
        gl.uniform3f(uBaseColor, 0.97, 0.98, 0.99);  // Light base (#f8fafc)
        gl.uniform3f(uWaveColor1, 0.82, 0.72, 0.98); // Light Pastel Violet
        gl.uniform3f(uWaveColor2, 0.78, 0.82, 0.98); // Light Pastel Indigo
        gl.uniform1f(uWaveOpacity1, 0.16);
        gl.uniform1f(uWaveOpacity2, 0.12);
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
    };
  }, [theme]); // Re-run effect if theme changes to update uniforms

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full opacity-100 dark:opacity-60"
      style={{ display: 'block' }}
    />
  );
}
export default WebGLBackground;
