export interface Services {
    data:
    ServicesResponse;
}

export interface ServicesResponse {
    result: {
        type: string;
        title: string;
        overview: string;
        streamingInfo: {};
        cast: [];
        year: number;
        advisedMinimumAudienceAge: number;
        imdbId: string;
        imdbRating: number;
        imdbVoteCount: number;
        tmdbId: number;
        tmdbRating: number;
        originalTitle: string;
        backdropPath: string;
        backdropURLs: {};
        genres: [];
        originalLanguage: "en";
        countries: [];
        directors: [];
        runtime: number;
        youtubeTrailerVideoId: string;
        youtubeTrailerVideoLink: string;
        posterPath: string;
        posterURLs: [];
        tagline: string;
    };
}

export interface SearchByTitle {
    movies: {
        result: Movie[];
    };
}

export interface Movie {
    type: string;
    title: string;
    overview: string;
    streamingInfo: StreamingInfo[];
    cast: string[];
    year: number;
    advisedMinimumAudienceAge: number;
    imdbId: string;
    imdbRating: number;
    imdbVoteCount: number;
    tmdbId: number;
    tmdbRating: number;
    originalTitle: string;
    backdropPath: string;
    backdropURLs: {
        300: string,
        780: string,
        1280: string,
        original: string,
    };
    genres: [
        {
            id: number;
            name: string;
        }
    ];
    originalLanguage: string;
    countries: string[];
    directors: string[];
    runtime: number;
    youtubeTrailerVideoId: string;
    youtubeTrailerVideoLink: string;
    posterPath: string;
    posterURLs: {
        92: string,
        154: string,
        185: string,
        342: string,
        500: string,
        780: string,
        original: string
    };
    tagline: string
}

export interface StreamingInfo {
    us: {
        hbo: [
            {
                type: string,
                quality: string,
                addOn: string,
                link: string,
                watchLink: string,
                audios: [
                    {
                        language: string,
                        region: string
                    },
                ],
                subtitles: [
                    {
                        locale: {
                            language: string,
                            region: string
                        },
                        closedCaptions: boolean
                    },
                ],
                price: any,
                leaving: number
            },
        ]
    }
}
