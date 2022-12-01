import { Auth0Provider } from '@auth0/auth0-react';

import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { domain as auth0Domain, clientId, callbackUri, audience, scope } from "./auth.config";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Auth0Provider
    domain={auth0Domain}
    clientId={clientId}
    redirectUri={callbackUri}
    audience={audience}
    scope={scope}
  >
    <App />
  </Auth0Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
