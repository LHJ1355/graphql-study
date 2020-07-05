import axios from "axios";

export let movies = [
    {
        id : 1,
        title : "aaa",
    },
    {
        id : 2,
        title : "aaa",
    },
    {
        id : 3,
        title : "aaa",
    }
]
export const getMovies = async() => {
    const {data : { data : { movies }}} = await axios("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    return movies;
}

export const getMovie = async(id) => {
    const {data : { data : { movies }}} = await axios("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    const selectedMovie = movies.filter((movie) => {
        return movie.id === id;
    });
    console.log(selectedMovie);
    return selectedMovie;
}

export const addMovie = (title) => {
    const newMovie = {
        id : movies.length + 1,
        title : title
    }
    movies.push(newMovie);
    return newMovie;
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter((movie) => {
        return movie.id !== id;
    })
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else{
        return false;
    }
}
