import { Pipe, PipeTransform } from '@angular/core';

import { userDetails } from '../table/table.component';

@Pipe({
    name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

    transform(userData: userDetails[], filterInput: string): userDetails[] {
        let users = userData;
        let filterData: Array<userDetails> = [];
        if (filterInput) {
            // filter for usernames startswith the entered input
            filterData = users.filter(user => {
                return user.userName.startsWith(filterInput.toLowerCase());
            });
        } else {
            filterData = users;
        }

        return filterData;
    }

}
