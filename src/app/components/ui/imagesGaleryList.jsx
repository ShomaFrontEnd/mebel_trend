import PropTypes from 'prop-types';

const ImagesGaleryList = ({ data, imageCount, wSize, handleClick }) => {

  

  return (

    <div  className='w-fit border-2 p-1 rounded overflow-hidden overflow-x-auto'>
      <div className='inline-flex gap-1' >
        {data
          ? data.map((i, index) => (

            <img
              key={index}
              onClick={() => handleClick(index)}
              className={`h-auto rounded-lg duration-200 cursor-pointer w-${wSize}` + (index === imageCount ? ' border-2 border-[#4C9B9E] ' : '')}
              src={i}
            // alt={i.name}
            />

          ))
          : 'Загрузка...'}
      </div>
    </div>
  );
}


ImagesGaleryList.propTypes = {
  data: PropTypes.array,
  imageCount: PropTypes.number,
  wSize: PropTypes.number,
  cols: PropTypes.number,
  handleClick: PropTypes.func,
}

export default ImagesGaleryList;