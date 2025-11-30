/**
 * Hero 首頁組件
 *
 * 功能：
 * - Three.js 粒子動畫背景（支援滑鼠互動）
 * - 打字機效果顯示職稱
 * - GSAP 入場動畫
 * - 平滑滾動到其他區塊
 *
 * 性能優化：
 * - 大幅減少粒子數量以提升性能
 * - 限制 devicePixelRatio 最大為 1.5
 * - 使用節流處理滑鼠事件
 * - 可見性 API 暫停動畫
 * - 組件銷毀時正確清理資源
 */
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  signal,
  ViewChild,
  NgZone,
} from '@angular/core';
import gsap from 'gsap';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private particles!: THREE.Points;
  private animationId!: number;
  private mouse = { x: 0, y: 0 };
  private targetRotation = { x: 0, y: 0 };
  private isVisible = true;
  private lastFrameTime = 0;
  private frameInterval = 1000 / 30; // 限制到 30fps 以節省資源

  typedText = signal('');
  showCursor = signal(true);

  private fullText = '資深全端工程師 / 架構師';
  private typewriterTimeout: any;
  private cursorInterval: any;
  private resizeTimeout: any;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    // 在 Angular Zone 外運行 Three.js 以避免不必要的變更檢測
    this.ngZone.runOutsideAngular(() => {
      this.initThreeJS();
      this.addEventListeners();
    });
    this.initTypewriter();
    this.initCursorBlink();
    this.animateEntrance();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
    clearTimeout(this.typewriterTimeout);
    clearTimeout(this.resizeTimeout);
    clearInterval(this.cursorInterval);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    this.renderer?.dispose();
    this.particles?.geometry?.dispose();
    (this.particles?.material as THREE.Material)?.dispose();
  }

  private initThreeJS() {
    const canvas = this.canvasRef.nativeElement;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Renderer - 降低像素比以提升性能
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false, // 關閉抗鋸齒以提升性能
      powerPreference: 'low-power', // 優先使用低功耗 GPU
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 50;

    // Particles
    this.createParticles();

    // Animate
    this.animate(0);
  }

  private createParticles() {
    const isMobile = window.innerWidth < 768;
    const isLowEnd = window.innerWidth < 480;

    // 大幅減少粒子數量
    let particleCount: number;
    if (isLowEnd) {
      particleCount = 300; // 低端設備
    } else if (isMobile) {
      particleCount = 500; // 移動端
    } else {
      particleCount = 1000; // 桌面端
    }

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color('#00d9ff');
    const colorPink = new THREE.Color('#ff006e');
    const colorPurple = new THREE.Color('#2d1b69');

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Position - 使用球面分佈
      const radius = 40 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Color
      const colorChoice = Math.random();
      let color: THREE.Color;
      if (colorChoice < 0.5) {
        color = colorCyan;
      } else if (colorChoice < 0.8) {
        color = colorPink;
      } else {
        color = colorPurple;
      }

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.8 : 0.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private animate = (currentTime: number) => {
    this.animationId = requestAnimationFrame(this.animate);

    // 如果頁面不可見，跳過渲染
    if (!this.isVisible) return;

    // 限制幀率
    const deltaTime = currentTime - this.lastFrameTime;
    if (deltaTime < this.frameInterval) return;
    this.lastFrameTime = currentTime - (deltaTime % this.frameInterval);

    // 緩慢旋轉粒子
    this.particles.rotation.y += 0.0003;
    this.particles.rotation.x += 0.0001;

    // 平滑的滑鼠互動（使用緩動）
    this.targetRotation.x = this.mouse.y * 0.00005;
    this.targetRotation.y = this.mouse.x * 0.00005;

    this.particles.rotation.x += (this.targetRotation.x - this.particles.rotation.x * 0.1) * 0.02;
    this.particles.rotation.y += (this.targetRotation.y - this.particles.rotation.y * 0.1) * 0.02;

    this.renderer.render(this.scene, this.camera);
  };

  private addEventListeners() {
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });
    document.addEventListener('visibilitychange', this.onVisibilityChange);
  }

  private onResize = () => {
    // 節流 resize 事件
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }, 150);
  };

  private onMouseMove = (event: MouseEvent) => {
    // 簡單的滑鼠位置更新，不需要節流因為 animate 已經有幀率限制
    this.mouse.x = event.clientX - window.innerWidth / 2;
    this.mouse.y = event.clientY - window.innerHeight / 2;
  };

  private onVisibilityChange = () => {
    this.isVisible = !document.hidden;
  };

  private initTypewriter() {
    let index = 0;
    const type = () => {
      if (index <= this.fullText.length) {
        this.typedText.set(this.fullText.slice(0, index));
        index++;
        this.typewriterTimeout = setTimeout(type, 80); // 稍微加快打字速度
      }
    };
    setTimeout(type, 800); // 減少初始延遲
  }

  private initCursorBlink() {
    this.cursorInterval = setInterval(() => {
      this.showCursor.update((v) => !v);
    }, 530);
  }

  private animateEntrance() {
    // 使用更快的動畫
    gsap.from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      ease: 'power2.out',
    });

    gsap.from('.hero-cta', {
      opacity: 0,
      y: 15,
      duration: 0.6,
      delay: 0.4,
      ease: 'power2.out',
      stagger: 0.15,
    });
  }

  scrollTo(href: string, event: Event) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  }
}
