import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import AdminLogin from './pages/Admin/adminLogin';
import AdminDashboard from './pages/Admin/adminDashboard'; 
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Routes/Home';
import AboutUs from './pages/Routes/AboutUs';
import Programs from './pages/Routes/Programs';
import Learn from './pages/Routes/Learn';
import GetTheApp from './pages/Routes/GetTheApp';
import FertilityScreening from './pages/Routes/FertilityScreening';
import Experts from './pages/Routes/Experts';
import Test from './pages/Routes/Test';
import { ThemeProvider } from './Context/ThemeContext';
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
// import PrivateAdminRoute from './PrivateAdminRoute';

function AppContent() {
  const location = useLocation();
  const language = "English";

  const isAdminDashboard = location.pathname.startsWith("/admin/dashboard");

  return (
    <div className="app-wrapper">
      {!isAdminDashboard && <Header />}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/get-the-app" element={<GetTheApp />} />
          <Route path="/fertility-screening" element={<FertilityScreening />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/test" element={<Test />} />

          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              // <PrivateAdminRoute>
              <AdminDashboard />
              // </PrivateAdminRoute>
            }
          />

          <Route path="/*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </main>
      {!isAdminDashboard && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
