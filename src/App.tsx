import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CustomerDashboard from './pages/customer/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/layout/Layout';
export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
            <Layout>
                <LandingPage />
              </Layout>
            } />

          <Route
            path="/login"
            element={
            <Layout minimal>
                <LoginPage />
              </Layout>
            } />

          <Route
            path="/register"
            element={
            <Layout minimal>
                <RegisterPage />
              </Layout>
            } />

          <Route
            path="/customer/dashboard"
            element={
            <Layout>
                <CustomerDashboard />
              </Layout>
            } />

          <Route
            path="/admin/dashboard"
            element={
            <Layout>
                <AdminDashboard />
              </Layout>
            } />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>);

}