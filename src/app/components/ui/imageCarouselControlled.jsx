import PropTypes from 'prop-types';


const ImageCarouselControlled = ({ img, slidePrev, slideNext, imageCount }) => {





  return (

    <div className="mb-5 relative scroller ">
      <a
        target="blank" href={img.url}>
        <img className="h-auto duration-500 rounded-lg hover:cursor-zoom-in border" src={img[imageCount]} alt={img.name} />
      </a>
      <button
        onClick={slidePrev}
        type="button"
        className="absolute bg-red-100/10  top-0 start-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span
          className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-[#4B9A9D]/30  group-hover:bg-[#4B9A9D]/60 group-focus:ring-4 group-focus:ring-[#4B9A9D]/70 group-focus:outline-none">
          <i className="bi bi-caret-left text-xl text-white"></i>
          <span className="sr-only">Предыдущий</span>
        </span>
      </button>
      <button onClick={slideNext} className="bg-red-100/10  absolute top-0 end-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span
          className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-[#4B9A9D]/30  group-hover:bg-[#4B9A9D]/60 group-focus:ring-4  group-focus:ring-[#4B9A9D]/70 group-focus:outline-none">
          <i className="bi bi-caret-right text-xl text-white"></i>
          <span className="sr-only">Следующий</span>
        </span>
      </button>
    </div>



  );
}




ImageCarouselControlled.propTypes = {
  img: PropTypes.array,
  imageCount: PropTypes.number,
  slidePrev: PropTypes.func,
  slideNext: PropTypes.func,
}

export default ImageCarouselControlled;