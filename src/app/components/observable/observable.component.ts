import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() {
    setTimeout(() => this.subscription.unsubscribe(), 4500);
  }

  ngOnInit(): void {
  }

  private source = new Observable((observer: any) => {
    let count = 0;
    console.log('Observable created');
    const timer = setInterval(() => {
      if (count < 3) {
        observer.next(count++);
      } else {
        // observer.error('Damn!');
        observer.complete();
      }
    }, 1000);

    return () => {
      console.log('Observable destroyed');
      clearInterval(timer);
    };
  });

  public subscription = this.source.subscribe({
      next(value) {
        console.log('next:', value);
      },
      error(e) {
        console.error('error:', e);
      },
      complete() {
        console.log('completed');
      }
    }
  );
}
