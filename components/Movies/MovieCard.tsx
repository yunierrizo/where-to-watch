import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./page.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Movie } from "../../types/types";
import Link from "next/link";

function convertMinutesToHours(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return ` ${hours}hr ${remainingMinutes}min`;
}

interface Props {
    movie: Movie;
    key?: string;
}

export default function MovieCard({ movie }: Props) {
    console.log(movie);

    return (
        <Grid xs={6} sm={4} md={6} lg={4} key={movie?.imdbId}>
            <Link href={`/${movie.imdbId}`}>
                <Card sx={{ display: "flex" }} className={styles.movieCard}>
                    <CardMedia
                        component="img"
                        sx={{ width: 100 }}
                        image={movie?.posterURLs?.original}
                        alt={movie?.title}
                    />
                    <div className={styles.rating}>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            color="white"
                        >
                            {movie?.imdbRating}
                        </Typography>
                    </div>
                    <CircularProgress
                        className={styles.ratingBar}
                        variant="determinate"
                        property={movie?.imdbRating.toString()}
                        value={movie?.imdbRating}
                        color={
                            movie?.imdbRating < 70
                                ? "error"
                                : movie?.imdbRating < 85
                                ? "warning"
                                : "success"
                        }
                    />
                    <div className={styles.type}>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            color="white"
                        >
                            {movie?.type.toUpperCase()}
                        </Typography>
                    </div>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            color="grey"
                        >
                            {movie?.year} •
                            {convertMinutesToHours(movie?.runtime)}
                        </Typography>
                        <Typography variant="h6" gutterBottom color="white">
                            {movie?.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            color="grey"
                        >
                            {movie?.directors}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
}
