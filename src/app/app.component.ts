import { Component } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'RxJS';

  public subscription: Subscription;
  public stream: Subject<number> = new Subject<number>();
  public counter: number = 0;

  constructor() {
    this.subscription = this.stream.subscribe((value) => {
      console.log('Subscribe:', value);
    });
  }

  public stop() {
    this.subscription.unsubscribe();
  }

  public next() {
    this.counter++;
    this.stream.next(this.counter)
  }

}
