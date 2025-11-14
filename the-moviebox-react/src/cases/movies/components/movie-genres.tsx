import { useEffect, useState, type ReactNode } from "react"
import type { MovieDTO } from "../services/moive.service";

type MovieGenresProps = {
    movie: MovieDTO;
    children: ReactNode;
};

export function MovieGenres({ movie, children }: MovieGenresProps) {

    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        if (movie?.genres) {
            setGenres(movie.genres.split("|"));
        }
    }, [movie]);

    return (
        <div className="my-3 flex items-center gap-2 text-sm">
            {genres.map((genre, index) => (
                <span
                    key={index}
                    className="bg-white/20 rounded-2xl px-3 pt-1 text-white">
                    {genre}
                </span>
            ))}

            {children}
        </div>
    );
}