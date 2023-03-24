import React from 'react';

type CounterButtonProps = {
  title: string;
  icon: React.ReactNode;
  onClickHandler: () => void;
};

const CounterButton: React.FC<CounterButtonProps> = ({
  title,
  icon,
  onClickHandler,
}: CounterButtonProps) => {
  return (
    <>
      <button
        onClick={onClickHandler}
        className="flex w-0 flex-1 -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 active:bg-gray-200"
      >
        {icon}
        {title}
      </button>
    </>
  );
};

export default CounterButton;
