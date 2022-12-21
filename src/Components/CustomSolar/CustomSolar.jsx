import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CustomSolarCard from './CustomSolarCard';
import customSolarData from './CustomSolarD';

const CustomSolar = () => {    
    const params = useParams()
    console.log(params);

    const reform = customSolarData.find((item) => {
        return item.idParams === params.id
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <>
            <CustomSolarCard reformItem = {reform}/>
        </>
    )
}

export default CustomSolar