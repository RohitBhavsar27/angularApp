import { Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { ArrayexComponent } from './arrayex/arrayex.component';

export const routes: Routes = [
    {
        path: 'addition',
        component: AdditionComponent
    },
    {
        path: 'arrayex',
        component: ArrayexComponent
    },
];
