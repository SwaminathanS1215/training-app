import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stringUpperCase'
})
export class StringUpperCasePipe implements PipeTransform {

    transform(actualString: string): string {
        return actualString.toUpperCase();
    }

}
