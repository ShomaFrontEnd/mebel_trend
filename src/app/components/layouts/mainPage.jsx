import { Link } from "react-router-dom";
import ProductBlock from "../ui/blocks/prouctBlock";
import BannerCarousel from "../ui/bannerCarousel";
import Teaser from "../ui/teaser/teaser";
import FeedbackCard from "../ui/cards/feedbackCard";
import Map from "../../map/map"

const product = [
  {
    id: '44qew',
    name: 'Угловой диван Наманган',
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
    discount: true,
    widht: 200,
    longest: 150
  },
  {
    id: '1221qq',
    name: 'Андижан',
    imgUrl: [
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
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
    id: '1221q77q',
    name: '4sgbdgb',
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
  },
  {
    id: '1221q7as7q',
    name: '555555asa',
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
  }

]



const MainPage = () => {




  return (
    <>
      <section className="mb-12">
        <BannerCarousel />
      </section>

      <section className="container mx-auto  mb-20" >
        <Teaser />
      </section>

      {/* prod demon section */}
      <section className="container mx-auto  mb-20" >
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-5xl font-bold">Продукты</h3>
          <Link to={'catalog'} className="text-gray-600 hover:text-[#66aaa9] cursor-pointer">каталог →</Link>
        </div>
        <ProductBlock productData={product} />
      </section>

      {/* users feedback section */}
      <section className="container mx-auto  mb-20" >
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-5xl font-bold">Отзывы покупателей</h3>
          <Link to={'catalog'} className="text-gray-600 hover:text-[#66aaa9] cursor-pointer">все отзывы →</Link>
        </div>
        {/* raitCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-12 ">
          <FeedbackCard />
          <FeedbackCard />
        </div>
      </section>

      {/* adresses section */}
      <section id="map" className="container mx-auto  mb-20" >
        <div className="flex justify-between">
          <h3 className="text-5xl font-bold mb-12 flex">Наши Адреса
            <div className="animate-bounce"><i className="bi bi-geo-alt ms-1"></i></div>
          </h3>
          <Link to={'catalog'} className="text-gray-600 hover:text-[#66aaa9] cursor-pointer">все адреса →</Link>
        </div>


        <div className="flex flex-col justify-between lg:flex-row border p-8">
          <div className=" mx-5 ">
            <ul>
              <li className=" border p-2" >
                <div className="text-lg font-bold mb-2">  г.Томск,ул. Розы Люксембург, 115(ТЦ Мебельвилль)</div>
                <div className="text-xs text-gray-400">+7(999)555 44 55</div>
              </li>
              <li className=" border p-2" >
                <div className="text-lg font-bold mb-2">  г.Томск, пр.Мира, 46(ТЦ Громада)</div>
                <div className="text-xs text-gray-400">+7(999)555 44 55</div>
              </li>
              <li className=" border p-2" >
                <div className="text-lg font-bold mb-2">  г.Томск, ул.Нахимова, 8ст2(ТЦ Оранжевое небо)</div>
                <div className="text-xs text-gray-400">+7(999)555 44 55</div>
              </li>
            </ul>
          </div>
          <Map />
          {/* <BigMap /> */}

        </div>
      </section>






    </>
  )
}

export default MainPage;