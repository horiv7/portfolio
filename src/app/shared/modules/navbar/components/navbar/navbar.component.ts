import { Component } from '@angular/core';

@Component({
  selector: 'ps-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  activateLink: string = 'home';
  isMenuOpened: boolean = false;

  openMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
