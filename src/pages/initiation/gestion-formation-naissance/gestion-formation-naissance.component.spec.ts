import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFormationNaissanceComponent } from './gestion-formation-naissance.component';

describe('GestionFormationNaissanceComponent', () => {
  let component: GestionFormationNaissanceComponent;
  let fixture: ComponentFixture<GestionFormationNaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionFormationNaissanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionFormationNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
