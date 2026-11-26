import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterNavItem {
  label: string;
  href: string;
}
@Component({
  imports: [CommonModule],
  selector: 'app-footer',
  standalone: true,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  readonly whatsappUrl = 'https://wa.me/573166681729';
  readonly linkedinUrl = 'https://www.linkedin.com/in/santiago-rudas-80b706314';
  readonly githubUrl = 'https://github.com/Santiagomed22';

  readonly navItems: FooterNavItem[] = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Certificaciones', href: '#certifications' }
  ];
}
