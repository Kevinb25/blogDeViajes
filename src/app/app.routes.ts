import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { PostComponent } from './pages/post/post.component';
import { PlayaComponent } from './pages/home/playa/playa.component';
import { MontanaComponent } from './pages/home/montana/montana.component';
import { CiudadComponent } from './pages/home/ciudad/ciudad.component';
import { RuralComponent } from './pages/home/rural/rural.component';
import { FestivalesComponent } from './pages/home/festivales/festivales.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'home' },
    {
        path: "home", component: HomeComponent, children: [
            { path: 'playa', component: PlayaComponent },
            { path: 'montaña', component: MontanaComponent },
            { path: 'ciudad', component: CiudadComponent },
            { path: 'rural', component: RuralComponent },
            { path: 'festivales', component: FestivalesComponent },
        ]
    },
    { path: "new", component: NewComponent },
    { path: "post", component: PostComponent },
    { path: '**', redirectTo: 'home' }
];
