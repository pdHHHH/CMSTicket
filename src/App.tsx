import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { IRoute } from './models/routes/routes';
import DefaultPageLayout from './layouts/DefaultPageLayout/DefaultPageLayout';
function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    {publicRoutes.map((route: IRoute, index: number) => {
                        const Element = route.component;
                        const Layout = DefaultPageLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Element />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
