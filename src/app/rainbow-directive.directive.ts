import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appRainbowDirective]'
})
export class RainbowDirectiveDirective {

    constructor() { }

    @HostBinding('style.color') color!: string;
    @HostBinding('style.border') border!: string;
    @HostBinding('style.borderRadius') borderRadius!: string;

    @HostListener('keypress') changeText() {
        let cYellow = Math.floor(Math.random() * 255);
        let cBlack = Math.floor(Math.random() * 255);
        let cOrange = Math.floor(Math.random() * 255);

        this.color = this.rgbToHex(cYellow, cBlack, cOrange);
        this.border = "1rem solid";
        this.borderRadius = Math.floor(Math.random() * 11) + "rem";
    }

    rgbToHex(cYellow: number, cBlack: number, cOrange: number): string {
        const hexValue = '#' + this.toHex(cYellow) + this.toHex(cBlack) + this.toHex(cOrange);

        return hexValue;
    }

    toHex(num: number) {
        let hexValue = num.toString(16);
        hexValue = (hexValue.length === 1) ? '0' + hexValue : hexValue;

        return hexValue;
    }

}
