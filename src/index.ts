import './style/index.css';
import App from './components/app';
import { bootstrapApi } from './services/ApiService';
import { MockService } from './services/MockService';

if (process.env.NODE_ENV !== 'production') {
  MockService();
}

bootstrapApi();

export default App;
