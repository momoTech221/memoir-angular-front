import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCentreDecesComponent } from './gestion-centre-deces.component';

describe('GestionCentreDecesComponent', () => {
  let component: GestionCentreDecesComponent;
  let fixture: ComponentFixture<GestionCentreDecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionCentreDecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionCentreDecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
