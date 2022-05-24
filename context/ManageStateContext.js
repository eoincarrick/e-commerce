import React, { useState, useEffect, createContext, useContext } from 'react';

const ManageContext = createContext();

export const ManageStateContext = ({ children }) => {
  const [error, setError] = useState(false);
  // @desc this "showCart" is exported here and  used in '../components/Navbar.jsx'
  const [showCart, setShowCart] = useState(false);
  // @desc this "cartItems" is exported here and  used in '../components/Cart.jsx'
  const [cartItems, setCartItems] = useState([]);
  // @desc this "totalPrice" is exported here and  used in '../components/Cart.jsx'
  const [totalPrice, setTotalPrice] = useState(0);
  // @desc this "totalQuantities" is exported here and  used in '../components/Cart.jsx' && '../components/Navbar.jsx'
  const [totalQuantities, setTotalQuantities] = useState(0);
  // @desc this "qty" is exported here and  used in '../pages/product/[slug].js'
  const [qty, setQty] = useState(1);

  console.log('cartItems', cartItems);

  const addToCart = (product, quantity) => {
    // @desc checking if the "cartItems._id" === "product._id"
    // @desc and the "find()" return the first element or product or items that meet the condition below.
    const isProductAlreadyInCart = cartItems.find(
      // @desc "isProductAlreadyInCart" return a value
      // @desc and in this case, it returns an Object
      (item) => item._id === product._id
    );

    // @desc Updating the total price
    setTotalPrice(
      (previousTotalPrice) => previousTotalPrice + product.new_price * quantity
    );

    // @desc Updating the total quantity
    setTotalQuantities(
      (previousTotalQuantities) => previousTotalQuantities + quantity
    );

    // @desc Updating the existing product in the cart already
    // @desc "isProductAlreadyInCart" return a boolean
    if (isProductAlreadyInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          console.log('found', cartProduct);
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity, // @desc Updating the quantity in the cart.
          };
        } else {
          console.log(`else returned ${cartProduct}`);
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }

        // @desc Updating cartItems by setting the "setCartItems" to "updatedCartItems"
        setCartItems(updatedCartItems);
      });
    } else {
      product.quantity = quantity;
      console.log(`shoot`, product);
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === 'inc') {
      console.log('increased');
      console.log('newCartItems', ...newCartItems);
      setCartItems([{ ...foundProduct, quantity: foundProduct.quantity + 1 }]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      console.log('decreased');
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        console.log('newCartItems', ...newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  // @desc Increasing the quantity of cart items.
  const increasedQuantity = () => {
    setQty((previousQuantity) => previousQuantity + 1);
  };

  // @desc Decreasing the quantity of cart items.
  const decreaseQuantity = () => {
    setQty((previousQuantity) => {
      if (previousQuantity - 1 < 1) return 1;

      return previousQuantity - 1;
    });
  };

  return (
    <ManageContext.Provider
      value={{
        totalQuantities,
        showCart,
        totalPrice,
        qty,
        onRemove,
        toggleCartItemQuantity,
        increasedQuantity,
        decreaseQuantity,
        setShowCart,
        addToCart,
        setQty,
      }}
    >
      {children}
    </ManageContext.Provider>
  );
};

export const useManageContext = () => useContext(ManageContext);
