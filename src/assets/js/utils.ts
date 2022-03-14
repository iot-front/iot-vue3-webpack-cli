// 通过时间戳获取时间格式
export const changetime = (time: Date, type: Number | void) => {
  const d = new Date(time)
  const y = d.getFullYear()
  const m = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
  const D = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
  const h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
  const M = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
  const s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
  switch (type) {
    case 1:
      return y + '-' + m + '-' + D + ' ' + h + ':' + M + ':' + s
    case 2:
      return y + '-' + m + '-' + D
    case 3:
      return y + '年' + m + '月' + D + '日  ' + h + ':' + M
    default:
      return y + '-' + m + '-' + D + ' ' + h + ':' + M
  }
}
// 去除字符串前后空格
export const trim = (str: any, type?: number) => {
  // type:1-只去除末尾空格
  if (!(typeof str === 'string')) {
    return str
  }
  if (!str) {
    return ''
  }
  return type === 1
    ? str
      .toString()
      .replace(/(\s*$)/g, '')
      .replace(/(↵$)/g, '')
    : str.toString().replace(/(^\s*)|(\s*$)/g, '')
}
// 浅剔除对象的空属性
export const filterParams = (obj: any) => {
  const newObj: any = {}
  for (const key in obj) {
    if (obj[key] || obj[key] === 0) {
      if (trim(obj[key]) || obj[key] === 0) {
        newObj[key] = trim(obj[key])
      }
    }
  }
  return newObj
}
export const formRuleError = () => {
  // form表单校验-失败后自动获取焦点
  setTimeout(() => {
    const isError: any | null = document.getElementsByClassName('is-error')[0]
    if (isError.querySelector('input')) {
      isError.querySelector('input').focus()
    } else if (isError.querySelector('textarea')) {
      isError.querySelector('textarea').focus()
    }
  }, 100)
}
