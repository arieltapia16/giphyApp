import './App.css';
import { Container } from '@mui/material';
import GiphyPage from './features/gifhy/GiphyPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <GiphyPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{marginTop: 5}}>
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
