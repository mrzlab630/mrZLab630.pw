/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-12-08
 * Time: 11:26
 * About:
 *
 */

import {IToolsPage} from '../interfaceAndType/IHomePage'
import {NextPage,GetServerSideProps} from "next"

import {useAppSelector} from "../redux/hooks"
import {RootState} from "../redux/store"
import SEOHead from "../components/SEOHead"
import ToolsPage from "../layouts/ToolsPage"
import {getFetchJson} from "../utils"



const Tools: NextPage<IToolsPage> = ({list,error}) => {

    const header = useAppSelector((state:RootState) => state.seo.header)
    const seo = header.filter(itm => itm.page === 'tools').pop()




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
        <ToolsPage {...{list,error}}/>
    </>
}

export default Tools

export const getServerSideProps:GetServerSideProps = async (context) => {

    const baseUrl = process.env.NODE_ENV === 'production' ? process.env.BASE_URL_PROD : process.env.BASE_URL_DEV
    const url = `${baseUrl}/static/json/tools.json`
    const method = 'GET'
    const headers = { 'Content-Type': 'application/json'}

    const {result,error}  = await getFetchJson({url, method, headers})

    const props = {
        list: result || null,
        error: error || null
    }


    return {props}
}