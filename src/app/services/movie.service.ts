import { Injectable } from '@angular/core';
import { Movie } from '../movie/movie';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    movies: Array<Movie> = [
        {
            name: 'KGF-2',
            languages: ['Kannada', 'Tamil', 'Telugu', 'Malayalam', 'Hindi'],
            genre: 'Action',
            director: 'Prashanth Neel',
            cast: ['Yash', 'Srinidhi', 'Sanjay Dutt', 'Raveena Tandon'],
            producer: 'Vijay Kiragandur',
            rating: '4.8',
            year: 2022,
            image: '../../assets/images/KGF-2.webp'
        },
        {
            name: 'Beast',
            languages: ['Tamil', 'Kannada', 'Telugu', 'Malayalam', 'Hindi'],
            genre: 'Action',
            director: 'Nelson',
            cast: ['Vijay', 'Pooja Hegde', 'Aparna Das', 'VTV Ganesh'],
            producer: 'Kalanithi Maran',
            rating: '3.5',
            year: 2022,
            image: '../../assets/images/Beast.jpg'
        },
        {
            name: 'RRR',
            languages: ['Telugu', 'Tamil', 'Kannada', 'Malayalam', 'Hindi'],
            genre: 'Action',
            director: 'SS Rajamouli',
            cast: ['Ram Charan', 'Jr NTR', 'Alia Bhatt', 'Ajay Devgan'],
            producer: 'D.V.V.Danayya',
            rating: '4.5',
            year: 2022,
            image: '../../assets/images/RRR.jpg'
        },
        {
            name: 'Drishyam',
            languages: ['Malayalam', 'Tamil', 'Telugu', 'Kannada', 'Hindi'],
            genre: 'Thriller',
            director: 'Jeethu Joseph',
            cast: ['Mohanlal', 'Meena', 'Ansiba', 'Asha Sarath'],
            producer: 'Antony Perumbavoor',
            rating: '4.5',
            year: 2013,
            image: '../../assets/images/Drishyam.jpg'
        },
        {
            name: 'Zindagi Na Milegi Dobara',
            languages: ['Hindi', 'Tamil', 'Malayalam', 'Telugu', 'Kannada'],
            genre: 'Drama',
            director: 'Zoya Akhtar',
            cast: ['Hrithik Roshan', 'Farhan Akhtar', 'Abhay Deol', 'Katrina Kaif'],
            producer: '	Farhan Akhtar',
            rating: '4.2',
            year: 2011,
            image: '../../assets/images/Zindagi-Na-Milegi-Dobara.jpg'
        },
        {
            name: 'The Conjuring',
            languages: ['English', 'Hindi', 'Tamil', 'Malayalam', 'Telugu', 'Kannada'],
            genre: 'Horror',
            director: 'James Wan',
            cast: ['Vera Farmiga', 'Patrick Wilson', 'Lili Taylor', 'Ron Livingston'],
            producer: 'Peter Safran',
            rating: '3.8',
            year: 2013,
            image: '../../assets/images/Conjuring.jpg'
        }
    ]

    constructor() { }

    getAllMovies(): Movie[] {
        return this.movies;
    }
}
