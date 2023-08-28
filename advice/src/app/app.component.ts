import { Component } from '@angular/core';
import { AdviceService } from './services/advice.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advice';
  advice: any = '';
  clicado: number = 0;
  isLoading: boolean = false;

  constructor(private adviceApi: AdviceService) { }

  randomAdvice() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.adviceApi.getAdvice().subscribe({
        next: (res) => {
          this.isLoading = false;
          this.clicado++;
          console.log(this.clicado);
          console.log(res, 'randomAdvice');
          this.advice = res;
        },
        error: (err)=> {
          console.log(err)
          alert("Tente novamente mais tarde!")
        }
      });

    } 
  }
}
