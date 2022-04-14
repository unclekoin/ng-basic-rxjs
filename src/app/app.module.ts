import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionComponent } from './components/subscrition/subscrition.component';
import { ObservableComponent } from './components/observable/observable.component';
import { OfAnyComponent } from './components/of-any/of-any.component';
import { FromComponent } from './components/from/from.component';
import { RangeComponent } from './components/range/range.component';
import { IntervalComponent } from './components/interval/interval.component';
import { ThrowErrorComponent } from './components/throw-error/throw-error.component';
import { CatchErrorComponent } from './components/catch-error/catch-error.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent,
    ObservableComponent,
    OfAnyComponent,
    FromComponent,
    RangeComponent,
    IntervalComponent,
    ThrowErrorComponent,
    CatchErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
