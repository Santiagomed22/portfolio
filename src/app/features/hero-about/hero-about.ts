import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../core/data/portfolio.data';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-hero-about',
  styleUrl: './hero-about.css',
  templateUrl: './hero-about.html',
})
export class HeroAbout {
  protected readonly profile = PROFILE_DATA;
}

