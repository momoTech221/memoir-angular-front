import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCentreNaissanceComponent } from './gestion-centre-naissance.component';

describe('GestionCentreNaissanceComponent', () => {
  let component: GestionCentreNaissanceComponent;
  let fixture: ComponentFixture<GestionCentreNaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionCentreNaissanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionCentreNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
