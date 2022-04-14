import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent {
  private source = range(10, 4);

  private subscription = this.source.subscribe({
    next: (value) => console.log('next', value),
    error: (e) => console.error('error:', e),
    complete: () => console.log('completed')
  });
}
