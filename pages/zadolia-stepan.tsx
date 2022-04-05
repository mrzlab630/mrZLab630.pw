/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2022-03-29
 * Time: 10:23
 * About:
 *
 */
import {IAboutPage} from '../interfaceAndType/IAboutPage'
import {GetServerSideProps, NextPage} from "next"
import {useAppSelector} from "../redux/hooks"
import {RootState} from "../redux/store"
import {useEffect, useState} from "react"
import {getFetchJson, InfoInConsole} from "../utils"
import SEOHead from "../components/SEOHead"
import CvPage from "../layouts/CvPage"


const About: NextPage<IAboutPage> = ({cv,error}) => {

    const header = useAppSelector((state:RootState) => state.seo.header)
    const seo = header.filter(itm => itm.page === 'cv').pop()

    const [user, setUser] = useState({
        showContactForm:true,
        name:'zadolia stepan',
        pic:'/static/imgs/user_pic.png',
        position:'web developer',
        contact:{
            type:'telegram',
            link:'https://t.me/mrZLab630',
            lable:'@mrzlab630'
        },
        mediaLinks:{
            lable:'web',
            value:['https://github.com/mrzlab630','https://linkedin.com/in/stepan-zadolya']
        },
        location:{
            lable:'area',
            value:'home'
        },
        education:{
            lable:'education',
            value:[
                {
                    title:'kkk',
                    subTitle:'llc',
                    date:'2000 - 2010',
                    value:'<p>Phasellus nec sem in justo pellentesque facilisis.</p>'
                },
                {
                    title:'some job 2',
                    subTitle:'llc my-corp',
                    date:'2010 - 2011',
                    value:'<p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero</p>'
                }
            ]
        },
        about:{
            lable:'about me',
            value:'<p>me </p><p>Ut a nisl id ante tempus hendrerit.</p><p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam at tortor in tellus interdum sagittis. Ut tincidunt tincidunt erat.</p>'
        },
        skills:[
            {
                lable:'skills',
                value:[
                    {
                        lable:'JavaScript',
                        level:98
                    },
                    {
                        lable:'TypeScript',
                        level:88
                    },
                    {
                        lable:'Pyton',
                        level:69
                    },
                    {
                        lable:'php',
                        level:58
                    },
                    {
                        lable:'web3',
                        level:72
                    },
                ]
            },
            {
                lable:'languages',
                value:[
                    {
                        lable:'english',
                        level:76
                    },
                    {
                        lable:'russian',
                        level:99
                    },
                ]
            }
        ],
        experience:{
            lable:'experience',
            value:[{
                title:'some job 0',
                subTitle:'llc my-corp',
                date:'2000 - 2010',
                value:'<p>Phasellus nec sem in justo pellentesque facilisis.</p><p>Ut a nisl id ante tempus hendrerit.</p><p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero</p>'
            },
                {
                    title:'some job 2',
                    subTitle:'llc my-corp',
                    date:'2010 - 2011',
                    value:'<p>Ut a nisl id ante tempus hendrerit.</p><p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero</p>'
                },
                {
                    title:'some job3',
                    subTitle:'llc my-corp',
                    date:'2011 - 2015',
                    value:'<p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero</p>'
                }]
        },
        portfolio:[
            {
                images:['https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380','https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380','https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380'],
                url:'http://localhost:3004/zadolya-stepan',
                date:'2020',
                title:'Vestibulum 1',
                about:'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.',
            },
            {
                images:['https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380','https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380','https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380'],
                url:'http://localhost:3004/zadolya-stepan',
                date:'2021',
                title:'Pellentesque posuere',
                about:'vulputate eget, arcu.',
            },
            {
                images:['https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380','https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380','https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380'],
                url:'http://localhost:3004/zadolya-stepan',
                date:'2022',
                title:'Etiam imperdiet imperdiet',
                about:'Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus.',
            },
            {
                images:['https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380','https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380','https://img.freepik.com/free-vector/modern-simple-template-for-curriculum_1435-1423.jpg?w=1380'],
                url:'http://localhost:3004/zadolya-stepan',
                date:'2022',
                title:'Aenean massa',
                about:'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.',
            },
        ]

    })


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

export default About


export const getServerSideProps:GetServerSideProps = async (context) => {

    const baseUrl = process.env.NODE_ENV === 'production' ? process.env.BASE_URL_PROD : process.env.BASE_URL_DEV
    const url = `${baseUrl}/static/json/cv.json`
    const method = 'GET'
    const headers = { 'Content-Type': 'application/json'}

    const {result,error} = await getFetchJson({url, method, headers})





    const props = {
        cv:result?.cv ?? null,
        error: error ?? null
    }

    return {props}


}