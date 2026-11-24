import { Component } from '@angular/core';
import { EXPERIENCE_DATA } from '../../core/data/portfolio.data';
import { ExperienceItem } from '../../core/models/portfolio.model';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  experiences: ExperienceItem[] = EXPERIENCE_DATA;
}
