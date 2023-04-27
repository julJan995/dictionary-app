import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DictionaryService, ApiResponse } from 'src/app/service/dictionary.service';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  data: any;
  word: string ='';
  @Output() myEvent = new EventEmitter<any>();

  constructor(private dictionaryService: DictionaryService, private eventService: EventService) { }

  ngOnInit(): void {
  }
  
  onBtnClick() {
    this.eventService.emitComponentSwitcher(true);
    this.dictionaryService.getWord(this.word).subscribe((data: ApiResponse | any) => {
      
      const jsonData = JSON.stringify(data)
      this.data = JSON.parse(jsonData);
      console.log(data);
      this.word = '';
      this.myEvent.emit(data);

      
    })
  }
}
