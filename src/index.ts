import './style/index.css';
import App from './components/app';
import { MockService } from './services/MockService';

if (process.env.NODE_ENV !== 'production') {
  MockService();
}

export default App;
