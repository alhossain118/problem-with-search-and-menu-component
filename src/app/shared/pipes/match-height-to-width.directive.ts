import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[matchHeightToWidth]',
})
export class MatchHeightToWidthDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setDynamicHeight();
    window.addEventListener('resize', () => {
      this.setDynamicHeight();
    });
  }

  setDynamicHeight() {
    const width = this.el.nativeElement.offsetWidth;
    if (width) {
      this.renderer.setStyle(this.el.nativeElement, 'height', width + 'px');
    }
  }
}
