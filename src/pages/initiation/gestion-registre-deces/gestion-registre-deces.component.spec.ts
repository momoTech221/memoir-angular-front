import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRegistreDecesComponent } from './gestion-registre-deces.component';

describe('GestionRegistreDecesComponent', () => {
  let component: GestionRegistreDecesComponent;
  let fixture: ComponentFixture<GestionRegistreDecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionRegistreDecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionRegistreDecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
