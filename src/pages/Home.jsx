import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    {
      id: 2,
      title: "Terminator",
      release_date: "1999",
      url: "https://via.placeholder.com/200x300?text=Terminator",
    },
    {
      id: 3,
      title: "The Matrix",
      release_date: "1998",
      url: "https://via.placeholder.com/200x300?text=The+Matrix",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
