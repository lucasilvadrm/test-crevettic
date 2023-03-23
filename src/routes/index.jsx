import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
