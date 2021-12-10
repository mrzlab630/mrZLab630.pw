/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-12-07
 * Time: 17:20
 * About:
 *
 */
import {FC} from "react"
import {IRenderLogo} from './interface'
import classes from  './RenderLogo.module.scss'



const RenderLogo:FC<IRenderLogo> = () =>  <div className={classes.RenderLogo}>
                                                <h1 className={`title ${classes.title}`}>mrZL@b630</h1>
                                                <div className={classes.subText}>
                                                    <span>web</span><span>dev</span>
                                                </div>
                                            </div>


export default RenderLogo

