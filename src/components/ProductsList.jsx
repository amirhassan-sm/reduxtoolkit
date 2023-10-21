import React, { useEffect, useState } from 'react'
import style from './sassFile/ProductsList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { add, increment } from '../redux/AddProducts'
import { Link, useLoaderData } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Toast, ToastContainer } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
const ProductsList = () => {
    const [show, setshow] = useState(false)
    const [Product, setProduct] = useState([])
    // useEffect(() => {
    //     fetch(`${config.API}/products`)
    //         .then((response) => { return response.json() })
    //         .then((result) => { setProduct(result) })

    // }, [])
    const data = useLoaderData()
    console.log(data)

    useEffect(() => { setProduct(data) }, [])
    const deispat = useDispatch()

    const dispatch = (e) => {
        deispat(add({ name: e.target.getAttribute("name"), price: e.target.getAttribute("price"), number: 1, total: e.target.getAttribute("price") }))
        setshow(true)
    }



    return (
        <>



            <div> <Link to={"/cart"}><AiOutlineShoppingCart color='blue' size={100} /></Link></div>
            <div className={style.container}>
                {Product.map((item) => {
                    return <div className={style.card} name={item.name}>
                        <div className={style.imgContainer}>
                            <img className={style.image} src={item.indexImageUrl} alt="" />
                        </div>
                        <div className={style.footer}>{item.name}</div>
                        <div className={style.price}>ریال{item.price} : قیمت</div>

                        <div className={style.btnContainer}>
                            <button id={item.id - 1} onClick={dispatch} name={item.name} price={item.price} className={style.btn}>اضافه به سبد خرید</button>
                        </div>
                    </div>
                })}


                    <ToastContainer style={{position:"fixed"}}  position='bottom-end'>

                        <Toast bg='success' autohide delay={2000} show={show} onClose={() => { setshow(false) }}>
                            <Toast.Header>
                                new
                            </Toast.Header>
                            <Toast.Body>
                                <bold>محصول شما با موفقیت به سبد خرید اضافه شد</bold>

                            </Toast.Body>

                        </Toast>
                    </ToastContainer >
                </div>




        </>


    )
}

export default ProductsList
