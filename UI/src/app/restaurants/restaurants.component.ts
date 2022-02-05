import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { restItem } from '../restItem';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restitem:any =[];
  constructor(private dataService:DataService) {
    dataService.getRestaurant().subscribe(
      (data: restItem[])=>{
        this.restitem = data;
        console.log(data);
        
      },(err)=>{
        console.log("Error: "+ JSON.stringify(err));
      }
    )
   }

  ngOnInit(){
    // this.restitem = this.datarestu.getRestu();
  }

  /*@Input()
  set restu(restu:restItem){
    this._restu = restu;
  }*/

}