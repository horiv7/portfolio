import { Component, Input } from '@angular/core';
import { ModalProjectService } from 'src/app/shared/modules/modalProject/services/modaProject.service';
import { ProjectInterface } from '../../types/project.interface';

@Component({
  selector: 'ps-project-card',
  templateUrl: './projectCard.component.html',
  styleUrls: ['./projectCard.component.scss'],
})
export class ProjectCardComponent {
  @Input('project') project!: ProjectInterface;
  constructor(private modalService: ModalProjectService) {}
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
