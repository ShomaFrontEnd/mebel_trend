import { Link, NavLink } from "react-router-dom";
import useScrollDirection from "../../hooks/useScrollDirection";






const NavBar = () => {

  const scrollDirection = useScrollDirection();

  // https://png.pngitem.com/pimgs/s/359-3596788_creative-tm-logo-hd-png-download.png
  // console.log(scrollDirection);

  return (
    <>
      {/* first bar */}
      <nav className="bg-gradient-to-r from-[#537A95]  to-[#4AA09F] border-gray-200 w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center space-x-1 rtl:space-x-reverse">
            <img src="  https://us.123rf.com/450wm/wikagraphic/wikagraphic2011/wikagraphic201124797/158525890-initial-logo-tm-lowercase-letter-blue-and-pink-overlap-transparent-logo-modern-and-simple-logo.jpg?ver=6" className="h-12 rounded-s-2xl" alt="Trend mebel logo" />
            <div >
              <div className="self-center text-xl font-semibold  whitespace-nowrap text-white">Trend</div>
              <div className="self-center text-xl font-semibold whitespace-nowrap text-white">Mebel</div>
            </div>
          </Link>

          {/* SOCIAL */}
          <div className="inline-flex items-center">
            <a href="instagremm.com" className="mr-3 duration-200  text-gray-300/70 hover:text-gray-300/10 hover:bg-clip-text hover:bg-gradient-to-tl from-yellow-300 via-rose-400 to-purple-600">
              <i className="bi bi-instagram text-xl  "></i>
            </a>
            <a href="vk.com" className="mr-3 rounded py-0.5 px-1 duration-200  text-gray-300/70 text-sm font-bold hover:bg-blue-400 hover:text-white">
              vk
            </a>
            <a href="https://web.telegram.org/a/" className="mr-3 duration-300 text-gray-300/70  hover:text-cyan-300">
              <i className="bi bi-telegram text-xl ">
              </i>
            </a>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm text-white hover:underline">(555) 412-1234</a>
            <a href="#" className="text-sm text-blue-300 hover:underline">Login</a>
          </div>
        </div>
      </nav>

      {/* navigation */}
      <nav
        className={"z-40 border-b w-full py-3 overflow-hidden overflow-x-auto duration-500 " + (!scrollDirection ? 'absolute bg-gray-300/30 ' : scrollDirection === "up" ? "fixed top-0 bg-gray-100/90" : "absolute -top-24 bg-gray-300/30 ")}>
        <div className="max-w-screen-xl px-4 py-3 md:py-5 mx-auto">
          <div className="flex items-center  ">
            <ul className="flex flex-row font-medium  mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink to={'/home'} className="text-gray-600 uppercase font-bold hover:text-[#4AA09F]">
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to={'catalog'} className="text-gray-600 uppercase font-bold hover:text-[#4AA09F]">
                  Каталог
                </NavLink>
              </li>
              <li>
                <NavLink to={'/company'} className="text-gray-600 uppercase font-bold hover:text-[#4AA09F]">
                  Компания
                </NavLink>
              </li>
              <li>
                <NavLink to={'/discont'} className="text-gray-600 uppercase font-bold hover:text-[#4AA09F]">
                  Акции
                </NavLink>
              </li>
              <li>
                <NavLink to={'/marketAddresses'} className="text-gray-600 uppercase font-bold hover:text-[#4AA09F]">
                  Магазины
                </NavLink>
              </li>
              <li>
                <NavLink to={'/information'} className="text-gray-600 uppercase font-bold hover:text-[#4AA09F]">
                  Информация
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar;
