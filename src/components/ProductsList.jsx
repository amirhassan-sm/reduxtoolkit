import React, { useEffect, useState } from 'react'
import style from './sassFile/ProductsList.module.scss'
import { useDispatch } from 'react-redux'
import { add } from '../redux/AddProducts'

const ProductsList = () => {
    const [Product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://80.75.14.90:9090/products")
            .then((response) => { return response.json() })
            .then((result) => { setProduct(result) })

    }, [])
    const deispat = useDispatch()
    const dispatch = (e) => {
        deispat(add({name:e.target.getAttribute("name"),price:e.target.getAttribute("price")}))

    }

    if (Product.length === (undefined || 0)) { return <h1>laoading...</h1> }
    return (
        <div className={style.container}>
            {Product.map((item) => {
                return <div  className={style.card} name={item.name}>
                    <img className={style.image} src={item.indexImageUrl} alt="" />
                    <div className={style.footer}>{item.name}</div>
                    <div className={style.price}>ریال{item.price} : قیمت</div>
                    <button onClick={dispatch} name={item.name} price={item.price} className={style.btn}>اضافه به سبد خرید</button>

                </div>
            })}


        </div>

    )
}

export default ProductsList
