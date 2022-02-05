import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu :any=[]
  constructor(private dataService:DataService) {
    dataService.getMenu().subscribe(
      (data: MenuItem[])=>{
        this.menu = data;
        console.log(data);
      },(err)=>{
        console.log("Error: "+ JSON.stringify(err));
      }
    )
   }

  ngOnInit(): void {
    //this.menu = this.datarestu.getmen();
  }

}
