import { Component } from '@angular/core';
import { QuizFormComponent } from './quiz-form.component';  // Import the standalone component
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizFormComponent, FormsModule],  // Import FormsModule here
  template: `
    <h1 class="text-center text-xl font-bold my-4">Student Rank Predictor</h1>
    <app-quiz-form></app-quiz-form>  <!-- Add QuizFormComponent here -->
  `
})
export class AppComponent {}
