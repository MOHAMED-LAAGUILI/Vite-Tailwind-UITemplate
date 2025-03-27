/* eslint-disable no-undef */
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import { InertiaProgress } from "@inertiajs/progress";
import Spinner0 from './Components/Spinner/Spinner0.jsx';
import * as ReactErrorOverlay from "react-error-overlay";

// Enable error overlay for better debugging (only in development mode)
if (!process.env.NODE_ENV === "production") {
  ReactErrorOverlay.startReportingRuntimeErrors();
  if (module.hot) {
    module.hot.dispose(() => {
      ReactErrorOverlay.dismissRuntimeErrors();
    });
  }
}

// Lazy load the App component
const App = React.lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
    <Suspense fallback={
       <div className="flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Spinner0 />
       </div>
    }>
      <App />
    </Suspense>
);

InertiaProgress.init();

