import React, { createContext, useEffect, useReducer, useState } from "react";
import { request, requestSuccess } from "../action/actionAPI";
import reducer, { initcarts, initShowProduct, innitGallery, initLogin, initShowUser, initShowOrder, initShowProductDetail } from "./reducer";

export const ContextProduct = createContext()
export const ContextCart = createContext()
export const AuthContext = createContext()

function Context({ children }) {
    const [carts, dispatchCart] = useReducer(reducer.reducerCart, []);
    const [products, dispatchCallProduct] = useReducer(reducer.reducerCallProduct, initShowProduct)
    const [galleries, dispatchCallGallery] = useReducer(reducer.reducerCallGallery, innitGallery)
    const [dataLogin, dispatchDataLogin] = useReducer(reducer.reducerDataLogin, initLogin)
    const [users, dispatchCallUser] = useReducer(reducer.reducerCallUsers, initShowUser)
    const [orders, dispatchCallOrders] = useReducer(reducer.reducerCallOrders, initShowOrder)
    // const [productdetail, dispatchCallproductdetail] = useReducer(reducer.reducerCallProductDetail, initShowProductDetail)
    //console.log(orders)

    useEffect(() => {
        fetch("https://fashion-v6.onrender.com/all")
            .then((response) => response.json())
            .then((data) => dispatchCallUser({
                type: "REQUEST_SUCCESS_USERS",
                payload: data
            }));
    }, []);

    useEffect(() => {
        dispatchCallProduct(request({ data: [] }))
        setTimeout(() => {
            fetch("https://fashion-v6.onrender.com/product/show")
                .then((response) => response.json())
                .then((data) => dispatchCallProduct(requestSuccess(data)))
        }, 500)
    }, []);

    useEffect(() => {
        // dispatchCallProduct(request({ data: [] }))
        fetch("https://fashion-v6.onrender.com/gallery/show")
            .then((response) => response.json())
            .then((data) => dispatchCallGallery({
                type: "GET_GALLERY",
                payload: data
            }))
    }, []);

    useEffect(() => {
        fetch("https://fashion-v6.onrender.com/order/show")
            .then((response) => response.json())
            .then((data) => dispatchCallOrders({
                type: "REQUEST_SUCCESS_ORDERS",
                payload: data
            }));
    }, []);

    const responLogin = (form) => {
        console.log(form)
        fetch("https://fashion-v6.onrender.com/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (typeof data.user !== "undefined")
                    localStorage.setItem("user", JSON.stringify(data.user))

            })
            .then(() => dispatchDataLogin({
                type: "LOGIN",
                payload: JSON.parse(localStorage.getItem("user"))
            }))
    }

    const getProduct = (id) => {
        fetch(`https://fashion-v6.onrender.com/product/detail/${id}`)
            .then((response) => response.json())
            .then((data) => data);
    }

    // console.log(productdetail)


    const info = {
        carts,
        dispatchCart
    }
    return (
        <ContextProduct.Provider value={{ getProduct, orders, products, galleries, users }}>
            <ContextCart.Provider value={info}>
                <AuthContext.Provider value={{ responLogin, dataLogin }}>
                    {children}
                </AuthContext.Provider>
            </ContextCart.Provider>
        </ContextProduct.Provider>
    )

}

export default Context