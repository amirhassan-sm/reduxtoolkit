import React from 'react'
import { useSelector } from 'react-redux'
import style from "./sassFile/Cart.module.scss"
import { Link } from 'react-router-dom';

const Cart = () => {
    const result = useSelector(state => state.add);
    

    return (
        <div className={style.container}>
            <Link to={"/products"}>products</Link>
            


            <h4 className={style.text}>  :سبد خرید </h4>
            <hr />
            {result.map(item => {
                return (<div className={style.items}>
                    <p > : نام کالا </p>
                <p className={style.name} > {item.name} </p>
                <br />
                <p className={style.price}>ریال {item.price } :قیمت</p>
                <p>{item.number} : تعداد </p>
    
                <p> ریال {item.total} :   قیمت کل این کالا</p>
                </div>
                
                )


            })}

        </div>
    )
}

export default Cart
