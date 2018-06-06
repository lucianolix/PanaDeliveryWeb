import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPanaderiasComponent } from './lista-panaderias.component';

describe('ListaPanaderiasComponent', () => {
  let component: ListaPanaderiasComponent;
  let fixture: ComponentFixture<ListaPanaderiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPanaderiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPanaderiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
