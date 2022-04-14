import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
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
