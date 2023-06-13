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
import Image from "next/image";
import hbo from "../../public/hbo-logo.jpg";
import netflix from "../../public/netflix-logo.jpg";
import prime from "../../public/prime-logo.jpg";
import hulu from "../../public/hulu-logo.jpg";
import peacock from "../../public/peacock-logo.jpg";
import apple from "../../public/apple-logo.jpg";
import Link from "next/link";

function getStreaming(streamingInfo: any) {
    let services;
    let array = [];
    let countryArray = [];
    for (let country in streamingInfo) {
        services = streamingInfo[country];
        for (let service in services) {
            // services[service].push({service: service})
            array.push([service, services[service]]);
            // console.log(services[service]);
        }
        countryArray.push([country, array]);
        // console.log(streamingInfo[country]);
    }
    return countryArray;
}

function getIcon(service: string) {
    switch (service) {
        case "netflix":
            return netflix;

        case "hbo":
            return hbo;

        case "prime":
            return prime;

        case "hulu":
            return hulu;

        case "peacock":
            return peacock;

        case "apple":
            return apple;

        default:
            return "";
    }
}

export default function StreamingInfo(movie: any) {
    const servicesArray = getStreaming(movie?.movie?.streamingInfo);
    // console.log(servicesArray);

    return (
        <Box>
            {servicesArray?.map((item: any, index: number) => (
                <div style={{display:"flex"}} key={index}>
                    {item[1].map((services: any) => (
                        <div
                            style={{ display: "flex", width: "fit-content" }}
                            key={services[0]}
                        >
                            {services[1].map((service: any) => (
                                <Link key={service[0]} href={service.link}>
                                    <Card className={styles.serviceCard}>
                                        <Image
                                            className={styles.serviceImage}
                                            src={getIcon(services[0])}
                                            alt={services[0]}
                                            width={50}
                                            height={50}
                                        />

                                        <Box
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                gutterBottom
                                                color="grey"
                                                style={{ margin: 0 }}
                                            >
                                                {service?.price?.formatted
                                                    ? "$" +
                                                      service?.price?.amount
                                                    : ``}
                                            </Typography>

                                            <Typography
                                                variant="subtitle1"
                                                gutterBottom
                                                color="grey"
                                                style={{ margin: 0 }}
                                            >
                                                {service?.type
                                                    ? service?.type
                                                    : ``}
                                            </Typography>
                                        </Box>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </Box>
    );
}
