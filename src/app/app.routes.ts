import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetsComponent } from './projets/projets.component';
import { PhotoComponent } from './photo/photo.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'projets', component: ProjetsComponent},
    { path: 'photo', component: PhotoComponent },
];