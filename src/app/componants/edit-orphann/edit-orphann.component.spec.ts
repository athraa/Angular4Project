import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrphannComponent } from './edit-orphann.component';

describe('EditOrphannComponent', () => {
  let component: EditOrphannComponent;
  let fixture: ComponentFixture<EditOrphannComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrphannComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrphannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
