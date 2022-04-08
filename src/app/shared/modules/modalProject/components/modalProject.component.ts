import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ProjectInterface } from 'src/app/home/types/project.interface';
import { ModalProjectService } from '../services/modaProject.service';

@Component({
  selector: 'app-modal',
  templateUrl: 'modalProject.component.html',
  styleUrls: ['modalProject.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalProjectComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input('project') projectProps!: ProjectInterface;

  private element: any;

  constructor(
    private modalService: ModalProjectService,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.initializeModal();
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('app-modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('app-modal-open');
  }
  initializeModal(): void {
    if (!this.id) {
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener(
      'click',
      (el: { target: { className: string } }) => {
        if (el.target.className === 'app-modal') {
          this.close();
        }
      }
    );

    this.modalService.add(this);
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
