import { useRouter } from "next/router";

export default function CardsPagination({data}) {

    const API_URL_POSTER = "https://image.tmdb.org/t/p/w500"
    const API_URL_BANNER = "https://image.tmdb.org/t/p/original"

    const router = useRouter()

    const handleMovieDetails = (e, id, movie) => {
      e.preventDefault()
      let nameMovie = movie.split(" ").map(movie => movie.replace(":", "").toLowerCase()).join("_")
      console.log(nameMovie)
      router.push(`movie/${nameMovie}/${id}`)
    }

  return (
      <section className="containerCards">
        <h2>Popular movies</h2>
        {data.map((movie) => {
          return (
            <article className="card" key={movie.id} onClick={(e) => handleMovieDetails(e, movie.id, movie.original_title)}>
              <img src={`${API_URL_POSTER}${movie.poster_path}`} alt=""></img>
            </article>
          );
        })}
      </section>
  );
}
