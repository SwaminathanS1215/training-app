import { Pipe, PipeTransform } from '@angular/core';

import { userDetails } from '../table/table.component';

@Pipe({
    name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {
    // Filter function to filter the users with given inputs
    transform(userData: userDetails[], filterBy: string, searchInput: string, filterByLocation: string, filterByDesignation: string): userDetails[] {
        let users = userData;
        let filterData: Array<userDetails> = [];

        if (filterBy === 'location&Designation') {
            // filter for location and designation startswith the entered input
            if (filterByLocation && filterByDesignation) {
                filterData = users.filter(user => {
                    return user['location'].startsWith(filterByLocation) && user.designation.startsWith(filterByDesignation);
                });
            } else {
                filterData = users;
            }

        } else {
            // filter for any attributes startswith the entered input
            if (searchInput) {
                filterData = users.filter(user => {
                    return user[filterBy as keyof userDetails].startsWith(searchInput)
                });
            } else {
                filterData = users;
            }
        }
        return filterData;
    }
}
