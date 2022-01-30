import './App.scss';
import 'boxicons/css/boxicons.min.css';
import Button from './components/button/Button';
import { useState } from 'react';

function App() {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Button
                loading={loading}
                onClick={() => setLoading(!loading)}
            >
                Loading
            </Button>
        </div>
    );
}

export default App;
