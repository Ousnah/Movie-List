import { createContext, useEffect, useState } from "react";

import { getMovies } from "../Movie";
export const StoreContext = createContext()

export function StoreProvider(props) {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        getMovies().then((response) => {
            setMovies(response)
            console.log(movies)
        })

    }, [])

    return (
        <StoreContext.Provider value={{
            movies: movies,
            setMovies: setMovies
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}