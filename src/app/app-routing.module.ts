import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { MainSearchComponent } from './mainSearch/mainSearch.component';

const routes: Routes = [{
  path: 'gallery', component: GalleryComponent
},
{
  path: 'main-search', component: MainSearchComponent
},
{
  path: '', redirectTo: '/main-search', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
