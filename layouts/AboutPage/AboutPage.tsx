/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-12-08
 * Time: 15:19
 * About:
 *
 */
import {FC, useEffect, useState} from "react"
import {IAboutPage} from './interface'
import classes from "./AboutPage.module.scss"
import {TINotificationType} from "../../components/Notification/interface"
import {IContainerNavigation, TContainerPage} from "../../components/Container/interface"
import Router from "next/router"
import {Notification} from "../../components/Notification"
import Container from "../../components/Container"
import ProgressBar from "../../components/ProgressBar/ProgressBar"
import {renderSpanBlock} from '../../utils'



const AboutPage: FC<IAboutPage> = ({aboutMe,error}) => {



    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [showAlert,setShowAlert] = useState<boolean>(false)
    const [alertType,setAlertType] = useState<TINotificationType>('success')
    const [alertMessage,setAlertMessage] = useState<string|undefined>(undefined)
    const [navigation, setNavigation] = useState<IContainerNavigation>({
        down:'tools',
        downRight:'contacts',
        upRight:'logo'
    })

    const [content, setContent] = useState<string>('')


    useEffect(() =>aboutMe ? setContent(aboutMe) : undefined,[aboutMe])

    useEffect(() =>{

        setShowAlert(Boolean(error))
        setAlertType(error ? 'error' : 'success')
        setAlertMessage(error)

    },[error])


    const handleGetPage = (v:TContainerPage) => setTimeout(() => Router.push( `/${navigation[v] || ''}`), 800)



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
            <div className={classes.AboutPage}>
                {
                    isLoading ? <ProgressBar />
                        : <>
                            <h1 className={classes.title} dangerouslySetInnerHTML={{__html: renderSpanBlock('about','me')}}/>
                            <div className={classes.content} dangerouslySetInnerHTML={{__html: content}} />
                        </>
                }
            </div>
        </Container>
    </>
}

export default AboutPage