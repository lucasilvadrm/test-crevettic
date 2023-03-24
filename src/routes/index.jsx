import { Routes, Route, Navigate } from 'react-router-dom';
import BasicModal from '../components/Modal';
import Home from '../pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newclient" element={<BasicModal />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
