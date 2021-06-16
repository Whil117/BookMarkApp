import React,{FC} from 'react'
import Image from 'next/image'
import { CardChild } from '../../../../styles/Extension/ExtensionStyle'


interface Data {
    img:any
    title:string
    descript:string
}

export const Card:FC<Data> = ({img,title,descript}) => {
    return (
        <CardChild initial={{ opacity: 0 }}  animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} >
            <Image src={img} alt ={title} />
            <h4>{title}</h4>
            <p>{descript}</p>
            <a href="#">Add & Install Extension</a>
        </CardChild>
    )
}
