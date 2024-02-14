import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validationControl]',
})
export class ValidationControlDirective implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  public _validationControl: AbstractControl;
  public get validationControl(): AbstractControl {
    return this._validationControl;
  }
  @Input() set validationControl(value: AbstractControl) {
    this._validationControl = value;
  }

  @HostListener('keyup', ['$event'])
  public onKeyUp(): void {
    this.addClasses();
  }

  @HostListener('change', ['$event'])
  public onChange(): void {
    this.addClasses();
  }

  @HostListener('ngModelChange') onNgModelChange() {
    this.addClasses();
  }

  public ngAfterViewInit(): void {
    this.addClasses();
  }

  private addClasses() {
    setTimeout(() => {
      if (this.validationControl.valid) {
        this.renderer.removeClass(this.el.nativeElement, 'is-invalid');
        this.renderer.addClass(this.el.nativeElement, 'is-valid');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'is-valid');
        this.renderer.addClass(this.el.nativeElement, 'is-invalid');
      }
    }, 150);
  }
}
