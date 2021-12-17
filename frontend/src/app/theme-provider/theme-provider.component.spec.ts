import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeProviderComponent } from './theme-provider.component';

describe('ThemeProviderComponent', () => {
  let component: ThemeProviderComponent;
  let fixture: ComponentFixture<ThemeProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
