import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import AboutPage from './pages/AboutPage/AboutPage';
import LocationsPages from './pages/LocationsPage/LocationsPages';
import EpisodesPage from './pages/EpisodesPage/EpisodesPage';
import Page404 from './pages/Page404/Page404';
import HomePage from './pages/HomePage/HomePage';

function App () {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/characters" element={<CharactersPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/locations" element={<LocationsPages/>}/>
                    <Route path="/episodes" element={<EpisodesPage/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
