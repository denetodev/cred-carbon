import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component'; // Atualize a importação

describe('LoginPageComponent', () => {
  // Atualize o nome do describe
  let component: LoginPageComponent; // Atualize o tipo do componente
  let fixture: ComponentFixture<LoginPageComponent>; // Atualize o tipo do fixture

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent], // Atualize a importação
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent); // Atualize o componente
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
