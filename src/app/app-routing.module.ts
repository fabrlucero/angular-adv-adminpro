import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";


const route: Routes = [
    {path: '', loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)},
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    { path: '**', component: NopagefoundComponent }
]


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }