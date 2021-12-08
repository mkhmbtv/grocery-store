import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCount } from '../../store/cart';

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
          onChange={(e) => setCount(e.target.value)}
          onBlur={() => dispatch(updateCount(item.id, Number(count)))}
          value={count} />
        <button
          className="cart-item-button"
          onClick={() => dispatch(updateCount(item.id, item.count + 1))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(updateCount(item.id, item.count - 1))}
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