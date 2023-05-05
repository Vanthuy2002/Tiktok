import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/Routing';
import Default from './components/Layout/Default/Default';

function App() {
  return (
    <div className='App'>
      <Routes>
        {publicRoute.map((route, index) => {
          const Pages = route.components;
          const Layout = route.layout || Default;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Pages />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
