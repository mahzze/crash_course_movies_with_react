import { useState } from "react"
import './App.css'
import MovieCard from "./MovieCard"
import SearchIcon from './search.svg'

// omdb is an API with data about movies, the free key(like the one used here) lasts for 1000 days
// key: 4ffcc20c

const URL_OF_API = 'http://www.omdbapi.com?apikey=4ffcc20c'

const App = () =>{
	const [searchText, setSearchText] = useState([])
	const [movies, setMovies] = useState([])

	const searchMovies = async(title) => {
		const response = await fetch(`${URL_OF_API}&s=${title}`)
		const data = await response.json()

		setMovies(data.Search)
	}

	return (
		<div className="app">
			<h1>Movies stupid app </h1>

			<div className="search">
			<input 
			placeholder="Search for Movies" 
			value={searchText}
			onChange={e => setSearchText(e.target.value)} 
			/>

			<img 
			src={SearchIcon}
			alt="search"
			onClick={() => searchMovies(searchText)}
			/>
		</div>

		{movies?.length > 0
		? (
			<div className="container">
				{movies.map(movie => <MovieCard movie={movie}/>)}
			</div>
		) : (
			<div className="empty">
				<h2>No movies found</h2>
			</div>
		)
		}
		</div>

	)
}

export default App