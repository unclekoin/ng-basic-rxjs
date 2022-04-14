import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfAnyComponent } from './of-any.component';

describe('OfAnyComponent', () => {
  let component: OfAnyComponent;
  let fixture: ComponentFixture<OfAnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfAnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
