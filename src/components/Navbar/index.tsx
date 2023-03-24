import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavbarRegularButton from '../NavbarRegularButton';
import NavbarDisclosureButton from '../NavbarDisclosureButton';

type Pages = 'Counter' | 'Books';

const Navbar: React.FC = () => {
  const [activePage, setActivePage] = useState<Pages>('Counter');

  const onClickHandler = (page: Pages) => {
    setActivePage(page);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/vite.svg"
                    alt="React TS Demo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/vite.svg"
                    alt="React TS Demo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavbarRegularButton
                      title="Counter"
                      link="#"
                      active={activePage === 'Counter' ? true : false}
                      onClickHandler={() => onClickHandler('Counter')}
                    />
                    <NavbarRegularButton
                      title="Books"
                      link="#"
                      active={activePage === 'Books' ? true : false}
                      onClickHandler={() => onClickHandler('Books')}
                    />
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <NavbarDisclosureButton
                title="Counter"
                link="#"
                active={activePage === 'Counter' ? true : false}
                onClickHandler={() => onClickHandler('Counter')}
              />
              <NavbarDisclosureButton
                title="Books"
                link="#"
                active={activePage === 'Books' ? true : false}
                onClickHandler={() => onClickHandler('Books')}
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
