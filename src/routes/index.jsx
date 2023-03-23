import { Routes, Route, Navigate } from 'react-router-dom';
import Container from '../components/Container';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/new" element={<h1>New</h1>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
