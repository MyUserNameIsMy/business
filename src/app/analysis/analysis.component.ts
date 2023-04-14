import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent {
  selectedFile!: File;
  resultReceived: boolean = false;
  public analysisResult!: {'npv': any, 'irr': any, 'pi': any, 'pbpd': any, 'verdict_npv': any, 'verdict_irr': any,
    'verdict_pi': any, 'recommendations': any, 'debt_ratio': any, 'equity_ratio': any}

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
        console.log(response.data)
        this.analysisResult = JSON.parse(JSON.stringify(response.data));
        this.resultReceived = true;
      },
      (error) => {
        console.log(error); // handle the error
      }
    );
  }
}
