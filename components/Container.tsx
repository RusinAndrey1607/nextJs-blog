import { NextPage } from 'next'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import Alert from './Alert'
import Footer from './Footer'

type MyContainerPropsType = {
    title?: string
    icon?: string
    children: ReactNode
}

const Container: NextPage<MyContainerPropsType> = ({ title, icon, children }) => {
    return (
        <>
            <Head>
                <meta property="keywords:React, Js , NextJs , CMS , SanityIo, blog"></meta>
                <link rel="icon" href={icon ? icon : "../icon.svg"} type="image/icon type" />
                <title>{title ? title : "Blog"}</title>
            </Head>
            <>
            
                <div className="wrapper">
                    <main className='main'>
                        <Alert />
                        {children}
                    </main>
                    <Footer />
                </div>

            </>

        </>
    )
}

export default Container