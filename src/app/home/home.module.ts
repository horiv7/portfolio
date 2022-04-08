import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactFormModule } from '../shared/modules/contactForm/contactForm.module';
import { ModalModule } from '../shared/modules/modalProject/modalProject.module';
import { ModalProjectService } from '../shared/modules/modalProject/services/modaProject.service';
import { HomeComponent } from './components/home/home.component';
import { ProjectCardComponent } from './components/projectCard/projectCard.component';
import { FilterTagsPipe } from './pipes/filter.pipe';

const routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ContactFormModule,
    ModalModule,
  ],
  declarations: [HomeComponent, ProjectCardComponent, FilterTagsPipe],
  exports: [],
  providers: [ModalProjectService],
})
export class HomeModule {}
