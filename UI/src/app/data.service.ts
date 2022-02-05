import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { restItem } from './restItem';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  restuItem = [];
  menItem = [];

  /*
  restuItem = [
    {title:"rayan",cuisines:"null",lat:200,lng:305,image:"assets/images/ryan.jpg",rate:7.5},
    {title:"dayaa",cuisines:"null",lat:200,lng:305,image:"assets/images/dyaa.jpg",rate:7.5},
    {title:"OJ",cuisines:"null",lat:200,lng:305,image:"assets/images/oj.jpg",rate:7.5},
    {title:"al-am saleh",cuisines:"null",lat:200,lng:305,image:"assets/images/3mslah.png",rate:7.5},
    {title:"KFC",cuisines:"null",lat:200,lng:305,image:"assets/images/kfc.jpg",rate:4.5},
    {title:"zuwar",cuisines:"null",lat:200,lng:305,image:"assets/images/zoar.jpg",rate:7.5},
    {title:"rayan",cuisines:"null",lat:200,lng:305,image:"assets/images/ryan.jpg",rate:7.5},
    {title:"dayaa",cuisines:"null",lat:200,lng:305,image:"assets/images/dyaa.jpg",rate:7.5},
    {title:"OJ",cuisines:"null",lat:200,lng:305,image:"assets/images/oj.jpg",rate:7.5},
    {title:"al-am saleh",cuisines:"null",lat:200,lng:305,image:"assets/images/3mslah.png",rate:7.5},
    {title:"KFC",cuisines:"null",lat:200,lng:305,image:"assets/images/kfc.jpg",rate:4.5},
    {title:"zuwar",cuisines:"null",lat:200,lng:305,image:"assets/images/zoar.jpg",rate:7.5},
  ];

  menItem = [
    {title:"Lobster Bisque",discrption:"Lorem, deren, trataro, filede, nerada",image:"assets/img/menu/lobster-bisque.jpg",price:5.99},
    {title:"Bread Barrel",discrption:" Lorem, deren, trataro, filede, nerada",image:"assets/img/menu/bread-barrel.jpg",price:6.49},
    {title:"Crab Cake",discrption:"A delicate crab cake served on a toasted roll with lettuce and tartar sauce",image:"assets/img/menu/cake.jpg",price:7.99},
    {title:"Caesar Selections",discrption:"Lorem, deren, trataro, filede, nerada",image:"assets/img/menu/caesar.jpg",price:8.99},
    {title:"Tuscan Grilled",discrption:" Grilled chicken with provolone, artichoke hearts, and roasted red pesto",image:"assets/img/menu/tuscan-grilled.jpg",price:8.49},
    {title:"Mozzarella Stick",discrption:" Lorem, deren, trataro, filede, nerada",image:"assets/img/menu/mozzarella.jpg",price:7.49},
    {title:"Greek Salad",discrption:"  Fresh spinach, crisp romaine, tomatoes, and Greek olives",image:"assets/img/menu/greek-salad.jpg",price:9.99},
    {title:"Spinach Salad",discrption:"  Fresh spinach, crisp romaine, tomatoes, and Greek olives",image:"assets/img/menu/spinach-salad.jpg",price:19.99},
    {title:"Lobster Roll",discrption:" Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",image:"assets/img/menu/lobster-roll.jpg",price:4.99},   {title:"Tuscan Grilled",discrption:" Grilled chicken with provolone, artichoke hearts, and roasted red pesto",image:"assets/img/menu/tuscan-grilled.jpg",price:8.49},
    {title:"Mozzarella Stick",discrption:" Lorem, deren, trataro, filede, nerada",image:"assets/img/menu/mozzarella.jpg",price:7.49},
    {title:"Greek Salad",discrption:"  Fresh spinach, crisp romaine, tomatoes, and Greek olives",image:"assets/img/menu/greek-salad.jpg",price:9.99},
    {title:"Spinach Salad",discrption:"  Fresh spinach, crisp romaine, tomatoes, and Greek olives",image:"assets/img/menu/spinach-salad.jpg",price:19.99},
    {title:"Lobster Roll",discrption:" Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",image:"assets/img/menu/lobster-roll.jpg",price:4.99},
  ];
*/
  constructor(private httpClient: HttpClient) { }

  resGetAllURL = "http://localhost:3001/restaurants/getall";
  menuGetAllURL = "http://localhost:3001/foods/getall";
  resPost = "http://localhost:3001/restaurants/add";
  foodPost = "http://localhost:3001/foods/add";

  getRestaurant(): Observable<restItem[]>{
    return this.httpClient.get<restItem[]>(this.resGetAllURL);
  }

  getMenu(): Observable<MenuItem[]>{
    return this.httpClient.get<MenuItem[]>(this.menuGetAllURL);
  }

  addRestaurant(restaurant: restItem): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    }
    let body = {
      "restaurant": restaurant
    }
    return this.httpClient.post(this.resPost,body,httpOptions);
  }

  addFood(food: MenuItem): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    }
    let body = {
      "food": food
    }
    return this.httpClient.post(this.foodPost,body,httpOptions);
  }


}
