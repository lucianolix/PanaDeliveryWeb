import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPanaderiaComponent } from './modificar-panaderia.component';

describe('ModificarPanaderiaComponent', () => {
  let component: ModificarPanaderiaComponent;
  let fixture: ComponentFixture<ModificarPanaderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPanaderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPanaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
