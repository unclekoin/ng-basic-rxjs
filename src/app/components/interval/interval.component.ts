import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {
  private source = interval(2000)
    .pipe(
      take(2)
    )

  private subscription = this.source.subscribe({
    next: (value) => console.log('next', value),
    error: (e) => console.error('error:', e),
    complete: () => console.log('completed')
  });
}
