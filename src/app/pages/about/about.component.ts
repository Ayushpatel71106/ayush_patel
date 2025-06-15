import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  routers= inject(Router);

  navigateToBlogs(){
    this.routers.navigate(['blogs']);
  }

  navigateToProjects(){
    this.routers.navigate(['project']);
  }

}
