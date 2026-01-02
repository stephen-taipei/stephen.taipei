import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// WebGPU Shader - Subtle ambient effects that complement the content
const createShaderModule = (device, isDark) => {
  const colorSet = isDark ? '1' : '0';

  const shaderCode = `
    struct Uniforms {
      time: f32,
      padding1: f32,
      resolution: vec2<f32>,
      mousePos: vec2<f32>,
      padding2: vec2<f32>,
    }

    @group(0) @binding(0) var<uniform> uniforms: Uniforms;

    struct VertexOutput {
      @builtin(position) position: vec4<f32>,
      @location(0) uv: vec2<f32>,
    }

    @vertex
    fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
      var positions = array<vec2<f32>, 6>(
        vec2<f32>(-1.0, -1.0),
        vec2<f32>(1.0, -1.0),
        vec2<f32>(-1.0, 1.0),
        vec2<f32>(-1.0, 1.0),
        vec2<f32>(1.0, -1.0),
        vec2<f32>(1.0, 1.0)
      );

      var output: VertexOutput;
      output.position = vec4<f32>(positions[vertexIndex], 0.0, 1.0);
      output.uv = positions[vertexIndex] * 0.5 + 0.5;
      return output;
    }

    // Simplex-like noise
    fn hash(p: vec2<f32>) -> f32 {
      var p3 = fract(vec3<f32>(p.x, p.y, p.x) * 0.13);
      p3 += dot(p3, p3.yzx + 3.333);
      return fract((p3.x + p3.y) * p3.z);
    }

    fn noise(p: vec2<f32>) -> f32 {
      let i = floor(p);
      let f = fract(p);
      let u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i), hash(i + vec2<f32>(1.0, 0.0)), u.x),
        mix(hash(i + vec2<f32>(0.0, 1.0)), hash(i + vec2<f32>(1.0, 1.0)), u.x),
        u.y
      );
    }

    fn fbm(p: vec2<f32>) -> f32 {
      var value = 0.0;
      var amp = 0.5;
      var pp = p;
      for (var i = 0; i < 5; i++) {
        value += amp * noise(pp);
        pp *= 2.0;
        amp *= 0.5;
      }
      return value;
    }

    @fragment
    fn fragmentMain(input: VertexOutput) -> @location(0) vec4<f32> {
      let uv = input.uv;
      let aspect = uniforms.resolution.x / uniforms.resolution.y;
      var p = (uv - 0.5) * vec2<f32>(aspect, 1.0);
      let time = uniforms.time;
      let isDark = ${colorSet};

      // Background colors
      var bgColor: vec3<f32>;
      if (isDark == 1) {
        // Match Tailwind gray-950
        bgColor = vec3<f32>(0.012, 0.027, 0.071);
      } else {
        // Light theme - soft background
        bgColor = vec3<f32>(0.95, 0.96, 0.98);
      }

      var color = bgColor;

      // Define colors based on theme
      var color1: vec3<f32>;
      var color2: vec3<f32>;
      var color3: vec3<f32>;
      var color4: vec3<f32>;

      if (isDark == 1) {
        // Dark theme - muted colors that blend with background
        color1 = vec3<f32>(0.06, 0.14, 0.28);   // Deep Navy
        color2 = vec3<f32>(0.14, 0.06, 0.24);   // Deep Purple
        color3 = vec3<f32>(0.03, 0.18, 0.22);   // Deep Teal
        color4 = vec3<f32>(0.10, 0.08, 0.15);   // Dark Slate
      } else {
        // Light theme - vibrant colors (original)
        color1 = vec3<f32>(0.0, 0.5, 1.0);      // Electric Blue
        color2 = vec3<f32>(0.7, 0.0, 1.0);      // Purple
        color3 = vec3<f32>(0.0, 1.0, 0.8);      // Cyan
        color4 = vec3<f32>(1.0, 0.2, 0.5);      // Pink
      }

      // === ANIMATED GRADIENT BLOBS ===
      var blob1Pos: vec2<f32>;
      var blob2Pos: vec2<f32>;
      var blob3Pos: vec2<f32>;
      var blob4Pos: vec2<f32>;

      if (isDark == 1) {
        // Slower movement for dark mode
        blob1Pos = vec2<f32>(
          sin(time * 0.08) * 0.3 + 0.4,
          cos(time * 0.06) * 0.25 + 0.2
        );
        blob2Pos = vec2<f32>(
          cos(time * 0.07 + 2.0) * 0.35 - 0.3,
          sin(time * 0.05 + 1.0) * 0.3 - 0.1
        );
        blob3Pos = vec2<f32>(
          sin(time * 0.05 + 4.0) * 0.2,
          cos(time * 0.04 + 3.0) * 0.2
        );
        blob4Pos = vec2<f32>(
          cos(time * 0.06 + 5.0) * 0.25 + 0.2,
          sin(time * 0.04 + 2.0) * 0.3 - 0.15
        );
      } else {
        // Original faster movement for light mode
        blob1Pos = vec2<f32>(
          sin(time * 0.3) * 0.4 + cos(time * 0.2) * 0.2,
          cos(time * 0.25) * 0.3 + sin(time * 0.15) * 0.2
        );
        blob2Pos = vec2<f32>(
          cos(time * 0.35 + 2.0) * 0.5,
          sin(time * 0.28 + 1.0) * 0.4
        );
        blob3Pos = vec2<f32>(
          sin(time * 0.22 + 4.0) * 0.45 - 0.2,
          cos(time * 0.32 + 3.0) * 0.35 + 0.1
        );
        blob4Pos = vec2<f32>(
          cos(time * 0.27 + 5.0) * 0.35 + 0.3,
          sin(time * 0.18 + 2.0) * 0.45 - 0.2
        );
      }

      let blob1Dist = length(p - blob1Pos);
      let blob1 = smoothstep(1.2, 0.0, blob1Dist);

      let blob2Dist = length(p - blob2Pos);
      let blob2 = smoothstep(1.0, 0.0, blob2Dist);

      let blob3Dist = length(p - blob3Pos);
      let blob3 = smoothstep(0.9, 0.0, blob3Dist);

      let blob4Dist = length(p - blob4Pos);
      let blob4 = smoothstep(0.85, 0.0, blob4Dist);

      // Mix blobs - subtle for dark, vibrant for light
      var blobIntensity: f32;
      if (isDark == 1) {
        blobIntensity = 0.22; // Slightly increased for dark mode
      } else {
        blobIntensity = 0.5;  // Original vibrant for light mode
      }

      color = mix(color, color1, blob1 * blobIntensity);
      color = mix(color, color2, blob2 * blobIntensity * 0.9);
      color = mix(color, color3, blob3 * blobIntensity * 0.8);
      color = mix(color, color4, blob4 * blobIntensity * 0.7);

      // === FLOWING NOISE ===
      let noiseVal = fbm(p * 1.5 + time * 0.08);
      var noiseIntensity: f32;
      if (isDark == 1) {
        noiseIntensity = 0.08;
      } else {
        noiseIntensity = 0.2;
      }
      color = mix(color, color4, noiseVal * noiseIntensity);

      // === WAVE PATTERN (light mode only) ===
      if (isDark == 0) {
        let wave1 = sin(p.x * 3.0 + time * 1.5 + p.y * 2.0) * 0.5 + 0.5;
        let wave2 = sin(p.y * 4.0 - time * 1.2 + p.x * 1.5) * 0.5 + 0.5;
        let waveMix = wave1 * wave2;
        let waveColor = mix(color1, color3, sin(time * 0.5) * 0.5 + 0.5);
        color = mix(color, waveColor, waveMix * 0.15);
      }

      // === FLOATING PARTICLES ===
      var particleCount: i32;
      if (isDark == 1) {
        particleCount = 10;
      } else {
        particleCount = 15;
      }

      for (var i = 0; i < 15; i++) {
        if (i >= particleCount) { break; }
        let fi = f32(i);
        let seed = fi * 5.17;

        var particlePos: vec2<f32>;
        var glowStrength: f32;

        if (isDark == 1) {
          particlePos = vec2<f32>(
            sin(time * 0.15 + seed * 1.7) * 0.8,
            cos(time * 0.12 + seed * 1.1) * 0.5
          );
          glowStrength = 0.003;
        } else {
          particlePos = vec2<f32>(
            sin(time * 0.4 + seed * 1.3) * 0.7,
            cos(time * 0.35 + seed * 0.9) * 0.5
          );
          glowStrength = 0.015;
        }

        let dist = length(p - particlePos);
        let glow = glowStrength / (dist * dist + 0.002);
        let pulse = 0.6 + 0.4 * sin(time * 2.0 + seed);

        var particleColor: vec3<f32>;
        let colorIdx = i % 4;
        if (colorIdx == 0) { particleColor = color1; }
        else if (colorIdx == 1) { particleColor = color2; }
        else if (colorIdx == 2) { particleColor = color3; }
        else { particleColor = color4; }

        color += particleColor * glow * pulse;
      }

      // === MOUSE INTERACTION ===
      let mouseUV = uniforms.mousePos / uniforms.resolution;
      let mouseP = (mouseUV - 0.5) * vec2<f32>(aspect, 1.0);
      let mouseDist = length(p - mouseP);

      if (isDark == 1) {
        let mouseGlow = 0.1 / (mouseDist + 0.25);
        let mouseColor = vec3<f32>(0.12, 0.18, 0.3);
        color = mix(color, mouseColor, mouseGlow * 0.25);
      } else {
        let mouseGlow = 0.25 / (mouseDist + 0.15);
        let mouseColor = mix(color1, color3, sin(time * 2.0) * 0.5 + 0.5);
        color = mix(color, mouseColor, mouseGlow * 0.4);
      }

      // === CORNER GRADIENTS ===
      if (isDark == 1) {
        let cornerTL = 1.0 - length(uv - vec2<f32>(0.0, 1.0)) * 0.8;
        let cornerBR = 1.0 - length(uv - vec2<f32>(1.0, 0.0)) * 0.8;
        color = mix(color, color1, max(cornerTL, 0.0) * 0.1);
        color = mix(color, color3, max(cornerBR, 0.0) * 0.08);
      } else {
        let cornerTL = 1.0 - length(uv - vec2<f32>(0.0, 1.0)) * 0.7;
        let cornerBR = 1.0 - length(uv - vec2<f32>(1.0, 0.0)) * 0.7;
        color = mix(color, color2, max(cornerTL, 0.0) * 0.15);
        color = mix(color, color3, max(cornerBR, 0.0) * 0.12);
      }

      // Soft vignette
      let vignette = 1.0 - length(uv - 0.5) * 0.4;
      color *= 0.9 + vignette * 0.1;

      return vec4<f32>(clamp(color, vec3<f32>(0.0), vec3<f32>(1.0)), 1.0);
    }
  `;

  return device.createShaderModule({
    label: 'Visible Aurora Shader',
    code: shaderCode,
  });
};

const WebGPUBackground = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const animationRef = useRef(null);
  const gpuRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const themeRef = useRef(isDark);

  useEffect(() => {
    themeRef.current = isDark;
  }, [isDark]);

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  }, []);

  useEffect(() => {
    let isActive = true;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initWebGPU = async () => {
      if (!navigator.gpu) {
        console.warn('WebGPU not supported');
        setIsSupported(false);
        return;
      }

      try {
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) {
          setIsSupported(false);
          return;
        }

        const device = await adapter.requestDevice();
        if (!isActive) return;

        const context = canvas.getContext('webgpu');
        if (!context) {
          setIsSupported(false);
          return;
        }

        const format = navigator.gpu.getPreferredCanvasFormat();
        context.configure({ device, format, alphaMode: 'premultiplied' });

        const uniformBuffer = device.createBuffer({
          size: 32,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        let shaderModule = createShaderModule(device, themeRef.current);

        const bindGroupLayout = device.createBindGroupLayout({
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX,
            buffer: { type: 'uniform' },
          }],
        });

        const bindGroup = device.createBindGroup({
          layout: bindGroupLayout,
          entries: [{ binding: 0, resource: { buffer: uniformBuffer } }],
        });

        const pipelineLayout = device.createPipelineLayout({
          bindGroupLayouts: [bindGroupLayout],
        });

        let pipeline = device.createRenderPipeline({
          layout: pipelineLayout,
          vertex: { module: shaderModule, entryPoint: 'vertexMain' },
          fragment: { module: shaderModule, entryPoint: 'fragmentMain', targets: [{ format }] },
          primitive: { topology: 'triangle-list' },
        });

        gpuRef.current = { device, context, pipeline, bindGroup, uniformBuffer, format, pipelineLayout };
        setIsInitialized(true);

        let startTime = performance.now();
        let lastTheme = themeRef.current;

        const render = () => {
          if (!isActive) return;

          if (lastTheme !== themeRef.current) {
            lastTheme = themeRef.current;
            shaderModule = createShaderModule(device, lastTheme);
            pipeline = device.createRenderPipeline({
              layout: pipelineLayout,
              vertex: { module: shaderModule, entryPoint: 'vertexMain' },
              fragment: { module: shaderModule, entryPoint: 'fragmentMain', targets: [{ format }] },
              primitive: { topology: 'triangle-list' },
            });
            gpuRef.current.pipeline = pipeline;
          }

          const currentTime = (performance.now() - startTime) / 1000;
          const dpr = Math.min(window.devicePixelRatio, 2);
          const displayWidth = Math.floor(canvas.clientWidth * dpr);
          const displayHeight = Math.floor(canvas.clientHeight * dpr);

          if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            canvas.width = displayWidth;
            canvas.height = displayHeight;
          }

          const uniformData = new Float32Array([
            currentTime, 0,
            displayWidth, displayHeight,
            mousePosRef.current.x * dpr, mousePosRef.current.y * dpr,
            0, 0,
          ]);
          device.queue.writeBuffer(uniformBuffer, 0, uniformData);

          const commandEncoder = device.createCommandEncoder();
          const textureView = context.getCurrentTexture().createView();
          const renderPass = commandEncoder.beginRenderPass({
            colorAttachments: [{
              view: textureView,
              clearValue: { r: 0, g: 0, b: 0, a: 1 },
              loadOp: 'clear',
              storeOp: 'store',
            }],
          });

          renderPass.setPipeline(gpuRef.current.pipeline);
          renderPass.setBindGroup(0, bindGroup);
          renderPass.draw(6);
          renderPass.end();
          device.queue.submit([commandEncoder.finish()]);
          animationRef.current = requestAnimationFrame(render);
        };

        render();
      } catch (error) {
        console.error('WebGPU error:', error);
        setIsSupported(false);
      }
    };

    initWebGPU();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      isActive = false;
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (gpuRef.current?.device) gpuRef.current.device.destroy();
    };
  }, []);

  // CSS Fallback
  if (!isSupported) {
    const blobColors = isDark
      ? ['bg-blue-900/20', 'bg-purple-900/18', 'bg-cyan-900/15']
      : ['bg-blue-500/40', 'bg-purple-500/40', 'bg-cyan-400/35', 'bg-pink-500/30'];

    if (isDark) {
      // Subtle fallback for dark mode
      return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
          <div className={`absolute -top-40 -right-40 w-[800px] h-[800px] ${blobColors[0]} rounded-full filter blur-3xl animate-blob-slow`} />
          <div className={`absolute -bottom-40 -left-40 w-[700px] h-[700px] ${blobColors[1]} rounded-full filter blur-3xl animate-blob-slow animation-delay-4000`} />
          <div className={`absolute top-1/3 left-1/3 w-[600px] h-[600px] ${blobColors[2]} rounded-full filter blur-3xl animate-blob-slow animation-delay-8000`} />
        </div>
      );
    } else {
      // Vibrant fallback for light mode (original)
      return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
          <div className={`absolute -top-40 -right-40 w-[700px] h-[700px] ${blobColors[0]} rounded-full mix-blend-multiply filter blur-3xl animate-blob`} />
          <div className={`absolute -top-20 -left-20 w-[600px] h-[600px] ${blobColors[1]} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000`} />
          <div className={`absolute -bottom-40 left-1/4 w-[650px] h-[650px] ${blobColors[2]} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000`} />
          <div className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] ${blobColors[3]} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000`} />
        </div>
      );
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity: isInitialized ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
    />
  );
};

export default WebGPUBackground;
