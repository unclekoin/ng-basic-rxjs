import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent {

  private source = from([10, 20, 30]);

  private subscription = this.source.subscribe({
    next: (value) => console.log('next', value),
    error: (e) => console.error('error:', e),
    complete: () => console.log('completed')
  });
}
