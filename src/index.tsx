import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './pages/Hello/Hello';
import reportWebVitals from './reportWebVitals';
import { i18n, i18nConfig } from './i18n';
import '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/group-ui/assets/themes/vwag/vwag.css';
import {
  applyPolyfills,
  defineCustomElements,
} from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});

i18n.init(i18nConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
