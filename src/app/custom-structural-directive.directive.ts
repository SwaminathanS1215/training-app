import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[appCustomStructuralDirective]'
})
export class CustomStructuralDirectiveDirective {

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) { }

    @Input() set appCustomStructuralDirective(noOfElements: number) {
        for(var i=0; i < noOfElements; i++) {
			this.container.createEmbeddedView(this.template);
		}
    }

}
