import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ImageService {
  selectedImage: any[] = [];
  private search = new BehaviorSubject<string>("Default");
  searchItem = this.search.asObservable();

  constructor(private http: HttpClient) { }

  changeSearch(searchItem) {
    this.search.next(searchItem);
  }

  getfromApi() {
    return this.http.get(
      `https://pixabay.com/api/?key=${environment.API_KEY}&image_type=photo&pretty=true`
    );
  }

  getImagebyfilter(query) {
    return this.http.get(
      `https://pixabay.com/api/?key=${environment.API_KEY}&q=${query}&image_type=photo&pretty=true`
    );
  }
}
