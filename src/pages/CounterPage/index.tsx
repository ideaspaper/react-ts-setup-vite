import React from 'react';
import Counter from '../../components/Counter';
import PageHeader from '../../components/PageHeader';

const CounterPage: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-5">
        <PageHeader title="Counter" />
        <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Counter title="Acong FC" />
          <Counter title="Djoko FC" />
          <Counter title="Sitorus FC" />
        </main>
      </div>
    </>
  );
};

export default CounterPage;
