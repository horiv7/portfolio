import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getData } from '../../services/projects.data';
import { ProjectInterface } from '../../types/project.interface';

@Component({
  selector: 'ps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projects$!: Observable<ProjectInterface[]>;
  filterTag!: string;
  tags = [
    'all',
    'sass',
    'bootstrap',
    'angular',
    'ui/ux',
    'backend',
    'fullStack',
  ];
  constructor() {}

  ngOnInit(): void {
    this.projects$ = getData();
    this.filterTag = this.tags[0];
  }
  toggleFilter(tag: string): void {
    this.filterTag = tag;
  }
}
