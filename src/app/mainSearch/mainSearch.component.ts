import { Component, OnInit, Input } from "@angular/core";
import { ImageService } from "../shared/image.service";

@Component({
  selector: "app-mainSearch",
  templateUrl: "./mainSearch.component.html",
  styleUrls: ["./mainSearch.component.css"]
})
export class MainSearchComponent implements OnInit {
  inputDirty: boolean;

  constructor(private imageService: ImageService) {
    this.inputDirty = false;
  }

  ngOnInit() {
  }

  search(keyword: HTMLInputElement) {
    console.log('Tu vieja trae: ', keyword.value);

    if (keyword.value) {
      console.log('Entro a true: ', keyword.value);
      this.inputDirty = true;
      this.imageService.changeSearch(keyword.value);

    } else {
      console.log('Se fue a false ', keyword.value);
      this.inputDirty = false;
    }

  }
}
