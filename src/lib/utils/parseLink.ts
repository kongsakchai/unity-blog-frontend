export const parseHttp = (url:string)=>{
    if(url.includes('httpS://')){
        return url;
    }
    return `httpS://${url}`
}