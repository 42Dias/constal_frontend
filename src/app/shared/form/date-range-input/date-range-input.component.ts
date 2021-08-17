import {
  Component,
  OnDestroy,
  Input,
  ElementRef,
  Optional,
  Self,
} from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import {
  FormGroup,
  FormBuilder,
  NgControl,
  ControlValueAccessor,
} from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { i18n } from 'src/i18n';

export class DateRange {
  constructor(public start: string, public end: string) {}
}

@Component({
  selector: 'app-date-range-input',
  templateUrl: 'date-range-input.component.html',
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: DateRangeInputComponent,
    },
  ],
  host: {
    '[class.app-date-range-input-floating]':
      'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  },
})
export class DateRangeInputComponent
  implements
    MatFormFieldControl<DateRange>,
    ControlValueAccessor,
    OnDestroy {
  onChange = (value: any) => {};

  onTouched = () => {};

  writeValue(obj: any): void {
    if (obj) {
      this.value = {
        start: obj[0],
        end: obj[1],
      };
    } else {
      this.value = null;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = Boolean(isDisabled);
  }

  valueChangesSubscription: Subscription;

  static nextId = 0;

  startFocused = false;
  endFocused = false;

  get startType() {
    if (this.startFocused) {
      return 'date';
    }

    if (this.range.value.start) {
      return 'date';
    }

    return 'text';
  }

  get endType() {
    if (this.endFocused) {
      return 'date';
    }

    if (this.range.value.end) {
      return 'date';
    }

    return 'text';
  }

  range: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  errorState = false;
  controlType = 'app-date-range-input';
  id = `app-date-range-input-${DateRangeInputComponent.nextId++}`;
  describedBy = '';

  ngDoCheck(): void {
    if (this.ngControl) {
      this.errorState =
        this.ngControl.invalid && this.ngControl.touched;
      this.stateChanges.next();
    }
  }

  get empty() {
    const {
      value: { start, end },
    } = this.range;

    return !start && !end;
  }

  get shouldLabelFloat() {
    return true;
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled
      ? this.range.disable()
      : this.range.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): DateRange | null {
    const {
      value: { start, end },
    } = this.range;

    if (start && end) {
      return new DateRange(start, end);
    }

    return null;
  }
  set value(range: DateRange | null) {
    const { start, end } = range || new DateRange('', '');
    this.range.setValue({ start, end });
    this.stateChanges.next();
  }

  constructor(
    fb: FormBuilder,
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.range = fb.group({
      start: '',
      end: '',
    });

    this.valueChangesSubscription = this.range.valueChanges.subscribe(
      (value) => {
        this.onChange([value.start, value.end]);
        this.onTouched();
      },
    );

    fm.monitor(elRef, true).subscribe((origin) => {
      this.focused = Boolean(origin);
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.valueChangesSubscription.unsubscribe();
    this.fm.stopMonitoring(this.elRef);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if (
      (event.target as Element).tagName.toLowerCase() !=
      'input'
    ) {
      this.elRef.nativeElement
        .querySelector('input')!
        .focus();
    }
  }

  i18n(key) {
    return i18n(key);
  }
}
