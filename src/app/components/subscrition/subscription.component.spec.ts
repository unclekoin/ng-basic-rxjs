import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscritionComponent } from './subscrition.component';

describe('SubscritionComponent', () => {
  let component: SubscritionComponent;
  let fixture: ComponentFixture<SubscritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
