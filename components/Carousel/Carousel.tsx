/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2022-04-04
 * Time: 10:40
 * About:
 *
 */
import React, {FC, useEffect, useState} from "react"
import {ICarousel, ICarouselItm} from './interface'
import classes from "./Carousel.module.scss";
import Button from "../Button";
import NextIconSvg from '../../assets/svg/next.svg'
import PageMotionWrap from "../PageMotionWrap";
import {IPageMotionWrap} from "../PageMotionWrap/interface";
import delay from "../../utils/delay";


const Carousel: FC<ICarousel> = ({itms, onClick}) => {


    const [showItm, setShowItm] = useState<number>(0)
    const [toggle, setToggle] = useState<boolean>(false)

    const [duration] = useState<number>(.8)
    const [animation] = useState<IPageMotionWrap['animation']>({
        visible: { opacity: 1, x: 0, y: 0 },
        hidden: { opacity: 0, x: 0, y: 0}
    })


    useEffect(()=>{

        if(toggle){
            setTimeout(() =>  setToggle(prev => !prev), 800)
        }

    },[showItm])



    const handleClickItm = () => {
      if(!onClick){
          return
      }
        onClick(showItm)
    }


    const renderItm = ({title, about}:ICarouselItm) =>  <div
            className={classes.carouselItm}
            onClick={handleClickItm}
        >
            <h3>{title}</h3>
            <p>{about}</p>
        </div>


    const handleClickNav = (p:number) => async () => {
        setToggle(prev => !prev)
        await delay(800)

        setShowItm(prev => p + prev < 1 ? 0 : p + prev > itms.length - 1 ? 0 : p + prev)
    }


    return   <div className={classes.Carousel}>

        <div className={classes.nav}>

            <Button
                callback={handleClickNav(-1)}
                disabled={showItm < 1}
            >
                <NextIconSvg className={`${classes.navIcon} ${classes.navIconPrev}`}/>
            </Button>

            <Button
                callback={handleClickNav(1)}
                disabled={showItm > itms.length - 2}
            >
                <NextIconSvg className={classes.navIcon}/>
            </Button>

        </div>

        <PageMotionWrap
            {...{toggle,animation,duration}}
        >
            <div className={classes.inner}>
                {
                    renderItm(itms[showItm])
                }
            </div>
            <div className={classes.pagePag}>
                    <h3>{
                        showItm + 1
                    }/{
                        itms.length
                    }</h3>
                </div>
        </PageMotionWrap>


    </div>
}

export default Carousel