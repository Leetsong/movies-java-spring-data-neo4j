
const MoviesList = ({ movies, onClickMovie: handleClickMovie }) => (
  <table className="table table-striped table-hover">
    <thead>
    <tr>
        <th>Movie</th>
        <th>Released</th>
        <th>Tagline</th>
    </tr>
    </thead>
    <tbody>
      { movies && movies.map(m =>
        <tr key={m.title} onClick={() => handleClickMovie(m)}>
          <td className="movie">{ m.title }</td>
          <td>{ m.released }</td>
          <td>{ m.tagline }</td>
        </tr>
      )}
    </tbody>
  </table>
);

const MovieDetail = ({ movie, rolesInfo }) => (
  <div>
    <div className="panel-heading">{ movie.title }</div>
    <div className="row">
        <div className="col-sm-4 col-md-4">
            <img
              alt="Movie Poster"
              className="well"
              src={`http://neo4j-contrib.github.io/developer-resources/language-guides/assets/posters/${encodeURIComponent(movie.title)}.jpg`}
              style={{ margin: '1em' }}
            />
        </div>
        <div className="col-md-8 col-sm-8">
            <h4>Crew</h4>
            <ul>
              { rolesInfo && rolesInfo.length !== 0 && rolesInfo.map((r, i) =>
                <li key={i}>{ r }</li>
              )}
            </ul>
        </div>
    </div>
  </div>
);

export default ({ movies, displayedMovieDetail, onClickMovie: handleClickMovie }) => (
  <div className="row">
    { movies && movies.length !== 0 && <div className="col-md-5">
        <div className="panel panel-default">
          <div className="panel-heading">Search Results</div>
          <MoviesList movies={movies} onClickMovie={handleClickMovie}/>
        </div>
    </div> }
    { displayedMovieDetail && displayedMovieDetail.movie && <div className="col-md-7">
        <div className="panel panel-default">
          <MovieDetail
            movie={displayedMovieDetail.movie}
            rolesInfo={displayedMovieDetail.rolesInfo}
          />
        </div>
      </div> }
  </div>
);
