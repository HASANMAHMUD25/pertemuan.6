import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
   const [movies, setMovies] = useState(data);

function handleClick() {
  const movie = {
    id: nanoid(),
    title: "batman",
    year: 2020,
    type: "Movie",
    poster : "https://assets.blackxperience.com/content/blackattitude/blackstyle/1-batman--robin.jpg",
  };
  setMovies([...movies, movie]);
}

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movie__judul}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {
            movies.map((movie) => (
              <Movie key={movie.id} movie={movie}/> 
            ))}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;