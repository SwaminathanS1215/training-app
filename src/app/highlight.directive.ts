import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    constructor(private element: ElementRef) { }

    @HostListener('keydown') changeStyleOnKeyDown() {
        this.changeStyle('15rem', '4rem');
    }

    @HostListener('keyup') changeStyleOnKeyUp() {
        this.changeStyle('10rem', '2rem');
    }

    changeStyle(width: string, height: string) {
        this.element.nativeElement.style.width = width;
        this.element.nativeElement.style.height = height;
    }

}
