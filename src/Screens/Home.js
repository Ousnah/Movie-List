import { useContext, useState } from "react"
import { StoreContext } from "../Providers/Store"

export default function Home() {

    const { setMovies, movies } = useContext(StoreContext)
    const { updateMovies, setUpdateMovies } = useState(false)

    function deleteMovie(movies, movie) {
        const newMovies = movies.filter((m) => m.id !== movie.id)
        setMovies(newMovies)
    }

    function updateMovie(movies, movie) {
        if (updateMovies) {
            setUpdateMovies(false)
        }
    }

    return (
        <div>
            {movies.map(movie => {
                return (
                    <div>
                        <h1>{movie.title}</h1>
                        <p>{movie.category}</p>
                        <img src={movie.image}/>
                        <button onClick={() => deleteMovie(movies, movie)}>Delete</button>
                        <button onClick={() => updateMovie()}>Update</button>
                    </div>
                )
            })}
        </div>
    )

}