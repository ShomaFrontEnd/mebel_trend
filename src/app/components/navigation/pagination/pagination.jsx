import PropTypes from 'prop-types';



const Pagination = ({ currentPage, dataAmount, productAmountInPage, onSetPage, onPrevPage, onNextPage }) => {

  const pageCount = Math.ceil(dataAmount / productAmountInPage);
  let paginationArr = [];

  for (let i = 0; i < pageCount; i++) {
    paginationArr.push(i + 1);
  }

  if (paginationArr.length <= 1) {
    return;
  }

  return (
    <nav aria-label="Page navigation  ">
      <ul className="flex justify-center gap-1 -space-x-px h-8 text-sm mt-5 " >

        <li className=" cursor-pointer " onClick={onPrevPage}>
          <div className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 rounded-s-lg hover:bg-[#4AA09F] hover:text-white   ">
            <span className="sr-only">Предыдущая страница</span>
            <i className="bi bi-caret-left"></i>
          </div>
        </li>

        {paginationArr.map(num => (

          <li
            key={num + '-paginNumber'}
            className=" cursor-pointer"
            onClick={() => onSetPage(num)}
          >
            <div
              className={"flex items-center justify-center px-3 h-8 leading-tight  border border-gray-300 rounded-lg hover:bg-[#4AA09F]  " + (currentPage === num ? ' bg-[#4AA09F] text-white' : 'text-gray-600')}>{num}</div>
          </li>
        ))}

        <li className=" cursor-pointer" onClick={onNextPage}>
          <div className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 border border-gray-300 rounded-e-lg hover:bg-[#4AA09F] hover:text-white  " >
            <span className="sr-only">следующая страница</span>
            <i className="bi bi-caret-right"></i>
          </div>
        </li>

      </ul>
      
      {/* showMore Button */}
      <div className='text-center mt-6'>
        <button onClick={onNextPage} className='px-3 py-1 border-2 rounded-lg border-[#4AA09F] hover:bg-[#4AA09F] hover:text-white'>Показать еще  </button>
      </div>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  dataAmount: PropTypes.number,
  productAmountInPage: PropTypes.number,
  onSetPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func,
}
export default Pagination;