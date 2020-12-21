import React from 'react';
import './shoppingCart.scss';

const ShoppingCart = () => {
    return (
        <div id="cart-popup" className="cart">


            <div className="cart__container">

                <a href="index.html" className="cart__close"></a>

                <div className="cart__header">Cart</div>
                <div className="cart__sub">3 items</div>


                <div className="cart__big-con-1">
                    <div>Item</div>
                    <div></div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Sub Total</div>
                </div>

                <div className="cart__scroll">
                    <div className="cart__big-con">
                        <div className="cart__small-con">
                            <div className="cart__box cart__box-1">
                                <img src="./img/40421.png" alt="" className="cart__img" />
                            </div>
                            <div className="cart__box cart__box-2">Seafood Delight</div>
                            <div className="cart__box cart__box-3"> <input type="text" className="cart__quantity" /></div>
                            <div className="cart__box cart__box-4">£1.99</div>
                            <div className="cart__box cart__box-5">£1.99</div>
                        </div>
                        <div className="cart__remove-btn-box">
                            <div className="cart__remove-icon"></div>
                            <div className="cart__remove-text">REMOVE</div>
                        </div>
                    </div>

                    <div className="cart__big-con">
                        <div className="cart__small-con">
                            <div className="cart__box cart__box-1">
                                <img src="./img/40421.png" alt="" className="cart__img" />
                            </div>
                            <div className="cart__box cart__box-2">Seafood Delight</div>
                            <div className="cart__box cart__box-3"> <input type="text" className="cart__quantity" /></div>
                            <div className="cart__box cart__box-4">£1.99</div>
                            <div className="cart__box cart__box-5">£1.99</div>
                        </div>
                        <div className="cart__remove-btn-box">
                            <div className="cart__remove-icon"></div>
                            <div className="cart__remove-text">REMOVE</div>
                        </div>
                    </div>

                    <div className="cart__big-con">
                        <div className="cart__small-con">
                            <div className="cart__box cart__box-1">
                                <img src="./img/40421.png" alt="" className="cart__img" />
                            </div>
                            <div className="cart__box cart__box-2">Seafood Delight</div>
                            <div className="cart__box cart__box-3"> <input type="text" className="cart__quantity" /></div>
                            <div className="cart__box cart__box-4">£1.99</div>
                            <div className="cart__box cart__box-5">£1.99</div>
                        </div>
                        <div className="cart__remove-btn-box">
                            <div className="cart__remove-icon"></div>
                            <div className="cart__remove-text">REMOVE</div>
                        </div>
                    </div>
                    <div className="cart__big-con">
                        <div className="cart__small-con">
                            <div className="cart__box cart__box-1">
                                <img src="./img/40421.png" alt="" className="cart__img" />
                            </div>
                            <div className="cart__box cart__box-2">Seafood Delight</div>
                            <div className="cart__box cart__box-3"> <input type="text" className="cart__quantity" /></div>
                            <div className="cart__box cart__box-4">£1.99</div>
                            <div className="cart__box cart__box-5">£1.99</div>
                        </div>
                        <div className="cart__remove-btn-box">
                            <div className="cart__remove-icon"></div>
                            <div className="cart__remove-text">REMOVE</div>
                        </div>
                    </div>
                    <div className="cart__big-con">
                        <div className="cart__small-con">
                            <div className="cart__box cart__box-1">
                                <img src="./img/40421.png" alt="" className="cart__img" />
                            </div>
                            <div className="cart__box cart__box-2">Seafood Delight</div>
                            <div className="cart__box cart__box-3"> <input type="text" className="cart__quantity" /></div>
                            <div className="cart__box cart__box-4">£1.99</div>
                            <div className="cart__box cart__box-5">£1.99</div>
                        </div>
                        <div className="cart__remove-btn-box">
                            <div className="cart__remove-icon"></div>
                            <div className="cart__remove-text">REMOVE</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>)
}

export default ShoppingCart;