import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctypePreviewComponent } from './doctype-preview.component';

describe('DoctypePreviewComponent', () => {
  let component: DoctypePreviewComponent;
  let fixture: ComponentFixture<DoctypePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctypePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctypePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
