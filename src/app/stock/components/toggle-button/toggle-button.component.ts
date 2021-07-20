import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonComponent {
  @Input() state: boolean = false;

  @Input() id: string;

  @Output() updateToggleState: EventEmitter<string> = new EventEmitter();

  constructor() {}

  /**
   * emits the toggle stock id
   */
  updateState(): void {
    this.updateToggleState.emit(this.id);
  }
}
