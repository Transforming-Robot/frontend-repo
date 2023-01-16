import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '@/components/layout';
import { ChatPage, UserRegisterPage } from '@/pages';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<UserRegisterPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
