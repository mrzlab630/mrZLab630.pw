/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-09-17
 * Time: 11:33
 * About:
 *
 */
import type { NextPage } from 'next'
import {IHomePage} from '../interfaceAndType/IHomePage'
import {useAppSelector} from "../redux/hooks"
import {RootState} from "../redux/store"
import HomePage from "../layouts/HomePage"
import SEOHead from "../components/SEOHead"
import {InfoInConsole} from "../utils"
import {useEffect} from "react"




const Home: NextPage<IHomePage> = () => {


    const header = useAppSelector((state:RootState) => state.seo.header)
    const seo = header.filter(itm => itm.page === 'root').pop()

    useEffect(() => InfoInConsole(),[])



    return <>
        <SEOHead
            {...seo}
            type={'website'}
            twitter={{
                ...header,
                card:'summary_large_image',
                image:seo?.image
            }}
        />
        <HomePage/>
    </>
}



export default Home