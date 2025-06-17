import React, { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";

function MovieDetail() {
  const [movie] = useState(movieDetailData);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div
      className="moive-detail"
      style={{ padding: "20px", fontFamily: "Arial" }}
    >
      <img
        src={`${imageBaseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />
      <h1>{movie.title}</h1>
      <p>
        <strog>평점 : </strog> {movie.vote_average}
      </p>
      <p>
        <strong>장르 :</strong>
        {movie.genres.map((genre) => genre.name).join(",")}
      </p>
      <p>
        <strong>상영 시간 :</strong> {movie.runtime}분
      </p>
      <p>
        <strong>줄거리 :</strong> {movie.overview}
      </p>
      {movie.production_companies.length > 0 && (
        <div>
          <strong>제작사 :</strong>
          <ul>
            {movie.production_companies.map((company) => (
              <li key={company.id}>
                {company.logo_path && (
                  <img
                    src={`${imageBaseUrl}${company.logo_path}`}
                    alt={company.name}
                    style={{
                      width: "100px",
                      verticalAlign: "middle",
                      marginRight: "10px",
                    }}
                  />
                )}
                {company.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
