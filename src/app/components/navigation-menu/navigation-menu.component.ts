import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  switchComponent() {
    this.eventService.emitComponentSwitcher(false);
  }
}
