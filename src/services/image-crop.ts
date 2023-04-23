import noImage from '../assets/no-image.webp'


export const getCroppedImgUrl =  (url:string) => {

   if(!url) return noImage;
   

   return url.indexOf('media/') > -1 ? url = url.replace('media/', 'media/crop/600/400/') : url = url;

}