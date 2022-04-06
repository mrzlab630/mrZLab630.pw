/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2022-03-29
 * Time: 10:23
 * About:
 *
 */
import {IZadoliaStepanPage} from '../interfaceAndType/IZadoliaStepanPage'
import {GetServerSideProps, NextPage} from "next"
import {useAppSelector} from "../redux/hooks"
import {RootState} from "../redux/store"
import {useEffect, useState} from "react"
import {getFetchJson, InfoInConsole} from "../utils"
import SEOHead from "../components/SEOHead"
import CvPage from "../layouts/CvPage"


const ZadoliaStepanPage: NextPage<IZadoliaStepanPage> = ({user,error}) => {

    const header = useAppSelector((state:RootState) => state.seo.header)
    const seo = header.filter(itm => itm.page === 'cv').pop()


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
            <CvPage {...{error,user}}/>
    </>
}

export default ZadoliaStepanPage


export const getServerSideProps:GetServerSideProps = async (context) => {

    const baseUrl = process.env.NODE_ENV === 'production' ? process.env.BASE_URL_PROD : process.env.BASE_URL_DEV
    const url = `${baseUrl}/static/json/cv.json`
    const method = 'GET'
    const headers = { 'Content-Type': 'application/json'}

    const {result,error} = await getFetchJson({url, method, headers})



    const props = {
        user:result?.cv ?? null,
        error: error ?? null
    }

    return {props}
}