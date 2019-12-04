import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-mainSearch',
  templateUrl: './mainSearch.component.html',
  styleUrls: ['./mainSearch.component.css']
})
export class mainSearchComponent implements OnInit {

  constructor(private imageService :  ImageService) { }

  ngOnInit() {
  }

  search(keyword : HTMLInputElement){
    // console.log(keyword.value);
    this.imageService.changeSearch(keyword.value);
}

}
