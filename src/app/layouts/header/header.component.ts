import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass,ContactComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen = false;
  router=inject(Router);

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  navigateToContact(){
    this.router.navigate(['contact']);
    this.isOpen = false;
  }
  navigateToBlog(){
    this.router.navigate(['blogs']);
    this.isOpen = false;
  }
  navigateToProject(){
    this.router.navigate(['project']);
    this.isOpen = false;
  }
  navigateToAbout(){
    this.router.navigate(['about']);
  }
}
