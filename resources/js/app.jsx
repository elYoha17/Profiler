import { createRoot } from 'react-dom/client';
import './bootstrap';
import Home from './Home';

const root = createRoot(document.getElementById('app'));
root.render(<Home />);