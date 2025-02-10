"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">DealerMaster</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink href="/" currentPath={pathname}>
                Dashboard
              </NavLink>
              <NavLink href="/inventory" currentPath={pathname}>
                Inventory
              </NavLink>
              <NavLink href="/sales" currentPath={pathname}>
                Sales
              </NavLink>
              <NavLink href="/customers" currentPath={pathname}>
                Customers
              </NavLink>
              <NavLink href="/appointments" currentPath={pathname}>
                Appointments
              </NavLink>
              <NavLink href="/performance" currentPath={pathname}>
                Performance
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children, currentPath }) => {
  const isActive = currentPath === href

  return (
    <Link
      href={href}
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        isActive
          ? "border-indigo-500 text-gray-900"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }`}
    >
      {children}
    </Link>
  )
}

export default Navbar

