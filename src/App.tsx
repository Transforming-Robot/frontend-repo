import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '@/components/layout';
import { UserRegisterPage } from '@/pages';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<UserRegisterPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
