import { Component, OnInit } from '@angular/core';
import { 
    faUserCircle,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-one-way-data-binding',
    templateUrl: './one-way-data-binding.component.html',
    styleUrls: ['./one-way-data-binding.component.css']
})
export class OneWayDataBindingComponent implements OnInit {
    // class attributes
    name: string = 'Swaminathan S';
    location: string = 'Tamil Nadu';
    technicalSkills: string[] = [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'TypeScript'
    ];
    // font awesome icons
    icons = {
        userCircle: faUserCircle,
        locationDot: faLocationDot
    };

    ngOnInit(): void {
    }
}
