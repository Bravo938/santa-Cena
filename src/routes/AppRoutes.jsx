import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

const publicRoutes = [{ path: "/", element: <HomePage /> }];

// Cuando necesites rutas privadas, agregalas acá (y envolvelas con tu guard).
const privateRoutes = [];

export default function AppRoutes() {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      {privateRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
