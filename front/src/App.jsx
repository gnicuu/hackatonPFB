import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import Home from './pages/Home';
import ResetPass from './components/resetPass';
import ActivationSuccessPage from './pages/ActivationSuccessPage';
import ActivationFormPage from './components/ActivationFormPage';
import LoginFormPage from './pages/LoginFormPage';
import RegisterFormPage from './pages/RegisterFormPage';
import MyEventsPage from './pages/MyEventsPage';
import NotFound from './pages/NotFound';
import MainLayout from './layout/MainLayout';
import FAQPage from './pages/FAQPage';
import ProfilePage from './pages/ProfilePage';

import './styles.css';

const App = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/:eventId?" element={<AdminPage />} />
                <Route path="/register" element={<RegisterFormPage />} />
                <Route path="/reset-password" element={<ResetPass />} />
                <Route path="/users/validate/activate" element={<ActivationFormPage />} />
                <Route path="/users/validate/activation-success" element={<ActivationSuccessPage />} />
                <Route path="/users/login" element={<LoginFormPage />} />
                <Route path="/users/my-events" element={<MyEventsPage />} />
                <Route path="/users/profile" element={<ProfilePage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </MainLayout>
    );
};

export default App;
