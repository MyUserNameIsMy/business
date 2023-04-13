import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent {
  selectedFile!: File;
  analysisResult!: string;

  constructor(private http: HttpClient) {
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:5000/analyze', formData).subscribe(
      (response: any) => {
        console.log(response)
        this.analysisResult = response.result;
      },
      (error) => {
        console.log(error); // handle the error
      }
    );
  }
}
