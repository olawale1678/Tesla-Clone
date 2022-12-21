import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CustomOrderCard from './CustomOrderCard';
import CustomOrders from './CustomOrderD';

const CustomOrder = () => {    
    const params = useParams()

    const reform = CustomOrders.find((item) => {
        return item.idParams === params.id
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <>
            <CustomOrderCard reformItem = {reform}/>
        </>
    )
}

export default CustomOrder
