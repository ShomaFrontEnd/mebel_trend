import { useEffect, useState } from 'react';


const BannerCarousel = () => {

  const [trans, setTrans] = useState(false)
  const [activeIndex, setActive] = useState(0)


  const imgdata = [
    {
      url: 'https://batamebel.ru/upload/iblock/f81/c9ewx1ht0l4d8emy02d3sovbmx29qg2v/21.1.png',
      title: 'Диван \'ПАРИЖ\' ',
      price: 'oт 73,550 ₽',
      id: '12qq'
    },
    {
      url: 'https://batamebel.ru/upload/iblock/018/3jexipg6353y433lmqnbe1a1dovef79m/16.png',
      title: 'Диван \'Эйфель\' ',
      price: 'oт 52,800 ₽',
      id: '34qq'
    },

  ]

  function changeImageNext() {
    clearInterval(1000);
    if (imgdata.length - 1 === activeIndex) {
      setDuration()
      setTimeout(() => {
        setActive(0)

      }, 150);
    } else {
      setDuration()
      setTimeout(() => {
        setActive(prev => prev += 1)
      }, 150);
    }
  }


  function changeImagePrev() {
    if (!activeIndex) {
      setDuration()
      setTimeout(() => {
        setActive(imgdata.length - 1)

      }, 150)
    } else {
      setDuration()
      setTimeout(() => {
        setActive(prev => prev -= 1)
      }, 150);
    }
  }


  useEffect(() => {
  }, []);




  useEffect(() => {
    const interval = setInterval(() => {
      changeImageNext()
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);


  function setDuration() {
    setTrans(true)
    setTimeout(() => {
      setTrans(false)
    }, 400);
  }



  return (


    <div className="relative banner h-[20rem] sm:h-[25rem] md:h-[35rem] lg:h-[42rem] overflow-hidden pt-16">

      <div className="flex sm:justify-between duration-700 container mx-auto "  >

        <div className={'  pt-20 text-gray-800 ms-20 font-bold duration-500 ' + (trans ? '-translate-x-[200dvh] ' : '')}>
          <h2 className='text-[#3f817f] text-2xl sm:text-5xl mb-6'>{imgdata[activeIndex].title}</h2>
          <h2 className='text-gray-600 text-2xl sm:text-4xl mb-12'>{imgdata[activeIndex].price}</h2>
          <p className=' text-gray-600 w-64'>Популярная модель. 480+ продаж за последний год</p>
        </div>
        <img className={"w-3/6 2xl:w-3/6 duration-500 mt-12 " + (trans ? 'translate-x-[200dvh] ' : '')} src={imgdata[activeIndex].url} alt="divan" />

        {/* buttons */}

        <div className='absolute bottom-5 right-12  xl:right-[10rem] 2xl:right-[36rem] text-xs md:text-sm '>

          <span className="bg-[#4AA09F]/40 duration-200 mr-2 hover:bg-[#4AA09F]/60 active:bg-[#4AA09F]/70 p-2 rounded-xl text-white cursor-pointer " onClick={changeImagePrev}><i className="bi bi-caret-left"></i></span>
          {imgdata.map((img, index) => (
            <span key={img.id}><i className={'bi text-xs mr-2 duration-200 ' + (index === activeIndex ? 'text-[#4AA09F] bi-circle-fill' : 'bi-circle')}></i></span>
          ))}
          <span className="bg-[#4AA09F]/40 duration-200 hover:bg-[#4AA09F]/60 active:bg-[#4AA09F]/70 p-2 rounded-xl text-white cursor-pointer" onClick={changeImageNext}><i className="bi bi-caret-right"></i></span>
        </div>
      </div>

    </div>





  );
}

export default BannerCarousel;