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
import {ICvPage} from './interface'
import classes from "./CvPage.module.scss"
import {Notification} from "../../components/Notification";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {renderSpanBlock} from "../../utils";
import Container from "../../components/Container";
import {TINotificationType} from "../../components/Notification/interface";
import {IContainerNavigation, TContainerPage} from "../../components/Container/interface";
import Router from "next/router";
import Rating from "../../components/Rating/Rating";








const CvPage: FC<ICvPage> = ({error}) => {

    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [showAlert,setShowAlert] = useState<boolean>(false)
    const [alertType,setAlertType] = useState<TINotificationType>('success')
    const [alertMessage,setAlertMessage] = useState<string|undefined>(undefined)
    const [navigation, setNavigation] = useState<IContainerNavigation>({
        down:'tools',
        downRight:'contacts',
        upRight:'logo'
    })

    const [content, setContent] = useState<string>('uuu')



    useEffect(() =>{

        setShowAlert(Boolean(error))
        setAlertType(error ? 'error' : 'success')
        setAlertMessage(error)

    },[error])

    const handleGetPage = (v:TContainerPage) => setTimeout(() => Router.push( `/${navigation[v] || ''}`), 800)


    const renderPage = <div className={classes.wrap}><div className={classes.cv}>

        <div className={`${classes.col} ${classes.colLeft}`}>

            <div className={classes.usrContact}>

                    <div className={classes.usrContactDataItem}>
                        <div className={classes.iconsWrap}></div>
                        <div className={classes.userPic}>
                            <img src={'/static/imgs/user_pic.png'} />
                        </div>
                    </div>


                    <div className={classes.usrContactDataItem}>
                        <div className={classes.iconsWrap}>i</div>
                        <div className={classes.usrContactData}>
                            <h3>telegram</h3>
                            <p>@mrzlab630</p>
                        </div>
                    </div>

                    <div className={classes.usrContactDataItem}>
                        <div className={classes.iconsWrap}>i</div>
                        <div className={classes.usrContactData}>
                            <h3>email</h3>
                            <p>em@mail.em</p>
                        </div>
                    </div>

                    <div className={classes.usrContactDataItem}>
                        <div className={classes.iconsWrap}>i</div>
                        <div className={classes.usrContactData}>
                            <h3>web</h3>
                            <p>mrzlab630.pw</p>
                        </div>
                    </div>

                    <div className={classes.usrContactDataItem}>
                        <div className={classes.iconsWrap}>i</div>
                        <div className={classes.usrContactData}>
                            <h3>area</h3>
                            <p>home, home 33/33, 700700</p>
                        </div>
                    </div>

            </div>

            <div className={classes.usrSkills}>

                <div className={classes.usrSkillsItm}>
                    <h2>skills</h2>

                    <div className={classes.skillRating}>
                        <div className={classes.titleSklRtng}>JavaScript</div><Rating value={98}/>
                    </div>

                    <div className={classes.skillRating}>
                        <div className={classes.titleSklRtng}>TypeScript</div><Rating value={68}/>
                    </div>

                    <div className={classes.skillRating}>
                        <div className={classes.titleSklRtng}>Python</div><Rating value={18}/>
                    </div>

                    <div className={classes.skillRating}>
                        <div className={classes.titleSklRtng}>PHP</div><Rating value={38}/>
                    </div>

                    <div className={classes.skillRating}>
                        <div className={classes.titleSklRtng}>web3</div><Rating value={88}/>
                    </div>

                </div>

                <div className={classes.separator} />

                <div className={classes.usrSkillsItm}>
                    <h2>languages</h2>

                    <div className={classes.skillRating}>
                        <div className={classes.titleSklRtng}>English</div><Rating value={78}/>
                    </div>

                    <div className={classes.skillRating}>
                        <div className={classes.titleSklRtng}>Russian</div><Rating value={97}/>
                    </div>

                </div>

                <div className={classes.separator} />

                <div className={classes.usrSkillsItm}>
                    <h2>education</h2>

                </div>


            </div>




        </div>

        <div className={`${classes.col} ${classes.colRight}`}>

            <div  className={classes.titleWrap}>
                <div className={classes.usrName}>
                    <h2>Zadolya Stepan</h2>
                </div>
                <div  className={classes.usrPosition}>
                    web developer
                </div>
            </div>


            <div className={classes.myWay}>

                <div className={classes.myWayAboutMe}>
                    <h2>about me</h2>
                    <p>
                        some data
                    </p>
                </div>

                <div className={classes.separator} />

                <div className={classes.myWayExperience}>
                    <h2>experience</h2>

                    <div  className={classes.myWayExperienceItm}>

                        <div className={classes.myWayExperienceItmRow}>
                            <div className={classes.myWayExperienceJobTitle}>
                                <div className={classes.sep}/>
                                <h3>some job</h3>
                                <h5>llc cool</h5>
                            </div>
                            <div  className={classes.myWayExperienceJobTime}>
                                    2000 - 2010
                            </div>
                        </div>
                        <div   className={classes.myWayExperienceItmRow}>
                            <p>
                                Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.

                                Maecenas malesuada. Pellentesque auctor neque nec urna.
                            </p>
                        </div>



                    </div>

                    <div  className={classes.myWayExperienceItm}>

                        <div className={classes.myWayExperienceItmRow}>
                            <div className={classes.myWayExperienceJobTitle}>
                                <div className={classes.sep}/>
                                <h3>some job</h3>
                                <h5>llc cool</h5>
                            </div>
                            <div  className={classes.myWayExperienceJobTime}>
                                2000 - 2010
                            </div>
                        </div>
                        <div   className={classes.myWayExperienceItmRow}>
                            <p>
                                Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.

                                Maecenas malesuada. Pellentesque auctor neque nec urna.
                            </p>
                        </div>



                    </div>
                    <div  className={classes.myWayExperienceItm}>

                        <div className={classes.myWayExperienceItmRow}>
                            <div className={classes.myWayExperienceJobTitle}>
                                <div className={classes.sep}/>
                                <h3>some job</h3>
                                <h5>llc cool</h5>
                            </div>
                            <div  className={classes.myWayExperienceJobTime}>
                                2000 - 2010
                            </div>
                        </div>
                        <div   className={classes.myWayExperienceItmRow}>
                            <p>
                                Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.

                                Maecenas malesuada. Pellentesque auctor neque nec urna.
                            </p>
                        </div>



                    </div>

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
                    isLoading ? <ProgressBar />   : renderPage
                }
            </div>
        </Container>

    </>
}

export default CvPage