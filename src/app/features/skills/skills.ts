import { Component } from '@angular/core';
import { SKILLS_DATA } from '../../core/data/portfolio.data';

@Component({
  imports: [],
  selector: 'app-skills',
  standalone: true,
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly skillCategories = SKILLS_DATA;
}
