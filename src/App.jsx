import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/Routing';
import Default from './components/Layout/Default/Default';
import { Fragment } from 'react';

function App() {
  return (
    <div className='App'>
      <Routes>
        {publicRoute.map((route, index) => {
          const Pages = route.components;
          let Layout = Default;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

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
