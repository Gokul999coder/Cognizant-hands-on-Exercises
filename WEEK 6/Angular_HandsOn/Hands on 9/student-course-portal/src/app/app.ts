import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { LoadingService } from './services/loading';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,CommonModule, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(
    public loadingService: LoadingService
){}
  protected readonly title = signal('student-course-portal');
}
