import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCentreMariageComponent } from './gestion-centre-mariage.component';

describe('GestionCentreMariageComponent', () => {
  let component: GestionCentreMariageComponent;
  let fixture: ComponentFixture<GestionCentreMariageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionCentreMariageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionCentreMariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
