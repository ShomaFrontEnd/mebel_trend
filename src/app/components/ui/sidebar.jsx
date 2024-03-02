import { useState } from "react";

const SideBar = () => {

  const [isOpen, setOpen] = useState(false);



  const body = document.querySelector('body');
  const handleToggleOpen = () => {
    setOpen(prev => !prev)
    if (!isOpen) {
      // console.log(isOpen)
      body.classList.add('overflow-hidden');
      return;
    }
    body.classList.remove('overflow-hidden')
  }

  return (
    <>
      <button type="button"
        onClick={handleToggleOpen}
        className={"inline-flex items-center fixed p-2 mt-2 ms-3 text-sm text-[#4dc0d1] rounded-lg sm:hidden hover:bg-[#d0e9ec] " + (isOpen ? 'hidden' : '')}>
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <div
        onClick={handleToggleOpen}
        className={"z-10 absolute cursor-pointer top-0 bg-[#54686b] opacity-50 sm:hidden w-full h-[250rem] " + (!isOpen ? 'hidden' : '')}>
      <div className="absolute text-white text-right sm:hidden mb-1  top-40 right-10" >
            <button
              // onClick={handleToggleOpen}
              className="bi relative bi-x top-28 rounded cursor-pointer text-lg px-2  bg-[#4E919B] hover:bg-[#62bac7] active:bg-[#62bac7]"
            >
            </button>
          </div>
      </div >


      <aside className={" fixed top-25 left-0 z-30 sm:relative  sm:block borde  transition-transform -translate-x-full sm:translate-x-0 " + (isOpen ? ' translate-x-0' : '  -translate-x-screen ')} >

        <div className="h-full px-3 py-4 overflow-y-auto bg-[#54686b]/30 sm:bg-gray-50 w-52 border rounded-lg sm:w-72">
          
          <ul className="space-y-2 font-medium text-[#ffffff] sm:bg-gray-50 sm:text-gray-600">
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg   hover:bg-[#c5dbdd]/60 active:bg-[#c5dbdd]/60 duration-150 group">
                <span className="ms-3">Угловые</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2  rounded-lg  hover:bg-[#c5dbdd]/60 active:bg-[#c5dbdd]/60 duration-150 group">
                <span className="ms-3">Прямые</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2  rounded-lg  hover:bg-[#c5dbdd]/60 active:bg-[#c5dbdd]/60 duration-150 group">
                <span className="ms-3">Кресла</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2  rounded-lg  hover:bg-[#c5dbdd]/60 active:bg-[#c5dbdd]/60 duration-150 group">
                <span className="ms-3">П-образные</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2  rounded-lg  hover:bg-[#c5dbdd]/60 active:bg-[#c5dbdd]/60 duration-150 group">
                <span className="ms-3">Модульные</span>
              </a>
            </li>

          </ul>
        </div>
      </aside>
    </>


  );
}

export default SideBar;