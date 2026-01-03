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
        bgColor = vec3<f32>(0.012, 0.027, 0.071);
      } else {
        // Light theme - pure white/gray-50
        bgColor = vec3<f32>(0.98, 0.98, 0.98);
      }

      var color = bgColor;

      // Define colors based on theme
      var color1: vec3<f32>;
      var color2: vec3<f32>;
      var color3: vec3<f32>;
      var color4: vec3<f32>;

      if (isDark == 1) {
        color1 = vec3<f32>(0.06, 0.14, 0.28);
        color2 = vec3<f32>(0.14, 0.06, 0.24);
        color3 = vec3<f32>(0.03, 0.18, 0.22);
        color4 = vec3<f32>(0.10, 0.08, 0.15);
      } else {
        // Light theme - soft pastel colors for nodes
        color1 = vec3<f32>(0.3, 0.6, 0.9);      // Soft Blue
        color2 = vec3<f32>(0.6, 0.4, 0.8);      // Soft Purple
        color3 = vec3<f32>(0.2, 0.7, 0.7);      // Teal
        color4 = vec3<f32>(0.9, 0.5, 0.6);      // Coral
      }

      if (isDark == 1) {
        // === DARK MODE (unchanged) ===
        let blob1Pos = vec2<f32>(
          sin(time * 0.08) * 0.3 + 0.4,
          cos(time * 0.06) * 0.25 + 0.2
        );
        let blob2Pos = vec2<f32>(
          cos(time * 0.07 + 2.0) * 0.35 - 0.3,
          sin(time * 0.05 + 1.0) * 0.3 - 0.1
        );
        let blob3Pos = vec2<f32>(
          sin(time * 0.05 + 4.0) * 0.2,
          cos(time * 0.04 + 3.0) * 0.2
        );
        let blob4Pos = vec2<f32>(
          cos(time * 0.06 + 5.0) * 0.25 + 0.2,
          sin(time * 0.04 + 2.0) * 0.3 - 0.15
        );

        let blob1 = smoothstep(1.2, 0.0, length(p - blob1Pos));
        let blob2 = smoothstep(1.0, 0.0, length(p - blob2Pos));
        let blob3 = smoothstep(0.9, 0.0, length(p - blob3Pos));
        let blob4 = smoothstep(0.85, 0.0, length(p - blob4Pos));

        let blobIntensity = 0.22;
        color = mix(color, color1, blob1 * blobIntensity);
        color = mix(color, color2, blob2 * blobIntensity * 0.9);
        color = mix(color, color3, blob3 * blobIntensity * 0.8);
        color = mix(color, color4, blob4 * blobIntensity * 0.7);

        let noiseVal = fbm(p * 1.5 + time * 0.08);
        color = mix(color, color1, noiseVal * 0.08);

        for (var i = 0; i < 10; i++) {
          let fi = f32(i);
          let seed = fi * 7.31;
          let particlePos = vec2<f32>(
            sin(time * 0.15 + seed * 1.7) * 0.8,
            cos(time * 0.12 + seed * 1.1) * 0.5
          );
          let dist = length(p - particlePos);
          let glow = 0.003 / (dist * dist + 0.01);
          let pulse = 0.7 + 0.3 * sin(time * 1.5 + seed);
          color += vec3<f32>(0.15, 0.25, 0.4) * glow * pulse;
        }

        let mouseUV = uniforms.mousePos / uniforms.resolution;
        let mouseP = (mouseUV - 0.5) * vec2<f32>(aspect, 1.0);
        let mouseDist = length(p - mouseP);
        let mouseGlow = 0.1 / (mouseDist + 0.25);
        color = mix(color, vec3<f32>(0.12, 0.18, 0.3), mouseGlow * 0.25);

        let cornerTL = 1.0 - length(uv - vec2<f32>(0.0, 1.0)) * 0.8;
        let cornerBR = 1.0 - length(uv - vec2<f32>(1.0, 0.0)) * 0.8;
        color = mix(color, color1, max(cornerTL, 0.0) * 0.1);
        color = mix(color, color3, max(cornerBR, 0.0) * 0.08);

      } else {
        // === LIGHT MODE: Floating Network Nodes ===
        // Inspired by GT1319 tree visualization

        // Store node positions for connection drawing
        var nodes: array<vec2<f32>, 12>;

        // Generate 12 floating nodes
        for (var i = 0; i < 12; i++) {
          let fi = f32(i);
          let seed = fi * 2.73 + 0.5;
          let speed = 0.08 + fi * 0.01;

          nodes[i] = vec2<f32>(
            sin(time * speed + seed * 3.14) * 0.7 + cos(time * speed * 0.7 + seed * 2.1) * 0.3,
            cos(time * speed * 0.8 + seed * 2.5) * 0.45 + sin(time * speed * 0.5 + seed * 1.7) * 0.2
          );
        }

        // Draw connections between nearby nodes
        for (var i = 0; i < 12; i++) {
          for (var j = i + 1; j < 12; j++) {
            let nodeA = nodes[i];
            let nodeB = nodes[j];
            let nodeDist = length(nodeA - nodeB);

            // Only connect nodes that are close enough
            if (nodeDist < 0.6) {
              // Line segment distance calculation
              let pa = p - nodeA;
              let ba = nodeB - nodeA;
              let h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
              let lineDist = length(pa - ba * h);

              // Draw line with fade based on distance between nodes
              let lineAlpha = (1.0 - nodeDist / 0.6) * 0.15;
              let line = smoothstep(0.003, 0.0, lineDist) * lineAlpha;

              // Line color - soft blue/gray
              color = mix(color, vec3<f32>(0.6, 0.7, 0.85), line);
            }
          }
        }

        // Draw nodes as clean dots with minimal glow
        for (var i = 0; i < 12; i++) {
          let fi = f32(i);
          let nodePos = nodes[i];
          let dist = length(p - nodePos);

          // Node size
          let nodeSize = 0.008 + sin(fi * 1.5) * 0.003;

          // Very tight glow around node
          let glow = smoothstep(nodeSize * 1.8, nodeSize * 0.8, dist);
          let core = smoothstep(nodeSize, nodeSize * 0.2, dist);

          // Subtle pulse effect
          let pulse = 0.9 + 0.1 * sin(time * 2.0 + fi * 1.3);

          // Select color based on node index
          var nodeColor: vec3<f32>;
          let colorIdx = i % 4;
          if (colorIdx == 0) { nodeColor = color1; }
          else if (colorIdx == 1) { nodeColor = color2; }
          else if (colorIdx == 2) { nodeColor = color3; }
          else { nodeColor = color4; }

          // Apply minimal glow and solid core
          color = mix(color, nodeColor * 0.8, glow * 0.25 * pulse);
          color = mix(color, nodeColor, core * 0.9 * pulse);
        }

        // Mouse interaction - highlight nearby nodes
        let mouseUV = uniforms.mousePos / uniforms.resolution;
        let mouseP = (mouseUV - 0.5) * vec2<f32>(aspect, 1.0);
        let mouseDist = length(p - mouseP);
        let mouseGlow = smoothstep(0.15, 0.0, mouseDist);
        color = mix(color, color1, mouseGlow * 0.2);
      }

      // Very subtle vignette
      let vignette = 1.0 - length(uv - 0.5) * 0.15;
      color *= 0.98 + vignette * 0.02;

      return vec4<f32>(clamp(color, vec3<f32>(0.0), vec3<f32>(1.0)), 1.0);
    }
  `;

  return device.createShaderModule({
    label: 'Visible Aurora Shader',
    code: shaderCode,
  });
};

// Detect if device is mobile or tablet
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;

  // Check screen width (tablets typically < 1024px)
  const isSmallScreen = window.innerWidth < 1024;

  // Check for touch capability + small screen (more reliable than UA)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Check user agent for mobile/tablet keywords as fallback
  const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(
    navigator.userAgent
  );

  // Consider it mobile if: small screen + touch, OR mobile user agent
  return (isSmallScreen && isTouchDevice) || mobileUA;
};

const WebGPUBackground = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const animationRef = useRef(null);
  const gpuRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const themeRef = useRef(isDark);

  // Check for mobile device on mount
  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

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

  // CSS Fallback for unsupported browsers or mobile devices (performance optimization)
  if (!isSupported || isMobile) {
    if (isDark) {
      return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-900/20 rounded-full filter blur-3xl animate-blob-slow" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-purple-900/18 rounded-full filter blur-3xl animate-blob-slow animation-delay-4000" />
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-900/15 rounded-full filter blur-3xl animate-blob-slow animation-delay-8000" />
        </div>
      );
    } else {
      // Light mode: floating dots fallback
      return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
          {/* Floating dots */}
          <div className="absolute top-[15%] right-[20%] w-3 h-3 bg-blue-400/60 rounded-full animate-float" />
          <div className="absolute top-[25%] left-[15%] w-4 h-4 bg-purple-400/50 rounded-full animate-float animation-delay-1000" />
          <div className="absolute top-[45%] right-[35%] w-3 h-3 bg-teal-400/55 rounded-full animate-float animation-delay-2000" />
          <div className="absolute top-[60%] left-[25%] w-3.5 h-3.5 bg-coral-400/50 rounded-full animate-float animation-delay-3000" />
          <div className="absolute top-[30%] left-[45%] w-2.5 h-2.5 bg-blue-500/45 rounded-full animate-float animation-delay-4000" />
          <div className="absolute bottom-[30%] right-[15%] w-3 h-3 bg-purple-500/50 rounded-full animate-float animation-delay-2500" />
          <div className="absolute bottom-[20%] left-[35%] w-4 h-4 bg-teal-500/45 rounded-full animate-float animation-delay-1500" />
          <div className="absolute top-[70%] right-[45%] w-2.5 h-2.5 bg-blue-400/55 rounded-full animate-float animation-delay-3500" />
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
