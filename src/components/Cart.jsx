import React from 'react'
import { useSelector } from 'react-redux'
import style from "./sassFile/Cart.module.scss"

const Cart = () => {
    const result = useSelector(state => state.add);


    return (
        <div className={style.container}>
            <h4 className={style.text}>  :سبد خرید </h4>
            <hr />
            {result.map(item => {
                return (<div className={style.items}>
                    <p > : نام کالا </p>
                <p className={style.name} > {item.name} </p>
                <br />
                <p className={style.price}>ریال {item.price } :قیمت</p>
                <p> : تعداد </p>
                </div>
                
                )


            })}

        </div>
    )
}

export default Cart
