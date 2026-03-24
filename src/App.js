import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Blog from './Blog';
import Navbar from './Navbar';
import AppRoutes from './AppRoutes';
function App() {
  const [text, setData] = useState('');
  const resizeObserverErr = window.onerror;
window.onerror = function(message) {
    if (message === 'ResizeObserver loop completed with undelivered notifications.') {
        return true; // suppress it
    }
    return resizeObserverErr?.(...arguments);
};
  return (
    <>
    <Navbar/>
    <AppRoutes/>
    </>
  );
}

export default App;
