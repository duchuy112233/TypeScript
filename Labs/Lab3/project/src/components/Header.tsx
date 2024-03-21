import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='bg-white'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
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
        {/* Menu */}
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
              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/about'>
                  {' '}
                  About{' '}
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* Tìm kiếm */}
          <div className='relative'>
            <input
              type='text'
              placeholder='Tìm kiếm...'
              className='border border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none'
            />
            <button type='submit' className='absolute right-0 top-0 mt-3 mr-4'>
              <svg className='h-4 w-4 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M10 4C6.686 4 4 6.686 4 10c0 3.313 2.686 6 6 6 1.406 0 2.688-.484 3.719-1.281l5.281 5.281 1.438-1.438L11.719 10A5.937 5.937 0 0 0 10 10zm0 2a3.968 3.968 0 0 1 1.469.281l2.906 2.906A3.96 3.96 0 0 1 16 10c0-2.219-1.781-4-4-4s-4 1.781-4 4a3.968 3.968 0 0 1 .281-1.469L5.719 6.781A3.96 3.96 0 0 1 10 6zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' />
              </svg>
            </button>
          </div>
          {/* ĐĂng nhập */}
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
