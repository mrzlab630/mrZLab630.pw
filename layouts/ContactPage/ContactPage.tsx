/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-11-16
 * Time: 12:16
 * About:
 *
 */
import {useEffect, useState} from "react"
import {IContactPage} from './interface'
import classes from './ContactPage.module.scss'
import ContactForm from "../../components/ContactForm"
import {IContactFormCallbackParams} from "../../components/ContactForm/interface"
import Container from "../../components/Container"
import {feedback} from "../../apollo/requests"
import {useMutation} from "@apollo/client"
import ProgressBar from "../../components/ProgressBar/ProgressBar"
import {Notification} from "../../components/Notification"
import {TINotificationType} from "../../components/Notification/interface"
import {NextPage} from "next"
import {IContainerNavigation, TContainerPage} from "../../components/Container/interface"
import Router from "next/router";
import {renderSpanBlock} from "../../utils"
import LinkedinSvg from '../../assets/svg/linkedin.svg'
import UpworkSvg from '../../assets/svg/upwork.svg'
import GithubSvg from '../../assets/svg/github.svg'
import DefaultLinkSvg from '../../assets/svg/logo_Z.svg'
import Button from "../../components/Button"






const ContactPage: NextPage<IContactPage> = ({mediaLinks,error}) => {

    const [showAlert,setShowAlert] = useState<boolean>(false)
    const [alertType,setAlertType] = useState<TINotificationType>('success')
    const [alertMessage,setAlertMessage] = useState<string|undefined>(undefined)
    const [navigation, setNavigation] = useState<IContainerNavigation>({
        down:'tools',
        downRight:'about',
        upRight:'logo'
    })

    const [links, setLinks] = useState<IContactPage['mediaLinks']|undefined>(undefined)

    useEffect(() => Array.isArray(mediaLinks) ? setLinks(mediaLinks) : undefined ,[mediaLinks])


    const [feedbackFunc,{
                            loading:feedbackLoading,
                            data:feedbackData,
                            error:feedbackErr
                        }] = useMutation(feedback)


    useEffect(() =>{
        if(showAlert){
            setTimeout(() => setShowAlert(false), 6000)
        }
    },[showAlert])


    useEffect(() =>{

        setShowAlert(Boolean(error))
        setAlertType(error ? 'error' : 'success')
        setAlertMessage(error)

    },[error])



    const getAddUserResult = (v:{err:any, data:any}):void =>{
        try {
            const {err,data} = v || false


            if(!err && !data){
                return
            }

            const errInfo = err?.message

            if(errInfo){
                throw new Error(errInfo)
            }

            const {result} = data?.feedback || false

            setShowAlert(true)
            setAlertType('success')
            setAlertMessage(result)


        }catch (e) {
            setShowAlert(true)
            setAlertType('error')
            setAlertMessage((e as Error).message)
        }

    }

    useEffect(() =>getAddUserResult({err:feedbackErr, data:feedbackData}),[feedbackData,feedbackErr])


    const handleGetContactForm = (variables?:IContactFormCallbackParams) => {


        const {email,message} = variables || {}

        let errInfo

        switch (true) {

            case !Boolean(email):
                errInfo = 'please add your email'
                break

            case !Boolean(message):
                errInfo = 'please add your message'
                break

            default:
                errInfo = undefined

        }

            setShowAlert(Boolean(errInfo))
            setAlertType(Boolean(errInfo) ? 'error' : 'success')
            setAlertMessage(errInfo)

        if(errInfo){
            return
        }
         feedbackFunc({variables})
    }

    const handleGetPage = (v:TContainerPage) => setTimeout(() => Router.push( `/${navigation[v] || ''}`), 800)

    const handleClickLinkOut = (link:string) => () =>   Router.push(link)



    const renderLinks = Array.isArray(links) ? links.map((itm,idx) =>{

        let Icon

        switch (true) {

            case /github/i.test(itm):
                Icon = GithubSvg
                break
            case /upwork/i.test(itm):
                Icon = UpworkSvg
                break
            case /linkedin/i.test(itm):
                Icon = LinkedinSvg
                break

            default:
                Icon = DefaultLinkSvg
        }


        return  <Button key={`renderLinks-${idx}`}
                    variant={'text'}
                    callback={handleClickLinkOut(itm)}
                >
                    <Icon className={classes.icon}/>
                </Button>
    }) : null


    return <>
        <Notification
            position={'top-right'}
            type={alertType}
            open={showAlert}
            message={alertMessage}
        />
            <Container
                {...{navigation}}
                callback={handleGetPage}
            >
                <div className={classes.ContactPage}>
                    {
                        feedbackLoading ? <ProgressBar />
                                        : <>

                                {
                                    renderLinks && <div>
                                            <h1 className={classes.title} dangerouslySetInnerHTML={{__html: renderSpanBlock('follow','me')}}/>
                                        {
                                            renderLinks
                                        }
                                                </div>

                                }
                            <div>
                                <h2 className={classes.title} dangerouslySetInnerHTML={{__html: renderSpanBlock('text','me')}}/>
                               <ContactForm callback={handleGetContactForm}/>
                            </div>
                            </>
                    }

                </div>
            </Container>
        </>
}

export default ContactPage