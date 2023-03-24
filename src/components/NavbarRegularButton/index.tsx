import React from 'react';
import classNames from '../../utils/classNames';

export type NavbarRegularButtonProps = {
  title: string;
  link: string;
  active?: boolean;
  onClickHandler: () => void;
};

const NavbarRegularButton: React.FC<NavbarRegularButtonProps> = ({
  title,
  link,
  active = false,
  onClickHandler,
}: NavbarRegularButtonProps) => {
  return (
    <a
      href={link}
      className={classNames(
        'rounded-md text-sm font-medium px-3 py-2',
        active
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      )}
      onClick={onClickHandler}
    >
      {title}
    </a>
  );
};

export default NavbarRegularButton;
