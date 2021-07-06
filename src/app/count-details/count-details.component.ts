import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from '../get-count.service';

@Component({
  selector: 'app-items',
  templateUrl: './count-details.component.html',
  styleUrls: ['./count-details.component.scss'],
})
export class ItemsComponent implements OnInit {

result=[]
  constructor( private itemsService: ItemsService) {}

  ngOnInit() {
    console.log("before call")
     this.itemsService.resolveItems()
     .subscribe(data => { console.log(data); this.result = data});
  }
 
}