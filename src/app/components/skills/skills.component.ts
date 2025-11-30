import { Component, ElementRef, AfterViewInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number;
  color: 'cyan' | 'pink' | 'purple';
}

interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillsSection') skillsSection!: ElementRef;

  activeCategory = signal('frontend');

  categories: SkillCategory[] = [
    {
      id: 'frontend',
      title: '前端開發',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      skills: [
        { name: 'Angular', level: 95, color: 'cyan' },
        { name: 'TypeScript', level: 90, color: 'cyan' },
        { name: 'RxJS', level: 85, color: 'pink' },
        { name: 'TailwindCSS', level: 90, color: 'cyan' },
        { name: 'Vue.js', level: 75, color: 'purple' },
        { name: 'SCSS/CSS', level: 90, color: 'pink' },
      ]
    },
    {
      id: 'backend',
      title: '後端開發',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      skills: [
        { name: 'Laravel', level: 90, color: 'pink' },
        { name: 'PHP', level: 88, color: 'purple' },
        { name: 'MySQL', level: 85, color: 'cyan' },
        { name: 'Redis', level: 82, color: 'pink' },
        { name: 'WebSocket', level: 80, color: 'cyan' },
        { name: 'Swoole', level: 75, color: 'purple' },
      ]
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      skills: [
        { name: 'Docker', level: 85, color: 'cyan' },
        { name: 'GitLab CI/CD', level: 82, color: 'pink' },
        { name: 'GCP', level: 78, color: 'cyan' },
        { name: 'Nginx', level: 80, color: 'purple' },
        { name: 'Linux/Ubuntu', level: 82, color: 'pink' },
        { name: 'Git', level: 90, color: 'cyan' },
      ]
    },
    {
      id: 'ai',
      title: 'AI 工具',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      skills: [
        { name: 'Claude AI', level: 88, color: 'pink' },
        { name: 'Cursor AI', level: 85, color: 'cyan' },
        { name: 'OpenAI API', level: 82, color: 'purple' },
        { name: 'Prompt Engineering', level: 85, color: 'pink' },
        { name: 'AI Integration', level: 80, color: 'cyan' },
      ]
    }
  ];

  get activeSkills(): Skill[] {
    return this.categories.find(c => c.id === this.activeCategory())?.skills || [];
  }

  ngAfterViewInit() {
    this.initAnimations();
  }

  setActiveCategory(id: string) {
    this.activeCategory.set(id);
  }

  getColorClass(color: string): string {
    const colorMap: Record<string, string> = {
      cyan: 'from-neon-cyan to-cyan-400',
      pink: 'from-neon-pink to-pink-400',
      purple: 'from-deep-purple to-purple-400'
    };
    return colorMap[color] || colorMap['cyan'];
  }

  private initAnimations() {
    const section = this.skillsSection.nativeElement;

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
  }
}
