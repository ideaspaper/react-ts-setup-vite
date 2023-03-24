import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import CounterButton from '../CounterButton';
import CounterLabel from '../CounterLabel';

type CounterProps = {
  title: string;
};

const Counter: React.FC<CounterProps> = ({ title }: CounterProps) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <CounterLabel title={title} value={count} />
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <CounterButton
            icon={
              <PlusCircleIcon
                className="h-5 w-5 text-green-600"
                title="Increment"
                aria-hidden="true"
              />
            }
            title="Increment"
            onClickHandler={() => setCount(count + 1)}
          />
          <CounterButton
            icon={
              <MinusCircleIcon
                className="h-5 w-5 text-red-600"
                title="Decrement"
                aria-hidden="true"
              />
            }
            title="Decrement"
            onClickHandler={() => setCount(count - 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
