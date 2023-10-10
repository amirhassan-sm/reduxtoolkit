import React, { useEffect, useState } from 'react'
import style from './sassFile/ProductsList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { add, increment } from '../redux/AddProducts'

const ProductsList = () => {
    const [Product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://80.75.14.90:9090/products")
            .then((response) => { return response.json() })
            .then((result) => { setProduct(result) })

    }, [])
    const deispat = useDispatch()
    const result=useSelector(state=>state.add)
    let i=-1;
    const dispatch = (e) => {
        deispat(add({ name: e.target.getAttribute("name"), price: e.target.getAttribute("price"),number:1,total:e.target.getAttribute("price") }))

    }
 

    if (Product.length === (undefined || 0)) { return <h1>laoading...</h1> }
    return (
        <div className={style.container}>
            {Product.map((item) => {
                return <div className={style.card} name={item.name}>
                    <div className={style.imgContainer}>
                        <img className={style.image} src={item.indexImageUrl} alt="" />
                    </div>
                    <div className={style.footer}>{item.name}</div>
                    <div className={style.price}>ریال{item.price} : قیمت</div>
                    
                    <div className={style.btnContainer}>
                        <button id={item.id-1} onClick={dispatch} name={item.name} price={item.price} className={style.btn}>اضافه به سبد خرید</button>
                    </div>
                </div>
            })}


        </div>

    )
}

export default ProductsList
