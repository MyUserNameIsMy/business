import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private router: Router) {
  }

  goToAnalysis(){
    this.router.navigate(['/analysis']);
  }

  downloadSample() {
    window.location.href = 'http://localhost:5000/download_sample';
  }
}
