import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { PrivateRoute } from 'route/PrivateRoute';
import { useDispatch } from 'react-redux';
import { currentThunk } from 'redux/auth/authOperetion';

import MainLayout from './layouts/MainLayout/MainLayout';
import WelcomePage from 'page/WelcomePage/WelcomePage';
import AuthPage from 'page/AuthPage/AuthPage';
import RestrictedRoute from 'route/RestrictedRoute';
import AllLessonsPage from 'page/AllLessonsPage/AllLessonsPage';

const SensornayaPage = lazy(() => import('page/SensornayaPage/SensornayaPage'));
const LogopedPage = lazy(() => import('page/LogopedPage/LogopedPage'));
const MainPage = lazy(() => import('page/MainPage/MainPage'));
const CorrectionPage = lazy(() => import('page/CorrectionPage/CorrectionPage'));
const ChildrenPage = lazy(() => import('page/ChildrenPage/ChildrenPage'));
const ChildPage = lazy(() => import('page/ChildPage/ChildPage'));
const FinancialPage = lazy(() => import('page/FinancialPage/FinancialPage'));
const LessonPage = lazy(() => import('page/LessonPage/LessonPage'));
const NotFoundPage = lazy(() => import('page/NotFoundPage/NotFoundPage'));
const TeacherPage = lazy(() => import('page/TeacherPage/TeacherPage'));
const TeachersPage = lazy(() => import('page/TeachersPage/TeachersPage'));
const PreschoolPage = lazy(() => import('page/PreschoolPage/PreschoolPage'));
const PreschoolInclusionPage = lazy(() =>
  import('page/PreschoolInclusionPage/PreschoolInclusionPage')
);

function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    handleRouteChange();
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route
          index
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route
          path="/auth/:id"
          element={<RestrictedRoute component={<AuthPage />} />}
        />
        <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/lesson" element={<LessonPage />} />
          <Route path="/sensornaya" element={<SensornayaPage />} />
          <Route path="/preschool" element={<PreschoolPage />} />
          <Route
            path="/preschoolInclusion"
            element={<PreschoolInclusionPage />}
          />
          <Route path="/logoped" element={<LogopedPage />} />
          <Route path="/correction" element={<CorrectionPage />} />
          <Route path="/allLessons" element={<AllLessonsPage />} />
          <Route path="/children" element={<ChildrenPage />} />
          <Route path="/child/:childId" element={<ChildPage />} />
          <Route path="/child" element={<ChildPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/teacher/:teacherId" element={<TeacherPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/financial" element={<FinancialPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
