import { useState } from "react"
import './App.css'
// omdb is an API with data about movies, the free key(like the one used here) lasts for 1000 days
// key: 4ffcc20c

const URL_OF_API = 'http://www.omdbapi.com?apikey=4ffcc20c'

const App = () =>{
    

    const searchMovie = async(title) => {
        const response = await fetch(`${URL_OF_API}&s=${title}`)
        const data = await response.json()

        console.log(data.Search)
    }
    
    return (
        <>
            <input type="text" id="text"
            />
        </>
    )
}

export default App