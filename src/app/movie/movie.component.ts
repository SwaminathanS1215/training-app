import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from './movie';

import {
    faStar
} from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
    // class attributes
    movieData: Movie[] = [];

    // filter attributes
    filterOptions = '';
    // font awesome icons
    icons = {
        star: faStar
    };

    // Dependecy Injection in constructor
    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.getMovies();
    }
    getMovies() {
        this.movieData = this.movieService.getAllMovies();
    }



}
