import { useAuth } from "@clerk/react";
import { Routes, Route, Navigate } from "react-router";

import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Teams from "../pages/Teams";
import Calendar from "../pages/Calendar";
import Settings from "../pages/Settings";
import Analytics from "../pages/Analytics";
import LandingPage from "../pages/LandingPage";

const AppRoutes = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 animate-pulse items-center justify-center rounded-[2rem] bg-zinc-900 text-3xl font-black text-white">
            T
          </div>

          <h1 className="mt-5 text-2xl font-bold text-zinc-900">TeamFlow</h1>

          <p className="mt-2 text-sm text-zinc-500">
            Loading your workspace...
          </p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/sign-in/*"
        element={
          isSignedIn ? <Navigate to="/dashboard" replace /> : <SignInPage />
        }
      />
      <Route
        path="/sign-up/*"
        element={
          isSignedIn ? <Navigate to="/dashboard" replace /> : <SignUpPage />
        }
      />
      <Route
        path="/dashboard"
        element={
          isSignedIn ? <DashboardLayout /> : <Navigate to="/sign-in" replace />
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="teams" element={<Teams />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="settings" element={<Settings />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
