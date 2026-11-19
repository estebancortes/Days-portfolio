"use client";

import { useEffect, useRef } from "react";

export function CopperStrand() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;
    const program = gl.createProgram();
    if (!program) return;
    const shaders = [
      [gl.VERTEX_SHADER, "attribute vec2 p; varying vec2 uv; void main(){uv=p*.5+.5;gl_Position=vec4(p,0.,1.);}"],
      [gl.FRAGMENT_SHADER, `precision mediump float;
       varying vec2 uv; uniform float drift;
       void main(){
         float light=0.;
         for(int i=0;i<9;i++){
           float n=float(i)/8.;
           float path=.20+.09*n+.15*sin(uv.x*7.+n*.9+drift)+.30*uv.x;
           light+=1.-smoothstep(.0006,.0024,abs(uv.y-path));
         }
         gl_FragColor=vec4(1.,.86,.69,min(light*.52,.8));
       }`]
    ].map(([type, source]) => {
      const shader = gl.createShader(Number(type))!;
      gl.shaderSource(shader, String(source));
      gl.compileShader(shader);
      gl.attachShader(program, shader);
      return shader;
    });
    gl.linkProgram(program);
    shaders.forEach(shader => gl.deleteShader(shader));
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { gl.deleteProgram(program); return; }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,3,-1,-1,3]), gl.STATIC_DRAW);
    const point = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(point);
    gl.vertexAttribPointer(point, 2, gl.FLOAT, false, 0, 0);
    const drift = gl.getUniformLocation(program, "drift");
    let position = 0, target = 0, frame = 0;
    const draw = () => {
      position += (target - position) * .09;
      gl.uniform1f(drift, position);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      frame = Math.abs(target-position) > .002 ? requestAnimationFrame(draw) : 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(draw); };
    const observer = new ResizeObserver(() => {
      canvas.width = host.clientWidth;
      canvas.height = host.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      schedule();
    });
    observer.observe(host);
    const move = (event: PointerEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      target = event.clientX / window.innerWidth - .5;
      schedule();
    };
    host.addEventListener("pointermove", move);
    return () => {
      host.removeEventListener("pointermove", move);
      observer.disconnect();
      cancelAnimationFrame(frame);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="strand" />;
}
