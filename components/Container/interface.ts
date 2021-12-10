/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-09-17
 * Time: 12:06
 * About:
 *
 */
export type TContainerPage = 'main'|'upLeft'|'up'|'upRight'|'left'|'right'|'downLeft'|'down'|'downRight'|'logo'




export type IContainerNavigation = {
    [T in TContainerPage]?: string;
};

export interface IContainer{
    navigation?:IContainerNavigation,
    callback?:(v:TContainerPage)=>void
}