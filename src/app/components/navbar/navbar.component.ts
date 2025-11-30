import { Component, signal, HostListener, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0, opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', style({ height: '*', opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms cubic-bezier(0.4, 0, 0.2, 1)', style({ height: 0, opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  private scrollTimeout: any;
  private lastScrollY = 0;

  navLinks = [
    { label: '關於我', href: '#about' },
    { label: '技能', href: '#skills' },
    { label: '經歷', href: '#experience' },
    { label: '作品集', href: '#portfolio' },
    { label: '成就', href: '#achievements' },
    { label: '聯絡', href: '#contact' },
  ];

  constructor(private ngZone: NgZone) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    // 使用節流優化滾動事件
    if (this.scrollTimeout) return;

    this.scrollTimeout = setTimeout(() => {
      const currentScrollY = window.scrollY;
      this.isScrolled.set(currentScrollY > 50);

      // 只有在向下滾動超過一定距離時才關閉選單
      if (this.isMobileMenuOpen() && currentScrollY > this.lastScrollY + 50) {
        this.closeMobileMenu();
      }

      this.lastScrollY = currentScrollY;
      this.scrollTimeout = null;
    }, 16); // ~60fps
  }

  @HostListener('window:resize')
  onWindowResize() {
    // 視窗大小改變時，如果超過 lg 斷點則關閉移動端選單
    if (window.innerWidth >= 1024 && this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    const newState = !this.isMobileMenuOpen();
    this.isMobileMenuOpen.set(newState);

    // 打開選單時防止背景滾動
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  scrollTo(href: string, event: Event) {
    event.preventDefault();

    // 先關閉選單，然後滾動
    this.closeMobileMenu();

    // 使用 requestAnimationFrame 確保動畫流暢
    requestAnimationFrame(() => {
      const element = document.querySelector(href);
      if (element) {
        // 計算導航欄高度以避免內容被遮擋
        const navHeight = 72;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        });
      }
    });
  }
}
