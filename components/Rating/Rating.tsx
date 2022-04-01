/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2022-04-01
 * Time: 12:32
 * About:
 *
 */
import {FC} from "react"
import {IRating} from './interface'
import  classes from './Rating.module.scss'


const Rating: FC<IRating> = ({value}) =>  <div className={classes.Rating}>
        <div
            className={classes.progress}
            style={{
                width:`${value}%`
            }}
        />
    </div>


export default Rating