import type { AppProps } from 'next/app'
import "../styles/_reset.scss"
import "../styles/_global.scss"
import { createContext, Dispatch, SetStateAction } from 'react'
import { Category } from '../typings'

export const Context = createContext<{ categories: Category[], setCategory: Dispatch<SetStateAction<string>> }>({ categories: [], setCategory: () => { } })

const MyApp = ({ Component, pageProps }: AppProps) => {
  const categories: Category[] = []
  const setCategory: Dispatch<SetStateAction<string>> = () => { }
  return (
    <Context.Provider value={{ categories, setCategory }}>
      <Component {...pageProps} />
    </Context.Provider>)
}

export default MyApp
