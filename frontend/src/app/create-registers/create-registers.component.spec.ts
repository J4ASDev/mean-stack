import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegistersComponent } from './create-registers.component';

describe('CreateRegistersComponent', () => {
  let component: CreateRegistersComponent;
  let fixture: ComponentFixture<CreateRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
