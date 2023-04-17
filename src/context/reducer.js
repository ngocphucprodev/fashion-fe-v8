import { useContext } from "react";
import { ContextProduct } from "./ContextApiProducts";

const reducerCart = (carts, action) => {
    // console.log(carts)
    switch (action.type) {
        case "ADD":
            const filtercart = carts.filter((item) => item._id === action.payload.product._id)
            if (filtercart.length > 0) return carts
            else
                return [...carts, {
                    ...action.payload.product,
                    quantity: Number(action.payload.quantity)
                }];
        case "INCREASE":
            const tempstate1 = carts.map((item) => {
                if (item._id === action.payload._id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
            return tempstate1;
        case "DECREASE":
            const tempstate2 = carts.map((item) => {
                if (item._id === action.payload._id) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            });
            return tempstate2;
        case "REMOVE":
            const timestamps = carts.filter((item) => item._id !== action.payload._id)
            return timestamps
        default:
            break;
    }
}

export const initShowProduct = {
    loading: true,
    data: [],
}
const reducerCallProduct = (products, action) => {
    switch (action.type) {
        case "REQUEST":
            return {
                ...products,
                loading: true,
            }

        case "REQUEST_SUCCESS":
            return {
                loading: false,
                data: action.payload
            }
        default:
    }
}
export const initShowUser = {
    loading: true,
    data: [],
}
const reducerCallUsers = (users, action) => {
    switch (action.type) {
        case "REQUEST_SUCCESS_USERS":
            return {
                loading: false,
                data: action.payload
            }
        default:
    }
}

export const initShowOrder = {
    loading: true,
    data: [],
}
const reducerCallOrders = (orders, action) => {
    // console.log(action, orders)
    switch (action.type) {
        case "REQUEST_SUCCESS_ORDERS":
            return {
                loading: false,
                data: action.payload
            }
        default:
    }
}
export const initShowProductDetail = {
    loading: true,
    data: {}
}
const reducerCallProductDetail = (productdetail, action) => {
    console.log(action, productdetail)
    switch (action.type) {
        case "REQUEST_SUCCESS_PRODCUTDETAIL":
            return {
                loading: false,
                data: action.payload
            }
        default:
    }
}


const filterReducer = (filterState, action) => {
    console.log(filterState)

    switch (action.type) {
        case "Áo Sơmi Nam":
            const Filtersominam = action.products.data.filter(item => item.type == action.payload)
            return Filtersominam
        case "Áo Sơmi Nữ":
            const Filtersominu = action.products.data.filter(item => item.type == action.payload)
            return Filtersominu
        case "Áo Polo Nam":
            const Filterpolonam = action.products.data.filter(item => item.type == action.payload)
            return Filterpolonam
        case "Áo Polo Nữ":
            const Filterpolonu = action.products.data.filter(item => item.type == action.payload)
            return Filterpolonu
        case "Áo sơmi trẻ em":
            return false
        case "Áo polo thể thể thao":
            return false
        case "Áo polo trẻ em":
            return false
        case "Quần Kaki nữ":
            return false
        case "Quần Jean nam":
            return false
        case "Filter300":
            const Filter3000 = action.products.data.filter(item => item.price < 300.000)
            return Filter3000
        case "Filter300450":
            const Filter300450 = action.products.data.filter(item => item.price > 300.000 && item.price < 450.000)
            return Filter300450
        case "Filter500700":
            const Filter500700 = action.products.data.filter(item => item.price > 500.000)
            return Filter500700
        default:
    }
}

export const innitGallery = []
const reducerCallGallery = (innitGallery, action) => {
    switch (action.type) {
        case "GET_GALLERY":
            return {
                data: action.payload
            }
        default:
    }
}
export const initLogin = {}
const reducerDataLogin = (initLogin, action) => {
    // console.log(initLogin, action)
    switch (action.type) {
        case "LOGIN":
            return action.payload

        default:
    }
}

const reducer = {
    reducerCart,
    reducerCallProduct,
    filterReducer,
    reducerCallGallery,
    reducerDataLogin,
    reducerCallUsers,
    reducerCallOrders,
    reducerCallProductDetail
}
export default reducer