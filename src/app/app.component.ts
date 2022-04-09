import { Component } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'RxJS';

  public subscription: Subscription;

  constructor() {
    const stream = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1500);

      setTimeout(() => {
        observer.complete();
      }, 2100);

      setTimeout(() => {
        observer.error('Something went wrong');
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 2500);
    });

    this.subscription = stream.subscribe(
      {
        next: (value) => console.log('Next:', value),
        error: (error) => console.log('Error:', error),
        complete: () => console.log('Completed')
      }
    );
  }

  public stop() {
    this.subscription.unsubscribe();
  }

}
