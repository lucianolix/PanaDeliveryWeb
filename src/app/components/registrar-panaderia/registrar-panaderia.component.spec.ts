import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPanaderiaComponent } from './registrar-panaderia.component';

describe('RegistrarPanaderiaComponent', () => {
  let component: RegistrarPanaderiaComponent;
  let fixture: ComponentFixture<RegistrarPanaderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPanaderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPanaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
