import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdFormRxComponent } from './md-form-rx.component';

describe('MdFormRxComponent', () => {
  let component: MdFormRxComponent;
  let fixture: ComponentFixture<MdFormRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdFormRxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdFormRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
