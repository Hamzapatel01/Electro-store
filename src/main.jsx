import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import store from './Redux/app/Store'; // Ensure the path is correct
import { Provider } from 'react-redux';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
