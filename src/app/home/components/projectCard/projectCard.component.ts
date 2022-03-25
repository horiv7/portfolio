import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../types/project.interface';

@Component({
  selector: 'ps-project-card',
  templateUrl: './projectCard.component.html',
  styleUrls: ['./projectCard.component.scss'],
})
export class ProjectCardComponent {
  @Input('project') project!: ProjectInterface;
  constructor() {}
}
