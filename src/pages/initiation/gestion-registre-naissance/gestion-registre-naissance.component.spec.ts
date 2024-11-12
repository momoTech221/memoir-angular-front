import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRegistreNaissanceComponent } from './gestion-registre-naissance.component';

describe('GestionRegistreNaissanceComponent', () => {
  let component: GestionRegistreNaissanceComponent;
  let fixture: ComponentFixture<GestionRegistreNaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionRegistreNaissanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionRegistreNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
