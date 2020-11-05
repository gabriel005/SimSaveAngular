import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: ContentComponent},
    { path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {  }
export const routingComponents = [ContentComponent, LoginComponent]

