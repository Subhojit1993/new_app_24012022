import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import { store } from './_helpers';
import { App } from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
    <Provider store={store}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
