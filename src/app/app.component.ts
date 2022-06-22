import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  @Input() in = '';
  @Output() out = new EventEmitter<string>();
  date = new Date();
  click() {
    this.date = new Date();
    this.out.emit(this.date.toString());
  }
}
