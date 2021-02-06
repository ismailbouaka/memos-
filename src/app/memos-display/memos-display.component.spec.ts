import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemosDisplayComponent } from './memos-display.component';

describe('MemosDisplayComponent', () => {
  let component: MemosDisplayComponent;
  let fixture: ComponentFixture<MemosDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemosDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemosDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
