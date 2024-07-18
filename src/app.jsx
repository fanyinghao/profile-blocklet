import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@arcblock/ux/lib/Theme';
import { LocaleProvider } from '@arcblock/ux/lib/Locale/context';

import { SessionProvider } from './libs/session';
import { translations } from './locales';

import Home from './pages/home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <ThemeProvider>
      <LocaleProvider translations={translations}>
        <SessionProvider serviceHost={basename}>
          <Router basename={basename}>
            <App />
          </Router>
        </SessionProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
