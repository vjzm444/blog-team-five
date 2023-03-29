import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import './main.scss';
import { AuthProvider } from '@/context/AuthProvider';
import { SearchModalProvider } from '@/context/SearchModalProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchModalProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SearchModalProvider>
  </React.StrictMode>,
);
