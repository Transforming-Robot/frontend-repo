import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '@/components/layout';
import { RegisterForm } from '@/components/blocks';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
