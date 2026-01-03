import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: Login
    },

    {
        path: 'layout',
        component: Layout,
        title:'layout'
    },
    
    
    {
    
         path: 'dashboard',
         component: Dashboard,
         title: 'dashboard'


    }
        ];
    

