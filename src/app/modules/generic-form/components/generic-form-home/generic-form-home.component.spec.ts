import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormHomeComponent } from './generic-form-home.component';

describe('GenericFormHomeComponent', () => {
  let component: GenericFormHomeComponent;
  let fixture: ComponentFixture<GenericFormHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericFormHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
