import React from 'react';
import classNames from '../../utils/classNames';

type CounterLabelProps = {
  title: string;
  value: number;
};

const CounterLabel: React.FC<CounterLabelProps> = ({
  title,
  value,
}: CounterLabelProps) => {
  return (
    <div className="flex w-full items-center justify-between space-x-6 p-6">
      <div className="flex-1 truncate">
        <div className="flex items-center justify-center space-x-3">
          <h3 className="truncate text-lg font-medium text-gray-900 my-1">
            {title}
          </h3>
          <span
            className={classNames(
              'inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium',
              value < 0
                ? 'bg-red-100 text-red-800'
                : 'bg-green-100 text-green-800',
            )}
          >
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CounterLabel;
