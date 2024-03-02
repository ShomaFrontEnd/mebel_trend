import PropTypes from 'prop-types';
import Card from "../cards/card";



const ProductBlock = ({ productData }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols- lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-12 ">

      {productData &&
        productData.map(p => (
          <Card key={p.id} id={p.id} imgPath={p.imgUrl[0]} imgName={p.name} />
        ))
      }


    </div>
  );
}

ProductBlock.propTypes = {
  productData: PropTypes.array
}

export default ProductBlock;