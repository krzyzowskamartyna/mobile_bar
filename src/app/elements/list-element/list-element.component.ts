import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export class ListAdapter {
  name: String;
  image: String;
  preparation: String;
  ingrediens: String;
  alkohol: String;
  route: String;
  _id: any;
}

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss'],
})
export class ListElementComponent implements OnInit {

  constructor(private route: Router) { }
  @Input() items: ListAdapter[];
  @Input() color: string;

  goTo(item: ListAdapter) {
    this.route.navigate([item.route]);
  }
  ngOnInit() { }

}
