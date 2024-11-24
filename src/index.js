import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

const routing = (
    <ThemeProvider theme={theme}>
        <Router>
            <React.StrictMode>
                <Header />
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
                <Footer />
            </React.StrictMode>
        </Router>
    </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);
