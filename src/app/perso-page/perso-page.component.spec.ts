import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoPageComponent } from './perso-page.component';

describe('PersoPageComponent', () => {
  let component: PersoPageComponent;
  let fixture: ComponentFixture<PersoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
