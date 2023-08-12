import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import './main.scss';
import { AuthProvider } from '@/context/AuthProvider';
import { SearchModalProvider } from '@/context/SearchModalProvider';
import { MenuProvider } from '@/context/MenuProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchModalProvider>
      <MenuProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MenuProvider>
    </SearchModalProvider>
  </React.StrictMode>,
);
