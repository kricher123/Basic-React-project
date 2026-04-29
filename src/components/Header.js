import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {NavLink} from 'react-router-dom'

const navigation = [
  { name: 'Employees', href: './Employees'},
  { name: 'Customers', href: './Customers'},
  { name: 'Dictionary', href: '/Dictionary'},
  { name: 'Calendar', href: '/other'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({...props}) {
  return (
    <>
    <Disclosure
      as="nav"
      className="relative bg-gray-900 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={({isActive}) => {
                        return(
                            'px-3 py-2 rounded-md text-sm font-medium no-underline' + (!isActive ? 'text-gray-300 hover:bg-gray-700 hover:text-white':
                              'bg-gray-900 text-white'
                            )
                        );
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={({isActive}) => {
                return (
                  'block px-3 py-2 rounded-md text-base font-medium on-underline' + (
                    !isActive ? 'text-gray-300 hover:bg-gray-700 hover:text-white no-underline' :
                    'bg-gray-900 text-white no-underline'
                  )
                );
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    {props.children}
    </>
  )
}