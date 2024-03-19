
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='bg-white'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <a className='block text-teal-600' href='#'>
          <span className='sr-only'>Home</span>
          <NavLink to='/'>
            {' '}
            <img
              className='w-[130px]'
              src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Logo-FPT-Shop-Black.png'
              alt=''
            />
          </NavLink>
        </a>

        <div className='flex flex-1 items-center justify-end md:justify-between'>
          <nav aria-label='Global' className='hidden md:block'>
            <ul className='flex items-center gap-6 text-sm'>
              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/'>
                  {' '}
                  Home{' '}
                </NavLink>
              </li>

              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/shop'>
                  {' '}
                  shop{' '}
                </NavLink>
              </li>

              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/login'>
                  {' '}
                  Login{' '}
                </NavLink>
              </li>
              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/register'>
                  {' '}
                  Register{' '}
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4'>
              <a
                className='hidden rounded-md px-3 py-2.5 text-[20px] font-medium text-gray-600 transition hover:text-red-700 sm:block'
                href='#'
              >
                <i className='fa-solid fa-user '></i>
              </a>

              <a
                className='hidden rounded-md px-3 py-2.5 text-[20px] font-medium text-gray-600 transition hover:text-red-700 sm:block'
                href='#'
              >
                <i className='fa-solid fa-cart-shopping'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </header>
  )
}

export default Header
