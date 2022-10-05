import Link from 'next/link'
import React from 'react'

const BackArrow = () => {
    return (
        <Link href={"/"}>
            <img src={'../backArrow.png'} className="backArrow"></img>
        </Link>
    )
}

export default BackArrow