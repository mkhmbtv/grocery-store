import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getCartItemById, updateCount } from '../../store/cart';
import { toggleLike } from '../../store/produce';

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(getCartItemById(produce.id));

  const add = () => {
    if (cartItem) return dispatch(updateCount(produce.id, cartItem.count + 1));
    return dispatch(addToCart(produce.id))
  };

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => dispatch(toggleLike(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => dispatch(add())}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;