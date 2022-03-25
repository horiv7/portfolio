import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactFormModule } from '../shared/modules/contactForm/contactForm.module';
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
  ],
  declarations: [HomeComponent, ProjectCardComponent, FilterTagsPipe],
  exports: [],
  providers: [],
})
export class HomeModule {}
