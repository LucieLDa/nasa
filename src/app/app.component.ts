import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './nasa.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nasa';
  imgOfTheDay : string = "";

  private nasaService = inject(NasaService);

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe({
      next: (data) => {
        this.imgOfTheDay = data.url;
      }
    });
  }
}
