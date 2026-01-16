import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { RecoilRoot } from 'recoil';
import AppWrapper from './containers/AppWrapper.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <AppWrapper>
        <App />
      </AppWrapper>
    </RecoilRoot>
  </StrictMode>,
);
