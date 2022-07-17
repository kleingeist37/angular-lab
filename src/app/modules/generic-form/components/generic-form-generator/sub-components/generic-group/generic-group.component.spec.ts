import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericGroupComponent } from './generic-group.component';

describe('GenericGroupComponent', () => {
  let component: GenericGroupComponent;
  let fixture: ComponentFixture<GenericGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
