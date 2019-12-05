import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainSearchComponent } from "./mainSearch/mainSearch.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ImageService } from "./shared/image.service";
import { ImagefilterPipe } from "./imagefilter.pipe";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainSearchComponent,
    GalleryComponent,
    ImagefilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ImageService, ImagefilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
