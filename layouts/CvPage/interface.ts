/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2022-03-29
 * Time: 10:29
 * About:
 *
 */

export interface IUserContact{
    type:string,
    link?:string,
    lable:string
}

export interface ImediaLinks{
    lable:string,
    value:string[]
}

export interface IDefaultParams{
    lable?:string,
    value?:string
}

export interface ISkillsValue{
    lable:string,
    level:number
}

export interface ISkills{
    lable?:string,
    value:ISkillsValue[]
}


export interface IExperience{
    title:string,
    subTitle:string,
    date:string,
    value:string
}

export interface IPortfolio{
    images?:string[],
    git?:string,
    url?:string,
    date:string,
    title:string,
    about:string
}

export interface IEducation{
    lable:string,
    value:IExperience[]
}


export interface IUser{
    name:string,
    pic?:string,
    position?:string,
    contact:IUserContact,
    showContactForm?:boolean,
    mediaLinks?:ImediaLinks,
    location:IDefaultParams,
    education?:IEducation,
    about:IDefaultParams,
    skills:ISkills[],
    experience?:IEducation,
    portfolio?:IPortfolio[]
}


export interface ICvPage{
    error?:string,
    user:IUser
}