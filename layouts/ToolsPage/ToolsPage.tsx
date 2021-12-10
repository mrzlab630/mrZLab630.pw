/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-12-08
 * Time: 11:30
 * About:
 *
 */
import {IToolsPage} from './interface'
import {NextPage} from "next"
import {Notification} from "../../components/Notification"
import Container from "../../components/Container"
import classes from "./ToolsPage.module.scss"
import ProgressBar from "../../components/ProgressBar/ProgressBar"
import {useEffect, useState} from "react"
import {TINotificationType} from "../../components/Notification/interface"
import {IContainerNavigation, TContainerPage} from "../../components/Container/interface"
import Router from "next/router"


const ToolsPage: NextPage<IToolsPage> = ({list,error}) => {

    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [showAlert,setShowAlert] = useState<boolean>(false)
    const [alertType,setAlertType] = useState<TINotificationType>('success')
    const [alertMessage,setAlertMessage] = useState<string|undefined>(undefined)

    const [navigation, setNavigation] = useState<IContainerNavigation>({
        down:'about',
        downRight:'contacts',
        upRight:'logo'
    })

    useEffect(() =>{

        setShowAlert(Boolean(error))
        setAlertType(error ? 'error' : 'success')
        setAlertMessage(error)

    },[error])


  const handleGetPage = (v:TContainerPage) => setTimeout(() => Router.push( `/${navigation[v] || ''}`), 800)


    const renderPage = Array.isArray(list) ? list.map((itm,idx) => <div
            key={`renderPage-${idx}`}
            className={classes.listBlock}
        >
            <div
                className={classes.image}
            >
                <img src={itm.image}/>

            </div>
            <div className={classes.data}>
                <h2 className={`title`}>{itm.title}</h2>
                <h3>
                    <a
                        className={'link'}
                        target={'_blank'}
                        href={itm.link}>{
                            itm.link.replace(/(^\w+:|^)\/\//, '')
                        }</a>
                </h3>
                <div className={`subText`}>
                    {
                        itm.content
                    }
                </div>
            </div>
        </div>
    ) : <></>





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
            <div className={classes.ToolsPage}>
                {
                    isLoading ? <ProgressBar />
                        : <div className={classes.list}>
                        <h1 className={classes.title}><span>web</span><span>Tools</span></h1>
                            {renderPage}
                    </div>
                }
            </div>
        </Container>
    </>
}

export default ToolsPage