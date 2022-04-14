import { Component } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent {

  private source = throwError('Damn');

  private subscription = this.source.pipe(
    catchError((error) => {
      console.log('catch:', error);
      return of('safety result');
    }))
    .subscribe({
      next: (value) => console.log('next', value),
      error: (e) => console.error('error:', e),
      complete: () => console.log('completed')
    });

}
