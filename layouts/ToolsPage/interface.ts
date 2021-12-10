/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-12-08
 * Time: 11:31
 * About:
 *
 */

export interface IToolsPageList{
    image:string,
    link:string,
    title:string,
    content:string
}

export interface IToolsPage {
    list:IToolsPageList[],
    error?:string
}