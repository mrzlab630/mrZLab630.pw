/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-12-10
 * Time: 09:43
 * About:
 *
 */

export interface IrenderSpanBlock{
    (one:string,two:string):string
}


const renderSpanBlock:IrenderSpanBlock = (one,two) => `<span class="spanBlock"><span>${one}</span><span>${two}</span></span>`


export default renderSpanBlock