/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-10-14
 * Time: 16:36
 * About:
 *
 */
import {IToolsPageList} from "../layouts/ToolsPage/interface"


export interface IToolsPage {
    list:IToolsPageList[],
    error?:string
}
export interface IHomePage {
    ip?:string,
    userAgent?:string,
    language?:string,
    host?:string,
}