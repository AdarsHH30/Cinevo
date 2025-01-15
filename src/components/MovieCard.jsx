// import "../styles/Home.css";
// function MovieCard({ movie }) {
//   function onfavClick() {
//     alert(`${movie.title} added to favorite`);
//   }
//   return (
//     <div className="movie-card">
//       <div className="movie-poster">
//         <img src={movie.url} alt={movie.title} />
//         <div className="movie-overlay">
//           <button className="fav-btn" onClick={onfavClick}>
//             ♥
//           </button>
//         </div>
//       </div>
//       <div className="movie-info">
//         <h3>{movie.title}</h3>
//         <p>{movie.release_date}</p>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";

export default function MovieCard({ movie }) {
  return (
    <Card variant="outlined" sx={{ width: 200 }}>
      <CardOverflow>
        <AspectRatio ratio="3">
          <img src={movie.url} alt={movie.title} />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: "absolute",
            zIndex: 2,
            borderRadius: "50%",
            right: "1rem",
            bottom: 0,
            transform: "translateY(50%)",
          }}
        >
          <Favorite />
        </IconButton>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          <h2>{movie.title}</h2>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions"></Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="horizontal">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">9.3</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">{movie.release_date}</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
