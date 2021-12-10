/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-09-17
 * Time: 12:06
 * About:
 *
 */
import {FC, useEffect, useState} from "react"
import {IContainer, TContainerPage} from './interface'
import classes from './Container.module.scss'
import Button from "../Button"
import PageMotionWrap from "../PageMotionWrap";
import {IPageMotionWrap} from "../PageMotionWrap/interface";
import LogoSvg from '../../assets/svg/logo_Z.svg'


const Container: FC<IContainer> = ({
                                    navigation,
                                    children,
                                    callback

}) => {

    const [toggle, setToggle] = useState<boolean>(false)
    const [animation, setAnimation] = useState<IPageMotionWrap['animation']>({
        visible: { opacity: 1, x: 0, y: 0 },
        hidden: { opacity: 0, x: 0, y: -50 }
    })

    useEffect(()=>{

        if(toggle){
            setTimeout(() =>  setToggle(prev => !prev), 800)
        }

    },[children])


    const renderNavBtn = (pos:TContainerPage) => {


        const itm = navigation ? navigation[pos] : false

        if(!itm){
            return
        }

        let d
        let lnk:TContainerPage


        switch (itm) {
            case 'logo':
                d = <LogoSvg className={'logo'}/>
                lnk = 'main'
                break

            default:
                d = <span className={classes.navButton}>{itm}</span>
                lnk = pos
        }


        return <Button
            variant={'text'}
            size={'large'}
            callback={handleClickNav(lnk)}
        >
            {
                d
            }
        </Button>
    }


    const handleClickNav = (nav:TContainerPage) => () =>{

        setToggle(prev => !prev)

        if(typeof callback !== "function"){
            return
        }
        setTimeout(() =>  callback(nav), 2000)
    }



    return <div className={classes.Container}>
        <header  className={classes.header}>
            <div
            className={classes.hBlock}
            >
                <div>
                    {
                        renderNavBtn('upLeft')
                    }
                </div>
                <div>
                    {
                        renderNavBtn('up')
                    }
                </div>
                <div>
                    {
                     renderNavBtn('upRight')
                    }
                </div>

            </div>
        </header>

        <main className={classes.main}>

            <div
                className={classes.hBlock}
            >

                <div className={classes.turnLeft}>
                    {
                        renderNavBtn('left')
                    }
                </div>
                <div>
                    <PageMotionWrap
                        duration={1.8}
                        {...{toggle,animation}}
                    >
                        {
                            children
                        }
                    </PageMotionWrap>
                </div>
                <div  className={classes.turnRight}>
                    {
                        renderNavBtn('right')
                    }
                </div>

            </div>



        </main>
                 <footer className={classes.footer}>
                     <PageMotionWrap
                         duration={3.8}
                         {...{toggle,animation}}
                     >
                     <div
                         className={classes.hBlock}
                     >

                         <div>
                             {
                                 renderNavBtn('downLeft')
                             }
                         </div>
                         <div>
                             {
                                 renderNavBtn('down')
                             }
                         </div>
                         <div>
                             {
                                 renderNavBtn('downRight')
                             }
                         </div>
                     </div>
                     </PageMotionWrap>
            </footer>

    </div>
}

export default Container