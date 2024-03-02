import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ imgPath, imgName, id }) => {

  return (

    <div className=" max-w-xs bg-white border hover:scale-105 border-gray-200 rounded-lg shadow duration-200 hover:shadow-xl">



      <Link className='relative' to={`${imgName}/${id}`}>
        <div className='absolute bottom-0 flex items-end flex-row justify-betwee w-full  p-1'>
          <span className='bg-red-500 ms-2 mt-2 rounded-full w-c font-bold p-1 text-white text-[0.6rem]'>Хит</span>
          <span className='bg-[#4AA09F] ms-2 mt-2 rounded-full w-c font-bold p-1 text-white text-xs'>Новинка</span>
          <span className='bg-orange-300 ms-2 mt-2 rounded-full w-c font-bold p-1 text-white text-xs'>Акция</span>

        </div>
        <img className="rounded-t-lg" src={imgPath} alt="" />
      </Link>
      <div className="p-5">
        <span className='text-gray-400 text-xs'>диваны</span>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{imgName}</h5>

        <div className="mb-3 font-normal text-gray-700 ">
          <div className=''>

            <div className='text-sm  text-green-500 rounded-lg px-1'>&#9900; В наличии</div>
            <div className='text-sm  text-gray-500 rounded-lg px-1'>&#x2714; Под заказ</div>


          </div>

        </div>

        <Link to={`${imgName}/${id}`} className="w-full justify-center inline-flex items-center px-3 py-2 text-sm font-bold text-center text-[#49788b] border border-[#518297] duration-300 rounded-lg hover:bg-[#518297] hover:text-white active:ring-4 active:outline-none active:ring-[#518297]">
          Подробнее
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
}




Card.propTypes = {
  imgPath: PropTypes.string,
  imgName: PropTypes.string,
  id: PropTypes.string,

}

export default Card;