/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2022-04-04
 * Time: 10:40
 * About:
 *
 */


export interface ICarouselItm{
    title:string,
    about:string,
}

export interface ICarousel{
    itms:ICarouselItm[],
    onClick?:(v:number) => void
}