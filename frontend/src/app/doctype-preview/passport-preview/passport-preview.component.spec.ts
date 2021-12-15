import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportPreviewComponent } from './passport-preview.component';

describe('PassportPreviewComponent', () => {
  let component: PassportPreviewComponent;
  let fixture: ComponentFixture<PassportPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
