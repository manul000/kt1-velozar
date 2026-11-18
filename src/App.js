import Info from './components/Info/Info';
import Offers from './components/Offers/Offers';
import Comment from './components/Comment/Comment';
import Attendancies from './components/Attendancies/Attendancies';
import Bikerent from './components/Bikerent/Bikerent';
import './App.css';

function App() {
    return (
        <main className="landing">
            <Info />
            <Offers />
            <Comment />
            <Attendancies />
            <Bikerent />
        </main>
    );
}

export default App;
