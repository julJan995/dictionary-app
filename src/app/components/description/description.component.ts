import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit, OnDestroy {
  isComponentVisible: boolean = false;
  private componentSwitcherSubscription: Subscription = new Subscription();
  errorMessage?: string;

  @Input() myData: any;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.componentSwitcherSubscription = this.eventService.componentSwitcher$.subscribe(
      status => {
        this.isComponentVisible = status;
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  ngOnDestroy(): void {
    this.componentSwitcherSubscription.unsubscribe();
  }

}
