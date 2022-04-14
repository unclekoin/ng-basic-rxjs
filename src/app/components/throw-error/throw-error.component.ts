import { Component } from '@angular/core';
import { throwError, EMPTY, NEVER } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent {
  // private source = throwError('Damp!');

  // private source = EMPTY.pipe(
  //   defaultIfEmpty('any default value')
  // );

  private source = NEVER;

  private subscription = this.source.subscribe({
    next: (value) => console.log('next', value),
    error: (e) => console.error('error:', e),
    complete: () => console.log('completed')
  });
}
