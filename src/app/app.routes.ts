import { Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { ArrayexComponent } from './arrayex/arrayex.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApiClientComponent } from './api-client/api-client.component';

export const routes: Routes = [
    {
        path: 'addition',
        component: AdditionComponent
    },
    {
        path: 'arrayex',
        component: ArrayexComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'apiClient',
        component: ApiClientComponent
    }
];
