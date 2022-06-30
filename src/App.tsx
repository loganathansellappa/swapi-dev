import People from "./components/People";
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import {PersonInfo} from "./components/PersonInfo";
import NotFound from "./components/NotFound";

const App = () => {
  return (
      <MemoryRouter>
          <Routes>
              <Route path="/">
                  <Route index element={<People />} />
                  <Route
                      path="resource/:type/:id"
                      element={<PersonInfo />}
                  />
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </MemoryRouter>
  )
}


export default App;