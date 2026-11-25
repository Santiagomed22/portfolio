import { Component, signal } from '@angular/core';
import { PROFILE_DATA } from '../../../core/data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly profile = PROFILE_DATA;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected goToCertifications(event: Event): void {
    event.preventDefault();
    this.closeMenu();

    setTimeout(() => {
      const element = document.getElementById('certifications');
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}