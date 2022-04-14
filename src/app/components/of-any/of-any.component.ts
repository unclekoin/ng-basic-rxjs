import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-any',
  templateUrl: './of-any.component.html',
  styleUrls: ['./of-any.component.scss']
})
export class OfAnyComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  private source = of({ message: 'any Object' });

  private subscription = this.source.subscribe({
    next: (value) => console.log('next', value),
    error: (e) => console.error('error:', e),
    complete: () => console.log('completed')
  });

}
