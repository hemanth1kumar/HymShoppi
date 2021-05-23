import React, { Suspense, useState } from 'react';

import { ThemeProvider } from "styled-components";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from "./Theme/GlobalStyles";
import { Theme, DarkTheme } from "./Theme/Theme";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const ItemCategory = React.lazy(() => import("./pages/ItemCategory"));
const Item = React.lazy(() => import("./pages/Item"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorBoundary = React.lazy(() => import("./components/ErrorBoundary"));

import "./app.css";

const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <ThemeProvider theme={theme === 'light' ? Theme : DarkTheme}>
            <GlobalStyles />
            <BrowserRouter>
                <div className="App">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ErrorBoundary>
                            <Switch>
                                <Route exact path="/"><Dashboard toggleTheme={toggleTheme} /></Route>
                                <Route exact path="/login"><Login toggleTheme={toggleTheme} /></Route>
                                <Route exact path="/signup"><Signup toggleTheme={toggleTheme} /></Route>
                                <Route exact path="/category/:category"><ItemCategory toggleTheme={toggleTheme} /></Route>
                                <Route exact path="/category/:category/:id"><Item toggleTheme={toggleTheme} /></Route>
                                <Route><NotFound /></Route>
                            </Switch>
                        </ErrorBoundary>
                    </Suspense>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    )
}
export default App;