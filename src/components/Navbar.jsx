import { appleLogo, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className='flex items-center justify-between w-full py-5 sm:px-10'>
        <nav className="flex w-full screen-max-width">
            <img src={appleLogo} alt="Apple Image" width={14} height={18} className="" />

            <div className="flex justify-center flex-1 max-sm:hidden">
                {navLists.map((nav) => (
                    <div className="px-5 text-sm transition-all cursor-pointer text-gray hover:text-white" key={nav}>
                        {nav}
                    </div>
                ))}
            </div>

            <div className="">
                <img src={searchImg} alt="search" width={18} height={18} className="" />
                <img src={bagImg} alt="search" width={18} height={18} className="" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar;