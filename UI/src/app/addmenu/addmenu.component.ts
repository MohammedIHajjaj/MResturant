import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

  menuItem:MenuItem = new MenuItem();
  hasSubmit = false;
  responseText = "";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.hasSubmit = true;
    console.log(JSON.stringify(this.menuItem));
    
    this.dataService.addFood(this.menuItem).subscribe(
      (data)=> this.responseText = JSON.stringify(data),
      (err)=> this.responseText = err
    )
  }

}
