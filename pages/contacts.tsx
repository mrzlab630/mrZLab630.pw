/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-10-21
 * Time: 15:34
 * About:
 *
 */
import {IContactPage} from '../interfaceAndType/IContactPage'
import {GetServerSideProps, NextPage} from "next"
import {useAppSelector} from "../redux/hooks"
import {RootState} from "../redux/store"
import SEOHead from "../components/SEOHead"
import ContactPage from "../layouts/ContactPage"
import {useState} from "react";
import {getFetchJson} from "../utils";


const Contacts: NextPage<IContactPage> = ({mediaLinks,error}) => {

    const header = useAppSelector((state:RootState) => state.seo.header)
    const seo = header.filter(itm => itm.page === 'contact').pop()

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
            <ContactPage {...{mediaLinks,error}}/>
        </>
}

export default Contacts

export const getServerSideProps:GetServerSideProps = async (context) => {

    const baseUrl = process.env.NODE_ENV === 'production' ? process.env.BASE_URL_PROD : process.env.BASE_URL_DEV
    const url = `${baseUrl}/static/json/mediaLinks.json`
    const method = 'GET'
    const headers = { 'Content-Type': 'application/json'}

    const {result,error} = await getFetchJson({url, method, headers})

    const props = {
        mediaLinks:result || null,
        error: error || null
    }

    return {props}


}