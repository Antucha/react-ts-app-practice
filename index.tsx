import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import User from './User';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const nombre = 'Antony';

root.render(
  <StrictMode>
    <App />
    <User userName={nombre} />
  </StrictMode>
);
