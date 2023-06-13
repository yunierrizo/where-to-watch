"use client";
import axios from "axios";
import { ServicesResponse, Services } from "@/types/types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import { ChangeEventHandler, useState } from "react";
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [services, setServices] = useState<ServicesResponse>();
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const options = {
        method: "GET",
        url: "https://streaming-availability.p.rapidapi.com/v2/get/basic",
        params: { country: "us", imdb_id: "tt1877830" },
        headers: {
            "X-RapidAPI-Key":
                "197d28a3b8mshf99120c9b94a6cbp1e6f91jsn103e15f69b33",
            "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        },
    };

    // axios
    //     .request(options)
    //     .then((response: Services) => {
    //         setServices(response.data);
    //         // console.log(response.data);
    //     })
    //     .catch(function (error: any) {
    //         console.error(error);
    //     });

    return (
        <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            className={styles.form}
        >
            <InputLabel
                className={styles.searchLabel}
                htmlFor="outlined-adornment-search"
            >
                Search
            </InputLabel>
            <OutlinedInput
                className={styles.searchInput}
                fullWidth
                id="outlined-adornment-search"
                // type={showPassword ? "text" : "password"}
                endAdornment={
                    <InputAdornment position="end">
                        <Search
                            style={{ color: "#b4b4b4", cursor: "pointer" }}
                            onClick={() => router.push("/search")}
                        />
                    </InputAdornment>
                }
                label="Search"
                onChange={(
                    event: React.ChangeEvent<
                        HTMLTextAreaElement | HTMLInputElement
                    >
                ) => setSearch(event?.target?.value)}
                onKeyUp={(
                    event: React.KeyboardEvent<
                        HTMLInputElement | HTMLTextAreaElement
                    >
                ) => {
                    if (event.keyCode === 13) {
                        router.push("/search");
                    }
                }}
            />
        </FormControl>
    );
}
