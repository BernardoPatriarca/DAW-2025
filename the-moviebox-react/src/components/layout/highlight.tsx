import { useEffect, useState } from "react";
import { useMovies } from "../../hooks/use-hook";

export function Highlight() {
    const { selectedMovie } = useMovies();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => (
        setIsLoading(!selectedMovie)
    ), [selectedMovie])

    return (
        isLoading ? (
            <div className="flex justify-center items-center">
                <p className="text-2xl text-center text-white">Carregando...</p>
            </div>
        ) : (
            <section className="flex bg-position-[left_calc((50vw-170px)-340px)_top] bg-cover relative"
                style={{
                    backgroundImage: `url(${selectedMovie.highlight})`
                }}>
                <div className="absolute top-0 left-0 w-full h-full z-1 bg-[linear-gradient(to_right,rgba(17,17,17,1)_calc((50vw-70px)-340px),rgba(17,17,17,0.7)_50%,rgba(17,17,17,0.7)_100%)]"></div>
                <div className="flex gap-8 py-8 px-0 z-2 max-w-6xl mx-auto">
                    <img className="rounded-lg" src={selectedMovie.image} alt="Capa Filme" />
                    <div className="flex flex-col">
                        <h2 className="text-[2.5rem] font-normal">{selectedMovie.title}</h2>

                        <MovieGenres movie={selectedMovie} >
                            <span className="pl-4 text-gray-300">{selectedMovie.duration.replace(':', 'h ') + 'm'}</span>
                        </MovieGenres>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-normal pt-12 pb-2">Sinopse</h3>
                            <p className="text-[#a0a0a0] text-sm leading-relaxed">
                                {selectedMovie.sinopse}
                            </p>
                        </div>

                        <div className="flex gap-4 my-6">
                            <button className="bg-[#e50914] text-white py-3.5 px-6 rounded-sm font-bold transition-colors duration-300 ease-in-out cursor-pointer hover:bg-[#b8070f]">Assistir</button>
                            <button className="bg-[rgba(255,255,255,0.2)] text-white border border-[rgba(255,255,255,0.3)] py-3.5 px-6 rounded-sm transition-colors duration-300 ease-in-out cursor-pointer hover:bg-[rgba(255,255,255,0.3)]">Detalhes</button>
                            <button className="bg-[rgba(255,255,255,0.2)] text-white border border-[rgba(255,255,255,0.3)] py-3.5 px-6 rounded-sm transition-colors duration-300 ease-in-out cursor-pointer hover:bg-[rgba(255,255,255,0.3)]">+ Adicionar à Lista</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    )
}