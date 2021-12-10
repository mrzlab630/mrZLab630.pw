/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-09-17
 * Time: 11:55
 * About:
 *
 */
import {ReactNode, useState} from "react"
import {IHomePage} from './interface'
import Container from "../../components/Container"
import classes from './HomePage.module.scss'
import {Notification} from "../../components/Notification"
import {TINotificationType} from "../../components/Notification/interface"
import {NextPage} from "next"
import ProgressBar from "../../components/ProgressBar/ProgressBar"
import {IContainerNavigation, TContainerPage} from "../../components/Container/interface";
import RenderLogo from "../../components/RenderLogo"
import Router from 'next/router'







const HomePage: NextPage<IHomePage> = () => {
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [isVisible,setIsVisible] = useState<boolean>(false)

    const [showAlert,setShowAlert] = useState<boolean>(false)
    const [alertType,setAlertType] = useState<TINotificationType>('success')
    const [alertMessage,setAlertMessage] = useState<string|undefined>(undefined)

    const [main,setMain] = useState<ReactNode>(<RenderLogo/>)


    const [navigation, setNavigation] = useState<IContainerNavigation>({
        downLeft:'about',
        down:'tools',
        downRight:'contacts'
    })

    const handleGetPage = (v:TContainerPage) => setTimeout(() =>   Router.push(`/${navigation[v]}`), 800)



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
                <div className={classes.HomePage}>
                    {
                        isLoading ? <ProgressBar /> : main
                    }
                </div>
            </Container>
        </>
}


export default HomePage