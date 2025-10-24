import { BrowserRouter, Route, Routes } from 'react-router';
import PageComponents from './pages/page-components';
import LayoutMain from './pages/layout-main';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
