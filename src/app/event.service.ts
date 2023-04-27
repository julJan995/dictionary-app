import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private componentSwitcher = new Subject<boolean>();
  componentSwitcher$ = this.componentSwitcher.asObservable();

  constructor() { }

  emitComponentSwitcher(status: boolean) {
    this.componentSwitcher.next(status);
  }
}
