import React from "react";
import { img_300, img_500, unavailable, noPicture } from "../config/config";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useSelector } from "react-redux";

const MovieDetail = () => {
  // DATA
  const { movie, credits } = useSelector((state) => state.detail);

  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>
              {movie.title} ({(movie.release_date || "-----").substring(0, 4)})
            </h3>

            <p>Rating: {movie.vote_average}</p>
          </div>

          <div className="info">
            <div className="genres">
              {movie.genres &&
                movie.genres.map((genre) => (
                  <h3 key={genre.id}>{genre.name}</h3>
                ))}
              {movie.runtime} minutes
            </div>
          </div>
        </div>
        <div className="media">
          <img
            src={
              movie.backdrop_path
                ? `${img_500}/${movie.poster_path}`
                : unavailable
            }
            alt={movie.name}
          />
        </div>
        {movie.tagline && <i className="tagline">{movie.tagline}</i>}
        <div className="description">
          <p>{movie.overview}</p>
        </div>
        <div className="carousel">
          {credits.cast &&
            credits.cast.map((cast) => (
              <img
                src={
                  cast.profile_path
                    ? `${img_300}/${cast.profile_path}`
                    : noPicture
                }
                alt={cast?.name}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
