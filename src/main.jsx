import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import AppWrapper from './containers/AppWrapper.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <AppWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppWrapper>
    </RecoilRoot>
  </StrictMode>,
);
