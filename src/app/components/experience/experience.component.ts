import { Component, ElementRef, AfterViewInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChild('experienceSection') experienceSection!: ElementRef;

  expandedId = signal<number | null>(null);

  experiences: Experience[] = [
    {
      id: 1,
      company: '勝和科技有限公司',
      position: 'Senior Engineer',
      period: '2024/1 - 至今',
      current: true,
      description: '負責前端架構設計與團隊技術領導，推動現代化開發流程',
      achievements: [
        '導入 Nx Monorepo 架構，整合多專案與模組共享',
        '升級 Angular 19，全面採用 Signal/Zoneless 架構',
        '性能優化：代碼精簡 (1000行→200行)，提升開發效率',
        '帶領 2-4 人前端團隊，建立技術分享文化'
      ],
      technologies: ['Angular 19', 'Nx Monorepo', 'Signal', 'TailwindCSS', 'Laravel']
    },
    {
      id: 2,
      company: '向尚設計有限公司',
      position: 'Full-stack Engineer',
      period: '2014/1 - 2023/11',
      current: false,
      description: '全端開發工程師，負責電商平台與企業應用系統開發',
      achievements: [
        '開發直銷電商平台 (Angular PWA + Laravel)，會員數 0 → 20,000',
        '實作 Redis 快取，減少 70% 資料庫查詢',
        '建立電子合約平台與個人化推薦演算法',
        '整合第三方支付 (支付寶、微信、LINE Pay)'
      ],
      technologies: ['Angular', 'Vue.js', 'Laravel', 'MySQL', 'Redis', 'Docker']
    },
    {
      id: 3,
      company: '馨琳揚企管顧問有限公司',
      position: 'Engineer',
      period: '2013/1 - 2014/1',
      current: false,
      description: '負責內部系統開發與維護',
      achievements: [
        '開發內部行政管理系統',
        '建立法拍資訊系統',
        '資料庫設計與優化'
      ],
      technologies: ['PHP', 'MySQL', 'jQuery', 'HTML/CSS']
    }
  ];

  ngAfterViewInit() {
    this.initAnimations();
  }

  toggleExpand(id: number) {
    this.expandedId.update(current => current === id ? null : id);
  }

  isExpanded(id: number): boolean {
    return this.expandedId() === id;
  }

  private initAnimations() {
    const section = this.experienceSection.nativeElement;

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

    gsap.from(section.querySelectorAll('.timeline-item'), {
      scrollTrigger: {
        trigger: section.querySelector('.timeline'),
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power3.out'
    });
  }
}
