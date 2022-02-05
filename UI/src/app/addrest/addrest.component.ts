import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { restItem } from '../restItem';

@Component({
  selector: 'app-addrest',
  templateUrl: './addrest.component.html',
  styleUrls: ['./addrest.component.css']
})

export class AddrestComponent implements OnInit {

  restaurant:restItem = new restItem();
  hasSubmit = false;
  responseText = "";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.hasSubmit = true;
    console.log(JSON.stringify(this.restaurant));

    this.dataService.addRestaurant(this.restaurant).subscribe(
      (data)=> this.responseText = JSON.stringify(data),
      (err)=> this.responseText = err
    )

  }

}
