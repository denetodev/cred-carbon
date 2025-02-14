import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';

export const routes: Routes = [
  // Redireciona a rota raiz para o registro
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  // Rotas de autenticação
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterComponent },
      // Você pode adicionar mais rotas de autenticação aqui depois
      // { path: 'login', component: LoginComponent },
      // { path: 'forgot-password', component: ForgotPasswordComponent },
    ],
  },

  // Rotas protegidas (que requerem autenticação)
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },

  // Rota para página não encontrada (404)
  { path: '**', redirectTo: 'dashboard' },
];
