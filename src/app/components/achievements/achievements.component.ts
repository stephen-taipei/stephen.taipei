import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Achievement {
  icon: string;
  value: string;
  label: string;
  description: string;
  color: 'cyan' | 'pink' | 'purple';
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent implements AfterViewInit {
  @ViewChild('achievementsSection') achievementsSection!: ElementRef;

  achievements: Achievement[] = [
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      value: '20,000+',
      label: '服務會員',
      description: '12 個月內會員數從 0 突破 20,000',
      color: 'cyan'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      value: '70%',
      label: '性能提升',
      description: 'Redis 快取策略減少 70% DB 查詢',
      color: 'pink'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      value: '85%+',
      label: 'MAU 維持',
      description: '月活躍用戶維持 85% 以上',
      color: 'purple'
    },
    {
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      value: '80%',
      label: '代碼精簡',
      description: '重構後代碼量減少 80% (1000→200行)',
      color: 'cyan'
    }
  ];

  specialAchievements = [
    {
      title: '全國冠軍',
      subtitle: '街舞競賽',
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    },
    {
      title: '世界八強',
      subtitle: '國際賽事',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  getColorClass(color: string, type: 'text' | 'bg' | 'border'): string {
    const colorMap: Record<string, Record<string, string>> = {
      cyan: { text: 'text-neon-cyan', bg: 'bg-neon-cyan/20', border: 'border-neon-cyan/30' },
      pink: { text: 'text-neon-pink', bg: 'bg-neon-pink/20', border: 'border-neon-pink/30' },
      purple: { text: 'text-purple-400', bg: 'bg-deep-purple/30', border: 'border-purple-400/30' }
    };
    return colorMap[color]?.[type] || colorMap['cyan'][type];
  }

  ngAfterViewInit() {
    this.initAnimations();
  }

  private initAnimations() {
    const section = this.achievementsSection.nativeElement;

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

    // Counter animation for numbers
    section.querySelectorAll('.counter-value').forEach((el: Element) => {
      const value = el.textContent || '';
      const numMatch = value.match(/[\d,]+/);
      if (numMatch) {
        const targetNum = parseInt(numMatch[0].replace(/,/g, ''));
        const suffix = value.replace(/[\d,]+/, '');

        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          textContent: 0,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            const current = Math.round(parseFloat((el as HTMLElement).textContent || '0'));
            if (targetNum >= 1000) {
              (el as HTMLElement).textContent = current.toLocaleString() + suffix;
            } else {
              (el as HTMLElement).textContent = current + suffix;
            }
          }
        });
      }
    });
  }
}
