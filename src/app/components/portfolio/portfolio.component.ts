import { Component, ElementRef, AfterViewInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  color: 'cyan' | 'pink' | 'purple';
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChild('portfolioSection') portfolioSection!: ElementRef;

  selectedProject = signal<Project | null>(null);

  projects: Project[] = [
    {
      id: 1,
      name: 'Copila',
      description: 'AI 客製化功能平台，整合對話、繪圖、圖表生成等多元 AI 功能',
      image: 'copila',
      technologies: ['Angular PWA', 'Laravel Octane', 'WebSocket', 'OpenAI API', 'Redis'],
      achievements: [
        'Lighthouse 滿分表現 (Performance 100)',
        '即時串流對話介面',
        '多模型整合 (GPT-4, DALL-E, Claude)',
        'PWA 離線支援'
      ],
      color: 'cyan'
    },
    {
      id: 2,
      name: '米寶鏢局',
      description: 'OMO 電商購物車系統，結合線上線下的創新購物體驗',
      image: 'mibao',
      technologies: ['Angular PWA', 'Laravel', 'MySQL', 'Redis', 'LINE API'],
      achievements: [
        '1年內累積 20,000 會員',
        'MAU 維持 85% 以上',
        '整合 LINE 登入與推播',
        '個人化推薦演算法'
      ],
      color: 'pink'
    },
    {
      id: 3,
      name: 'StocX',
      description: '股市盤感訓練系統，幫助投資者培養市場敏感度',
      image: 'stocx',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'WebSocket'],
      achievements: [
        '共享主機支援 500+ 同時在線',
        '即時股價模擬系統',
        '歷史數據回測功能',
        '績效分析儀表板'
      ],
      color: 'purple'
    },
    {
      id: 4,
      name: '皮紋檢測系統',
      description: '手指皮紋檢測平台，提供專業的皮紋分析報告',
      image: 'fingerprint',
      technologies: ['jQuery', 'Laravel', 'MySQL', 'Canvas API', 'PDF Generator'],
      achievements: [
        '自動化報表生成',
        '圖像處理與分析',
        '客製化報告模板',
        '批量處理功能'
      ],
      color: 'cyan'
    }
  ];

  ngAfterViewInit() {
    this.initAnimations();
  }

  openProject(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }

  getGradientClass(color: string): string {
    const gradients: Record<string, string> = {
      cyan: 'from-neon-cyan/20 to-cyan-900/20',
      pink: 'from-neon-pink/20 to-pink-900/20',
      purple: 'from-deep-purple/30 to-purple-900/20'
    };
    return gradients[color] || gradients['cyan'];
  }

  getBorderClass(color: string): string {
    const borders: Record<string, string> = {
      cyan: 'border-neon-cyan/30 hover:border-neon-cyan',
      pink: 'border-neon-pink/30 hover:border-neon-pink',
      purple: 'border-deep-purple/50 hover:border-purple-400'
    };
    return borders[color] || borders['cyan'];
  }

  private initAnimations() {
    const section = this.portfolioSection.nativeElement;

    gsap.from(section.querySelectorAll('.animate-on-scroll'), {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from(section.querySelectorAll('.project-card'), {
      scrollTrigger: {
        trigger: section.querySelector('.projects-grid'),
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 30,
      scale: 0.95,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }
}
