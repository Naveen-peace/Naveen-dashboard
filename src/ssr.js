import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import App from './App';

const renderApp = () => {
    const Router = StaticRouter;

    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById('root')
    );
};

export default renderApp;
