import { CommonModule } from '@angular/common';  // CommonModule contains ngIf, ngFor
import { FormsModule } from '@angular/forms';    // FormsModule is required for ngModel
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-form',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import FormsModule for ngModel and CommonModule
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent {
  studentName: string = '';
  predictedRank: string | null = null;
  previousPredictions: { name: string; rank: string }[] = [];

  predictRank() {
    const rank = `${this.studentName.length * 10}`; // Logic for calculating rank
    this.predictedRank = rank;
    this.previousPredictions.push({ name: this.studentName, rank });
  }
}
