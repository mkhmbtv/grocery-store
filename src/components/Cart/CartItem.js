import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { decrementCount, incrementCount, setNewCount, removeFromCart } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">
        {item.name}
      </div>
      <div className="cart-item-menu">
        <input
          type="number"
          onChange={(e) => dispatch(setNewCount(item.id, Number(e.target.value))) }
          value={count} />
        <button
          className="cart-item-button"
          onClick={() => dispatch(incrementCount(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(decrementCount(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CartItem;