
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header'

function App() {

  return (
      <Router> {/* Wrap your app with Router */}
            <div className="App">
                <Header />
                {/* Other components */}
            </div>
        </Router>
  )
}

export default App
