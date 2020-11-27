import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByServiceComponent } from './by-service.component';

describe('ByServiceComponent', () => {
  let component: ByServiceComponent;
  let fixture: ComponentFixture<ByServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
