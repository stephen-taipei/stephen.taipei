import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  signal,
  ViewChild,
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

  typedText = signal('');
  showCursor = signal(true);

  private fullText = '資深全端工程師 / 架構師';
  private typewriterTimeout: any;
  private cursorInterval: any;

  ngAfterViewInit() {
    this.initThreeJS();
    this.initTypewriter();
    this.initCursorBlink();
    this.addMouseMoveListener();
    this.animateEntrance();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
    clearTimeout(this.typewriterTimeout);
    clearInterval(this.cursorInterval);
    window.removeEventListener('mousemove', this.onMouseMove);
    this.renderer?.dispose();
  }

  private initThreeJS() {
    const canvas = this.canvasRef.nativeElement;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 50;

    // Particles
    this.createParticles();

    // Handle resize
    window.addEventListener('resize', this.onResize.bind(this));

    // Animate
    this.animate();
  }

  private createParticles() {
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 800 : 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color('#00d9ff');
    const colorPink = new THREE.Color('#ff006e');
    const colorPurple = new THREE.Color('#2d1b69');

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Position
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 100;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;

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
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    // Rotate particles
    this.particles.rotation.y += 0.0005;
    this.particles.rotation.x += 0.0002;

    // Mouse interaction
    this.particles.rotation.x +=
      (this.mouse.y * 0.0001 - this.particles.rotation.x) * 0.05;
    this.particles.rotation.y +=
      (this.mouse.x * 0.0001 - this.particles.rotation.y) * 0.05;

    this.renderer.render(this.scene, this.camera);
  }

  private onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private onMouseMove = (event: MouseEvent) => {
    this.mouse.x = event.clientX - window.innerWidth / 2;
    this.mouse.y = event.clientY - window.innerHeight / 2;
  };

  private addMouseMoveListener() {
    window.addEventListener('mousemove', this.onMouseMove);
  }

  private initTypewriter() {
    let index = 0;
    const type = () => {
      if (index <= this.fullText.length) {
        this.typedText.set(this.fullText.slice(0, index));
        index++;
        this.typewriterTimeout = setTimeout(type, 100);
      }
    };
    setTimeout(type, 1000);
  }

  private initCursorBlink() {
    this.cursorInterval = setInterval(() => {
      this.showCursor.update((v) => !v);
    }, 530);
  }

  private animateEntrance() {
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });

    gsap.from('.hero-cta', {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.6,
      ease: 'power3.out',
      stagger: 0.2,
    });
  }

  scrollTo(href: string, event: Event) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
