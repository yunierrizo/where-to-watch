"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./page.module.css";
import MovieCard from "./MovieCard";
import  {SearchByTitle, Movie} from "../../types/types"

export default function MoviesList(movies : SearchByTitle) {
    return (
        <div className={styles.moviesGrid}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 6, sm: 8, md: 12 }}
                >
                    {movies?.movies?.result?.map((item: Movie) => (
                        <MovieCard movie={item} key={item.imdbId} />
                    ))}
                </Grid>
            </Box>
        </div>
    );
}
