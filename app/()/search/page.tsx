'use client'
import * as React from "react";
import movies from './movies'
import MoviesList from "@/components/Movies/MoviesList";


function convertMinutesToHours(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return ` ${hours}hr ${remainingMinutes}min`;
}

export default function Search() {
    return <MoviesList movies={movies} />;
}
