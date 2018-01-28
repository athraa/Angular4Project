import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrphanComponent } from './add-orphan.component';

describe('AddOrphanComponent', () => {
  let component: AddOrphanComponent;
  let fixture: ComponentFixture<AddOrphanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrphanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrphanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
