import { Component, signal } from '@angular/core';
import { CERTIFICATIONS_DATA } from '../../core/data/portfolio.data';
import { CertificationCategory, DiplomaItem } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  protected readonly categories = CERTIFICATIONS_DATA;
  protected readonly selectedCategory = signal<CertificationCategory | null>(null);
  protected readonly activeDiploma = signal<DiplomaItem | null>(null);

  protected openCategory(category: CertificationCategory): void {
    this.selectedCategory.set(category);
    this.activeDiploma.set(category.diplomas[0] ?? null);
  }

  protected closeModal(): void {
    this.selectedCategory.set(null);
    this.activeDiploma.set(null);
  }

  protected selectDiploma(diploma: DiplomaItem): void {
    this.activeDiploma.set(diploma);
  }
}
