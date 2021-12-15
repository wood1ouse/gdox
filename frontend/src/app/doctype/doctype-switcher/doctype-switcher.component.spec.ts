import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctypeSwitcherComponent } from './doctype-switcher.component';

describe('DoctypeSwitcherComponent', () => {
  let component: DoctypeSwitcherComponent;
  let fixture: ComponentFixture<DoctypeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctypeSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctypeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
