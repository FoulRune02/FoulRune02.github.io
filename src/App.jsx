import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Commendations from "./components/Commendations"
import Footer from "./components/Footer"

function App() {
  return <div className="min-h-screen bg-slate-950 text-white overlow-hidden">
    <Navbar />
    <Hero />
    <Projects />
    <Commendations />
    <Footer />
  </div>
}

export default App
