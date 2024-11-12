import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHideUsersComponent } from './gestion-hide-users.component';

describe('GestionHideUsersComponent', () => {
  let component: GestionHideUsersComponent;
  let fixture: ComponentFixture<GestionHideUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionHideUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionHideUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
