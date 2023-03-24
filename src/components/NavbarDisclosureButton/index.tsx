import { Disclosure } from '@headlessui/react';
import React from 'react';
import classNames from '../../utils/classNames';

export type NavbarDisclosureButtonProps = {
  title: string;
  link: string;
  active?: boolean;
  onClickHandler: () => void;
};

const NavbarDisclosureButton: React.FC<NavbarDisclosureButtonProps> = ({
  title,
  link,
  active = false,
  onClickHandler,
}: NavbarDisclosureButtonProps) => {
  return (
    <Disclosure.Button
      as="a"
      href={link}
      className={classNames(
        'block rounded-md px-3 py-2 text-base font-medium',
        active
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      )}
      onClick={onClickHandler}
    >
      {title}
    </Disclosure.Button>
  );
};

export default NavbarDisclosureButton;
