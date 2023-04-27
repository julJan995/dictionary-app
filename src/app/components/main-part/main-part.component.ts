import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiResponse } from '../../service/dictionary.service';

@Component({
  selector: 'app-main-part',
  templateUrl: './main-part.component.html',
  styleUrls: ['./main-part.component.css']
})
export class MainPartComponent implements OnInit {
  myData?: ApiResponse;
  @Output() myEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  onMyEvent(event: any) {
    this.myData = event;
    this.myEvent.emit(this.myData);
  }
}