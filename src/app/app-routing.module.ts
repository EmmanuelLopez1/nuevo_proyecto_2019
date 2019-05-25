import { ComicsComponent } from './components/comics/comics.component';
import { NovelasComponent } from './components/novelas/novelas.component';
import { NovelComponent } from './components/novel/novel.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'novels', component: NovelasComponent },
    { path: 'comics', component: ComicsComponent},
    { path: 'comics/:gender', component: ComicsComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }