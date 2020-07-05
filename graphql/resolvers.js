import {addMovie, deleteMovie, getMovies, getMovie} from "./db.js";


const resolvers = {
    Query : {
        movies : () => getMovies(),
        movie : (_, {id}) => getMovie(id)
    },
    Mutation : {
        addMovie : (_, {title}) => addMovie(title),
        deleteMovie : (_, {id}) => deleteMovie(id)
    }
}

export default resolvers;