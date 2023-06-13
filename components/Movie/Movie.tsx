"use client";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Unstable_Grid2";
import movie from "./openmovie";
import styles from "./movie.module.css";
import { Services } from "./../../types/types";
import StreamingInfo from "./StreamingInfo";
import ReactPlayer from "react-player";

var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
    },
];

function createInfo(minutes: number, countriesList: string[]) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    let countries = "";
    countriesList.map((country: string, index: number) => {
        countries += country;
        if (index < countriesList.length - 1) {
            countries += ", ";
        }
    });
    return `${hours}h ${remainingMinutes}m (${countries})`;
}

function createGenres(
    genresList: {
        id: number;
        name: string;
    }[]
) {
    let genres = "";
    let text = "";
    genresList.map((genre: any, index: number) => {
        genres += genre.name;
        if (index < genresList.length - 1) {
            genres += ", ";
        }
    });

    return genres;
}

function createCast(castList: any) {
    let casts = "";
    castList.map((cast: any, index: number) => {
        casts += cast;
        if (index < castList.length - 1) {
            casts += ", ";
        }
    });

    return casts;
}

function createDireectors(directorsList: any) {
    let directors = "";
    directorsList.map((director: any, index: number) => {
        directors += director;
        if (index < directorsList.length - 1) {
            directors += ", ";
        }
    });

    return directors;
}

export default function Movie(id: any) {
    const idMovie = id.id;
    const profilePic = "";
    console.log(movie);
    return (
        <>
            <div
                className={styles.topBackground}
                style={{
                    backgroundImage: `url("${movie.backdropURLs.original}")`,
                }}
            >
                <div className={styles.bluredCard}>
                    <Card sx={{ display: "flex" }} className={styles.card}>
                        <CardMedia
                            className={styles.imageCard}
                            component="img"
                            sx={{ width: 350, marginRight: 5 }}
                            image={movie.posterURLs.original}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <CardContent
                                className={styles.cardContent}
                                sx={{ flex: "1 0 auto" }}
                            >
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    color="white"
                                >
                                    {movie?.title} ({movie?.year})
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    gutterBottom
                                    color="grey"
                                >
                                    <span className={styles.certification}>
                                        +{movie?.advisedMinimumAudienceAge}
                                    </span>{" "}
                                    • {createGenres(movie?.genres)} •{" "}
                                    {createInfo(
                                        movie?.runtime,
                                        movie?.countries
                                    )}
                                </Typography>

                                <div className={styles.ratingStars}>
                                    <Rating
                                        name="read-only"
                                        value={movie?.imdbRating / 20}
                                        precision={0.1}
                                        emptyIcon={
                                            <StarIcon
                                                style={{
                                                    opacity: 0.55,
                                                    color: "white",
                                                }}
                                                fontSize="inherit"
                                            />
                                        }
                                        readOnly
                                        color="black"
                                    />
                                    <Typography
                                        className={styles.ratingStarsNumber}
                                        variant="subtitle1"
                                        gutterBottom
                                        color="grey"
                                    >
                                        {movie?.imdbRating}
                                        {/* <span className={styles.ratingStarsPercent}>
                                        %
                                    </span> */}
                                    </Typography>
                                </div>

                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    color="grey"
                                >
                                    Directors:{" "}
                                    {createDireectors(movie?.directors)}
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    color="grey"
                                >
                                    Cast: {createCast(movie.cast)}
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    color="grey"
                                >
                                    {movie.overview}
                                </Typography>
                            </CardContent>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    pl: 1,
                                    pb: 1,
                                }}
                            ></Box>
                        </Box>
                    </Card>
                </div>
            </div>
            <Box className={styles.card}>
                <Typography variant="h5" gutterBottom color="white">
                    WATCH NOW
                </Typography>

                <StreamingInfo movie={movie} />

                {/* {movie?.streamingInfo} */}
            </Box>

            <Box className={styles.card}>
                <Typography variant="h5" gutterBottom color="white">
                    WATCH TRAILER
                </Typography>

                {/* <ReactPlayer url={movie?.youtubeTrailerVideoLink} pip={true} width={"100%"}/> style={{margin:"10px"}}*/}
                <ReactPlayer
                    url={"https://youtu.be/mqqft2x_Aa4"}
                    pip={true}
                    width={"100%"}
                    style={{ margin: "10px" }}
                />
            </Box>
        </>
    );
}
