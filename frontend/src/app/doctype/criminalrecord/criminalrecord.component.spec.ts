import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalrecordComponent } from './criminalrecord.component';

describe('CriminalrecordComponent', () => {
  let component: CriminalrecordComponent;
  let fixture: ComponentFixture<CriminalrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriminalrecordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
