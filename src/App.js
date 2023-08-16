import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

import './App.css';


function App() {

  return (
    <div className='App'>
      
      <NavBar />

      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </div>

      <footer className='footer'>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
