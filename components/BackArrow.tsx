import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backArrow from '../public/backArrow.png'
const BackArrow = () => {
    return (
        <Link href={"/"}>
            <a >
                <Image src={backArrow} width="50px" height='50px'></Image>
            </a>
        </Link>
    )
}

export default BackArrow