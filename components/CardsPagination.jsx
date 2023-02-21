export default function CardsPagination({data}) {

    const API_URL_POSTER = "https://image.tmdb.org/t/p/w500"
    const API_URL_BANNER = "https://image.tmdb.org/t/p/original"

  return (
      <section className="containerCards">
        <h2>Popular movies</h2>
        {data.map((movie) => {
          return (
            <article className="card" key={movie.id}>
              <img src={`${API_URL_POSTER}${movie.poster_path}`} alt=""></img>
            </article>
          );
        })}
      </section>
  );
}
