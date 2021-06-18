import React, { FC } from "react";
import { motion } from "framer-motion"
import styled from '@emotion/styled'

const Fot = styled(motion.footer)`
    padding: 30px;
    background-color: #2c2c2c;
    color:white;
`

export const Footer:FC = () => {
    return (
        <Fot initial={{ opacity: 0 }}  animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }}>
            <a href="https://github.com/WhiLEx117" target="_blank" rel="noopener noreferrer"><h1>Whil</h1></a>
        </Fot>
    )
}
