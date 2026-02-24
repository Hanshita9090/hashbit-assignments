import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: "8.8", description: "A thief who steals corporate secrets through dream-sharing technology.", image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
  { id: 2, title: "The Dark Knight", genre: "Action", rating: "9.0", description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy.", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 3, title: "Interstellar", genre: "Sci-Fi", rating: "8.6", description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: 4, title: "Barbie", genre: "Comedy", rating: "7.2", description: "Barbie and Ken leave Barbieland and discover the joys and perils of living among humans.", image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" },
  { id: 5, title: "Joker", genre: "Drama", rating: "8.5", description: "A failed comedian begins a descent into madness and becomes the Joker.", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { id: 6, title: "Titanic", genre: "Romance", rating: "7.9", description: "A romance blossoms between a wealthy girl and a poor artist aboard the ill-fated Titanic.", image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  { id: 7, title: "The Matrix", genre: "Sci-Fi", rating: "8.7", description: "A hacker discovers the world is a simulation and joins a rebellion.", image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
  { id: 8, title: "Parasite", genre: "Thriller", rating: "8.6", description: "A poor family schemes to become employed by a wealthy family.", image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { id: 9, title: "Avengers Endgame", genre: "Action", rating: "8.4", description: "The Avengers assemble once more to reverse Thanos's actions and restore balance to the universe.", image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { id: 10, title: "Oppenheimer", genre: "Drama", rating: "8.9", description: "The story of American scientist J. Robert Oppenheimer and the development of the atomic bomb.", image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
  { id: 11, title: "Gladiator", genre: "Action", rating: "8.5", description: "A Roman general seeks revenge against the corrupt emperor who murdered his family.", image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { id: 12, title: "The Godfather", genre: "Crime", rating: "9.2", description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.", image: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg" },
  { id: 13, title: "Forrest Gump", genre: "Drama", rating: "8.8", description: "The presidencies of Kennedy and Johnson through the eyes of an Alabama man.", image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg" },
  { id: 14, title: "Pulp Fiction", genre: "Crime", rating: "8.9", description: "The lives of two mob hitmen, a boxer, and a pair of bandits intertwine.", image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg" },
  { id: 15, title: "Spider-Man: No Way Home", genre: "Action", rating: "8.2", description: "Peter Parker asks Doctor Strange for help after his identity is revealed, causing dangerous multiverse chaos.", image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
  { id: 16, title: "The Batman", genre: "Action", rating: "7.9", description: "Batman ventures into Gotham's underworld to expose a killer and uncovers a vast criminal conspiracy.", image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
];

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>Movie not found!</div>;

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <button
        onClick={() => navigate("/")}
        style={{ background: "#f5c518", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", marginBottom: "30px" }}
      >
        ← Back
      </button>
      <div style={{ display: "flex", gap: "40px", maxWidth: "900px", margin: "0 auto" }}>
        <img src={movie.image} alt={movie.title} style={{ width: "300px", height: "400px", objectFit: "cover", borderRadius: "10px" }} />
        <div style={{ color: "#fff" }}>
          <h1 style={{ color: "#f5c518" }}>{movie.title}</h1>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
          <p style={{ lineHeight: "1.6", color: "#aaa" }}>{movie.description}</p>
          <button
            onClick={() => navigate(`/booking/${movie.id}`)}
            style={{ marginTop: "30px", background: "#f5c518", border: "none", padding: "15px 30px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", fontSize: "16px" }}
          >
            🎟️ Book Seat
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;