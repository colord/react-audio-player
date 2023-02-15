import './App.css';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';
import tracks from './tracks';

function App() {
  return (
    <div className="App">
      <AudioPlayer tracks={tracks} />
      <Footer />
    </div>
  )
}

export default App
