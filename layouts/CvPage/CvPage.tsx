/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2022-03-29
 * Time: 10:28
 * About:
 *
 */
import {FC, useEffect, useState} from "react"
import {
    ICvPage,
    IDefaultParams,
    IEducation,
    IExperience,
    ImediaLinks,
    IPortfolio,
    ISkills,
    IUserContact
} from './interface'
import classes from "./CvPage.module.scss"
import {Notification} from "../../components/Notification"
import ProgressBar from "../../components/ProgressBar/ProgressBar"
import Container from "../../components/Container"
import {TINotificationType} from "../../components/Notification/interface"
import {IContainerNavigation, TContainerPage} from "../../components/Container/interface"
import Router from "next/router";
import Rating from "../../components/Rating/Rating"
import Carousel from "../../components/Carousel/Carousel"
import {ICarouselItm} from "../../components/Carousel/interface"

import TelegramIco from '../../assets/svg/paper-plane.svg'
import GlobusIcon from '../../assets/svg/globus.svg'
import PinIcon from '../../assets/svg/pin.svg'
import EmailIcon from '../../assets/svg/email.svg'

import Button from "../../components/Button"
import GithubSvg from "../../assets/svg/github.svg"
import UpworkSvg from "../../assets/svg/upwork.svg"
import LinkedinSvg from "../../assets/svg/linkedin.svg"
import DefaultLinkSvg from "../../assets/svg/logo_Z.svg"








const CvPage: FC<ICvPage> = ({error,user}) => {

    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [showAlert,setShowAlert] = useState<boolean>(false)
    const [alertType,setAlertType] = useState<TINotificationType>('success')
    const [alertMessage,setAlertMessage] = useState<string|undefined>(undefined)
    const [navigation, setNavigation] = useState<IContainerNavigation>({
        down:'tools',
        downRight:'contacts',
        upRight:'logo'
    })

    const [usrName, setUserName] = useState<string| undefined>(undefined)
    const [usrPic, setUserPic] = useState<string>('/static/imgs/user_pic.png')
    const [usrPosition, setUserPosition] = useState<string| undefined>(undefined)
    const [usrAbout, setUserAbout] = useState<IDefaultParams|undefined>(undefined)
    const [usrContact, setUserContact] = useState<IUserContact|undefined>(undefined)
    const [showEmail, setEmail] = useState<boolean>(false)
    const [usrLoc, setUsrLoc] = useState<IDefaultParams| undefined>(undefined)
    const [usrMediaLinks, setUsrMediaLinks] = useState<ImediaLinks| undefined>(undefined)

    const [usrEducation, setUsrEducation] = useState<IEducation| undefined>(undefined)
    const [usrExperience, setUsrExperience] = useState<IEducation | undefined>(undefined)

    const [usrSkills, setUsrSkills] = useState<ISkills[]| undefined>(undefined)
    const [usrPortfolio, setUsrPortfolio] = useState<IPortfolio[]| undefined>(undefined)




    useEffect(() =>{
        if(!user){
            return
        }

        const {
            name,
            pic,
            position,
            contact,
            showContactForm,
            mediaLinks,
            location,
            education,
            about,
            skills,
            experience,
            portfolio
        } = user

        setUserName(name)
        setUserPic(pic ?? '/static/imgs/user_pic.png')
        setUserPosition(position)
        setUserAbout(about)
        setUserContact(contact)
        setEmail(Boolean(showContactForm))
        setUsrLoc(location)
        setUsrMediaLinks(mediaLinks)
        setUsrEducation(education)
        setUsrSkills(skills)
        setUsrExperience(experience)
        setUsrPortfolio(portfolio)


    },[user])

    useEffect(() =>{

        setShowAlert(Boolean(error))
        setAlertType(error ? 'error' : 'success')
        setAlertMessage(error)

    },[error])

    const handleGetPage = (v:TContainerPage) => setTimeout(() => Router.push(`/${navigation[v]}`), 800)

    const handleClickEmail = () => handleGetPage('downRight')

    const handleClickLinkOut = (link:string) => () =>   Router.push(link)

    const handleClickPortfolio = (v:number) =>{
        console.log({v})
    }


    const renderUsrPic = <div className={classes.usrContactDataItem}>
                            <div className={classes.iconsWrap}></div>
                            <div className={classes.userPic}>
                                <img src={usrPic} />
                            </div>
                        </div>

    const renderContact = <div className={classes.usrContactDataItem}>
        <div className={classes.iconsWrap}>
            <TelegramIco className={classes.usrContactIcon}/>
        </div>
        <div className={classes.usrContactData}>
            <h3>
                {
                usrContact?.type
                }
            </h3>
            <p><a href={usrContact?.link} target={'_parent'}>{usrContact?.lable}</a></p>
        </div>
    </div>

    const renderEmail = showEmail && <div className={classes.usrContactDataItem}>
        <div className={classes.iconsWrap}>
            <EmailIcon className={classes.usrContactIcon}/>
        </div>
        <div className={classes.usrContactData}>
            <h3>email</h3>
            <Button
                name={'text me'}
                variant={'contained'}
                callback={handleClickEmail}
            />
        </div>
    </div>

    const renderMediaLinks = usrMediaLinks?.value && Array.isArray(usrMediaLinks?.value) ? usrMediaLinks?.value.map((itm,idx) =>{


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


        return <li key={`renderMediaLinks-${idx}`}>
            <a href={itm} target={'_parent'}>
                <Icon className={classes.usrContactSSIcon}/>
            </a>
        </li>

    }) : undefined

    const renderLoc = <div className={classes.usrContactDataItem}>
        <div className={classes.iconsWrap}>
            <PinIcon className={classes.usrContactIcon}/>
        </div>
        <div className={classes.usrContactData}>
            <h3>
                {
                usrLoc?.lable
                }
            </h3>
            <p>
                {
                usrLoc?.value
                }
            </p>
        </div>
    </div>

    const renderSkills = usrSkills && Array.isArray(usrSkills) ? usrSkills.map((itm,idx) =>{

        const {lable,value} = itm

        const renderVl = value.map((itmV,idxV) => <div
            key={`renderVl-${idxV}`}
            className={classes.skillRating}
        >
            <div className={classes.titleSklRtng}>{itmV.lable}</div><Rating value={itmV.level}/>
        </div>)

        return <><div
            key={`renderSkills-${idx}`}
            className={classes.usrSkillsItm}>
            <h2>{lable}</h2>
            {
                renderVl
            }
        </div>
            <div className={classes.separator} />
        </>


    }) : undefined

    const renderEducation = (arr:IExperience[]) => arr && Array.isArray(arr) ? arr.map((itm,idx) =>{

        const {
            title,
            subTitle,
            date,
            value
        } = itm

        return <div
            key={`renderEducation-${idx}`}
            className={classes.myWayExperienceItm}
        >
            <div className={classes.myWayExperienceItmRow}>
                <div className={classes.myWayExperienceJobTitle}>
                    <div className={classes.sep}/>
                    <h3>{title}</h3>
                    <h5>{subTitle}</h5>
                </div>
                <div  className={classes.myWayExperienceJobTime}>
                    {date}
                </div>
            </div>
            <div   className={classes.myWayExperienceItmRow}>
                <p dangerouslySetInnerHTML={{__html:  value ?? ''}} />
            </div>

        </div>

    }) : undefined





    const renderPage = <div className={classes.wrap}><div className={classes.cv}>

        <div className={`${classes.col} ${classes.colLeft}`}>

            <div className={classes.usrContact}>

                {
                    renderUsrPic
                }

                {
                    renderContact
                }

                {
                    renderEmail
                }

                <div className={classes.usrContactDataItem}>
                    <div className={classes.iconsWrap}>
                        <GlobusIcon  className={classes.usrContactIcon}/>
                    </div>
                    <div className={classes.usrContactData}>
                        <h3>{usrMediaLinks?.lable}</h3>
                        <ul>
                        {
                            renderMediaLinks
                        }
                        </ul>
                    </div>
                </div>

                {
                    renderLoc
                }

            </div>

            <div className={classes.usrSkills}>

                <div className={classes.usrSkillsItm}>
                    {
                        renderSkills
                    }
                </div>
                <div className={classes.usrSkillsItm}>
                    <div className={classes.myWayExperience}>
                        <h2>{usrEducation?.lable}</h2>
                    {
                        usrEducation &&  renderEducation(usrEducation?.value)
                    }
                    </div>
                </div>
            </div>

        </div>

        <div className={`${classes.col} ${classes.colRight}`}>
            {
                usrName && usrPosition
                    ? <div  className={classes.titleWrap}>
                        <div className={classes.usrName}>
                            <h2>{usrName}</h2>
                        </div>
                        <div  className={classes.usrPosition}>
                            {usrPosition}
                        </div>
                    </div>
                    : undefined
            }
            <div className={classes.myWay}>

                <div className={classes.myWayAboutMe}>
                    <h2>
                        {
                        usrAbout?.lable
                        }
                    </h2>
                    <p dangerouslySetInnerHTML={{__html: usrAbout?.value ?? ''}} />
                </div>
                {
                    usrPortfolio && Array.isArray(usrPortfolio) &&<>
                        <div className={classes.separator} />
                        <div className={classes.myWayPortfolio}>
                            <h2>portfolio</h2>
                            <Carousel
                                itms={usrPortfolio?.map(itm => ({title:itm?.title,about:itm?.about,}))}
                                onClick={handleClickPortfolio}
                            />
                        </div>
                    </>
                }

                <div className={classes.separator} />

                <div className={classes.myWayExperience}>
                    <h2>{usrExperience?.lable}</h2>
                    {
                        usrExperience &&  renderEducation(usrExperience?.value)
                    }
                </div>
            </div>



        </div>
    </div>
    <div className={classes.wrapFooter}></div>
        </div>





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
            <div className={classes.CvPage}>
                {
                    isLoading ? <ProgressBar />  : renderPage
                }
            </div>
        </Container>

    </>
}

export default CvPage