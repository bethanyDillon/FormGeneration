import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormviewerComponent } from './formviewer.component';

describe('FormviewerComponent', () => {
  let component: FormviewerComponent;
  let fixture: ComponentFixture<FormviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
