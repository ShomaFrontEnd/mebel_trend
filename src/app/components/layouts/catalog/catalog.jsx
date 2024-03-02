import { useState } from "react";
import ProductBlock from "../../ui/blocks/prouctBlock";
import SideBar from "../../ui/sidebar";
import Pagination from "../../navigation/pagination/pagination";
import { useParams } from "react-router-dom";
import ProductPage from "../productPage/productPage";



const product = [
  {
    id: '44qew',
    name: 'Угловой диван Наманган',
    imgUrl: [
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
    ],
    hit: true,
    new: true,
    discount: true,
    widht: 200,
    longest: 150
  },
  {
    id: '1221qq',
    name: 'Андижан',
    imgUrl: [
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
    ],
    hit: true,
    new: true,
    discount: false,
    widht: 310,
    longest: 170
  },
  {
    id: '1221q44q',
    name: 'Андsdbsbsижан',
    imgUrl: [
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
    ],
    hit: true,
    new: true,
    discount: false,
    widht: 310,
    longest: 170
  },
  {
    id: '1221q77q',
    name: '4sgbdgb',
    imgUrl: [
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
    ],    hit: true,
    new: true,
    discount: false,
    widht: 310,
    longest: 170
  },
  {
    id: '1221q7as7q',
    name: '555555asa',
    imgUrl: [
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
    ],    hit: true,
    new: true,
    discount: false,
    widht: 310,
    longest: 170
  }

]



const CatalogPage = () => {
  const { productPage, id } = useParams()
  console.log();
  const amountContetntInPage = 8

  const [sortOpen, setSortOpen] = useState(false)
  const [sortQuery, setSortQuery] = useState({ name: 'По наименовании', value: 'name' })
  const [currentPage, setCurentPage] = useState(1);

  function setCategory({ target }) {
    setSortQuery({ name: target.textContent, value: target.value })
    setSortOpen(false)
    console.log({ sortQuery });
  }


  //------ Handlers ---------------------------------------------------------------------------------------------------------------------------------
  const handleNextPage = () => {

    // if (Math.ceil(dataLength / amountContetntInPage) === currentPage) return;
    setCurentPage(prev => prev + 1)
    window.scroll(0, 0)

  };

  const handlePrevPage = () => {
    if (currentPage === 1) return;
    setCurentPage(prev => prev - 1)
    window.scroll(0, 0)

  };

  return (
    <>
      {productPage && id
        ?
        <ProductPage product={product[0]}/>
        :
        <div className="mt-24 sm:container sm:mx-auto">
          <h1 className="font-bold text-2xl sm:text-3xl  mb-20 "> Диваны <span className="text-[#518598] tracking-wide">TREND MEBEL</span> Томск</h1>
          <p className="p-1 mb-12 font-bold text-gray-600 text-sm ">
            Некоторые Диваны являются модульными
            <span className="mx-1">
              <svg width="16" height="20" viewBox="0 0 32 32" className="inline-block" >
                <path xmlns="http://www.w3.org/2000/svg" d="m23 16a7 7 0 0 0 -4.18 1.39l-4.22-4.22a6.86 6.86 0 0 0 1.4-4.17 7 7 0 1 0 -2.81 5.59l4.21 4.22a7 7 0 1 0 5.6-2.81zm-19-7a5 5 0 1 1 5 5 5 5 0 0 1 -5-5z" transform="translate(0 .01)" />
              </svg>
            </span>
            и могут быть изготовлены из одного или нескольких разных модулей по желанию заказчика.
          </p>

          <div className="sm:flex z-10 ">
            <SideBar />
            <div className="sm:ps-8 ">

              <div className="border  mb-8 relative">

                {/* <!-- Dropdown menu --> */}
                <button
                  onClick={() => setSortOpen(prev => !prev)}
                  id="dropdownDefaultButton"
                  className="text-black border-2 duration-200 border-[#598ca3] hover:bg-[#4a93a0] hover:text-white font-medium rounded-lg text-xs px-2 py-2 text-center inline-flex items-center "
                  type="button">
                  Сортировка: {sortQuery.name}
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <div id="dropdown"
                  className={"absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 " + (!sortOpen && 'hidden')}>
                  <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                    <li >
                      <button onClick={setCategory} value='price' className="block px-4 py-2 hover:bg-[#dde9e9] ">Сначало недорогие</button>
                    </li>
                    <li>
                      <button onClick={setCategory} value='price' className="block px-4 py-2  hover:bg-[#dde9e9] ">Сначало дорогие</button>
                    </li>
                    <li>
                      <button onClick={setCategory} value='popular' className="block px-4 py-2 hover:bg-[#dde9e9] ">Сначало популярные</button>
                    </li>
                    <li>
                      <button onClick={setCategory} value='name' className="block px-4 py-2 hover:bg-[#dde9e9] ">По наименовании </button>
                    </li>
                  </ul>
                </div>


              </div>
              <ProductBlock productData={product} />

            </div>


          </div>
          <div className="mb-12 mt-8">

            <Pagination currentPage={currentPage} dataAmount={20} productAmountInPage={amountContetntInPage} onSetPage={setCurentPage} onPrevPage={handlePrevPage} onNextPage={handleNextPage} />
          </div>



        </div >
      }
    </>
  );
}

export default CatalogPage;