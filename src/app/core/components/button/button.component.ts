import { Component, EventEmitter, Input, Output } from '@angular/core';

type BehaviorType = 'button' | 'reset' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public behaviorType: BehaviorType = 'button';

  @Input() public disabled: boolean = false;

  @Input() public classNames: string = '';

  @Output() public buttonClick = new EventEmitter<Event>();

  public onButtonClick(event: Event): void {
    this.buttonClick.emit(event);
  }
}
