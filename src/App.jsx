import './App.css'
import MovieCard from './components/MovieCard'
function App() {

  const movieNumber = 1;

  return (
    <>
  {movieNumber === 1? (
   <MovieCard movie={{title: "kings", release_date: 2025}}/>
  ) : ( <MovieCard movie={{title: "fitmania", release_date: 2022}}/>)}
    </>
  )
}

export default App
