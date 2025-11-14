import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Navbar } from "./components/layout/navbar";
import { Highlight } from "./components/layout/highlight";
import { MovieContent } from "./cases/movies/components/movie-content";
import { MovieContextProvider } from "./context/movie-context";

function App() {

  return (
    <>
      <Header />
      <main>
        <MovieContextProvider>
          <Highlight />
          <Navbar />
          <MovieContent />
        </MovieContextProvider >
      </main>
      <Footer />
    </>
  )
}

export default App
