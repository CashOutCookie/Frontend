import React from 'react';
import ReactDOM from 'react-dom';
import './css/default.css';
import App from './App';
import Register from './components/register';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
	<Router>
		 <App />
		<React.StrictMode>
			<Switch>
				<Route path="/register" component={Register} />
			</Switch>
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));