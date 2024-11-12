import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRegistreMariageComponent } from './gestion-registre-mariage.component';

describe('GestionRegistreMariageComponent', () => {
  let component: GestionRegistreMariageComponent;
  let fixture: ComponentFixture<GestionRegistreMariageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionRegistreMariageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionRegistreMariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
