import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'RxJS';

  public sub: Subscription;

  constructor() {
    const intervalStream = interval(1000);

    this.sub = intervalStream
      .pipe(
        filter((value) => value % 2 === 0 ),
        map((value) => `Mapped value ${value}` ),
      )
      .subscribe((value) => {
        console.log(value);
      })
  }

  public stop() {
    this.sub.unsubscribe();
  }

}
