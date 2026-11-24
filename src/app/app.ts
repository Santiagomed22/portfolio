import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { HeroAbout } from './features/hero-about/hero-about';
import { Experience } from './features/experience/experience';

@Component({
  imports: [RouterOutlet,Navbar, HeroAbout, Experience],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portafolio-santiago');
}
