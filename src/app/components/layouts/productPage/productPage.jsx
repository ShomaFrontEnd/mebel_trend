import { useState } from 'react';
import PropTypes from 'prop-types';

import ImagesGaleryList from '../../ui/imagesGaleryList';
import ImageCarouselControlled from '../../ui/imageCarouselControlled';
import LayersSVG from '../../ui/svg/layers';

import VarrantySVG from '../../ui/svg/varrantySVG';



const ProductPage = ({ product }) => {
  // window.scroll(0, 0)

  const [imageCount, setImageCount] = useState(0)
  const slidePrev = () => {
    if (imageCount === 0) {
      setImageCount(product.imgUrl.length - 1);
      return;
    }
    setImageCount(prev => prev - 1);
  }



  const slideNext = () => {
    if (imageCount === product.imgUrl.length - 1) {
      setImageCount(0);
      return;
    }
    setImageCount(prev => prev + 1);
  }






  console.log(product);


  return (
    <div className="mt-28 mx-5   sm:container sm:mx-auto">

      <h1 className='text-5xl font-bold mb-12'>{product.name}</h1>
      <section className='md:flex '>

        <div className='mb-20'>
          <ImageCarouselControlled img={product.imgUrl} slidePrev={slidePrev} slideNext={slideNext} imageCount={imageCount} />
          <div className='mt-5'>
            <ImagesGaleryList data={product.imgUrl} imageCount={imageCount} wSize={16} handleClick={setImageCount} />
          </div>
        </div>

        {/* properties */}
        <div className='ms-5 md:ms-20  '>
          <div className='mb-5 font-bold'>Характеристики</div>

          <ul className='mb-3 min-w-64 overflow-hidden overflow-y-auto max-h-[33em] px-2 '>
            <li className='mb-2'>
              <span className='text-gray-400'>Длина</span> — <span className='text-gray-700'>3550см</span>
            </li>
            <li className='mb-2'>
              <span className='text-gray-400'>Ширина</span> — <span className='text-gray-700'>1800</span>
            </li>
            <li className='mb-2'>
              <span className='text-gray-400'>Цвет</span> — <span className='text-gray-700'>Любой</span>
            </li>
            <li className='mb-2'>
              <span className='text-gray-400'>Тип механизма рассклада</span> — <span className='text-gray-700'>Тик-Так</span>
            </li>


          </ul>
          <hr />
        </div>

      </section>





      <section className='border-2 w-fit sm:flex mr-12  p-5 rounded mt-12 mb-20'>
        <div className='inline-flex mr-20 items-center mb-8 sm:mb-auto'>
          <LayersSVG />
          <div className='ms-3 '>
            <h3 className="text-xl font-bold mb-2">Цвет ткани</h3>
            <p className="text-sm text-gray-500">На выбор более 500 видов ткани и любые цвета. </p>
          </div>
        </div>
        <div className='inline-flex items-center'>
          <VarrantySVG />
          <div className='ms-3 '>
            <h3 className="text-xl font-bold mb-2">Гарантия</h3>
            <p className="text-sm text-gray-500">На весь товар действует гарантия от 12 мес.</p>
          </div>
        </div>
      </section>


      <section className='mb-20'>
        <h2 className='font-bold text-2xl mb-8'>Описание</h2>
        <p className='mb-5'>
          Диван Элит прекрасно подойдет любителям минимализма. Полное отсутствие подлокотников не скрадывает полезное пространство помещения. Такая оригинальная и стильная модель, дополненная декоративными подушками, идеально подойдет для малогабаритных комнат, где каждый метр важно использовать максимально функционально. Модель не занимает много места в собранном виде, но с легкостью превращается в просторное и ровное спальное место благодаря надежному механизму еврокнижка.
        </p>
        <p>
          Крепкий каркас дивана будет служить вам долгие годы, исключая возможность деформирования. Большой выбор цветовых решений обивки даёт возможность подобрать качественную мягкую мебель под любой интерьер!
        </p>
      </section>


      <section className='mb-20'>
        <h2 className='font-bold text-2xl mb-8'>
          Доставка и услуги
        </h2>

        <ul className='w-4/6 '>
          <li className=' mb-2'> — Самовывоз со склада.</li>
          <li className='mb-2'> — Бесплатная доставка по городу до подъезда.</li>
          <li className='mb-2'> — Доставка по России. Во все регионы России отправляем транспортными компаниями (есть несколько вариантов на выбор, уточняйте у менеджера). </li>
          <li className=' mb-2'> — Услуги подъём и сборка мебели (оплачивается отдельно). </li>
        </ul>
      </section>



    </div>
  );
}



ProductPage.propTypes = {
  product: PropTypes.object
}

export default ProductPage;