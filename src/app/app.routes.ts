import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { PostComponent } from './pages/post/post.component';
import { BlogComponent } from './components/blog/blog.component';


export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'home' },
    { path: "home", component: HomeComponent },
    { path: "new", component: NewComponent },
    { path: "post/:idPost", component: PostComponent },
    { path: '**', redirectTo: 'home' }
];