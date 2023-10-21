import { useContext } from "react";
import { ECContext } from "../context/ECContext";

import { Card } from "../component/cards";

export const Cart = () => {
  const {
    ecState: { cart },
    ecDispatch,
  } = useContext(ECContext);

  const removeFromCart = (id) => {
    ecDispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className="cart-parent-div">
      {cart?.length > 0 && <h2> Cart </h2>}

      {cart?.length === 0 && (
        <h1 className="nothing"> Your Cart Is Empty !☹︎ </h1>
      )}

      <div className="cart-child-div">
        {cart?.map((item) => (
          <Card
            key={item?.id}
            item={item}
            onRemove={() => removeFromCart(item?.id)}
          />
        ))}
      </div>
    </div>
  );
};
