import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  headerTitle: string
  moviesContent: MovieProps[]
}

interface HeaderContentPros {
  title: string
}

function HeaderContent(props: HeaderContentPros) {
  return (
    <header>
      <span className="category">Categoria:<span>{props.title}</span></span>
    </header>
  )
}

export function Content(props: ContentProps) {
  // Complete aqui

  return (
    <div className="container">

      <HeaderContent title={props.headerTitle}/>

      <main>
        <div className="movies-list">
          {props.moviesContent.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}