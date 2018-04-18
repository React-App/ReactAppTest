import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App/App';
import registerServiceWorker from './service/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
