import { Component, OnInit, Input } from '@angular/core';

export interface ListItemDetails {
  name: String;
  image: String;
  thumb: String;
  preparation: String;
  ingrediens: String;
  alkohol: String;
  url: String;
  id: number;
}

@Component({
  selector: 'app-list-element-details',
  templateUrl: './list-element-details.component.html',
  styleUrls: ['./list-element-details.component.scss'],
})
export class ListElementDetailsComponent implements OnInit {

  constructor() { }
  @Input() item: ListItemDetails;

  ngOnInit() { }

}
