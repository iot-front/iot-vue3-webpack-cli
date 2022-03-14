import Cookies from 'js-cookie'
export const getLanguage = () => Cookies.get('language')
export const setLanguage = (language: string) => Cookies.set('language', language)
