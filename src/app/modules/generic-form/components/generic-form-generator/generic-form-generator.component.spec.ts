import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormGeneratorComponent } from './generic-form-generator.component';

describe('GenericFormHomeComponent', () => {
  let component: GenericFormGeneratorComponent;
  let fixture: ComponentFixture<GenericFormGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericFormGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
