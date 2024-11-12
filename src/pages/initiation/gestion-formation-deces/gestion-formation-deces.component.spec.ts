import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFormationDecesComponent } from './gestion-formation-deces.component';

describe('GestionFormationDecesComponent', () => {
  let component: GestionFormationDecesComponent;
  let fixture: ComponentFixture<GestionFormationDecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionFormationDecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionFormationDecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
