import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";
//Necesitamos los siguientes modulos para realizar la declaracion de navegacion
import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { Error404Component } from "./components/error404/error404.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { CollatzComponent } from "./components/collatz/collatz.component";

//Definimos un array con nuestras rutas para los components
const appRoutes: Routes = [
    {
        path:"", component: HomeComponent
    },
    {
        path:"cine", component: CineComponent
    },
    {
        path:"musica", component: MusicaComponent
    },
    {
        path:"numerodoble", component: NumerodobleComponent
    },
    {
        path:"numerodoble/:numero", component: NumerodobleComponent
    },
    {
        path:"collatz/:number", component: CollatzComponent
    },
    {
        path:"**", component: Error404Component
    }
]

//Desde routing debemos exportar dos caracteristicas para implementarlas dentro de module
//1. El proveedor de rutas
export const appRoutingProvider: any[] = [];
//2. El modulo routing indicando el array de rutas declarado
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);