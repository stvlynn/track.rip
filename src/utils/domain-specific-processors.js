import { extractUrlFromText, resolveShortUrl } from './url-utils'

const processUrlBasedOnDomain = async (input) => {
  let url = extractUrlFromText(input)
  if (!url) {
    throw new Error('输入的字符串中不包含有效的 URL')
  }

  let finalUrl = url

  // 处理 x.com 链接
  if (url.includes('x.com')) {
    const parsedUrl = new URL(url)
    parsedUrl.hostname = 'fixupx.com'
    finalUrl = parsedUrl.toString()
  }
  // 处理小红书及其短链
  else if (url.includes('xiaohongshu.com') || url.includes('xhslink.com')) {
    const parsedUrl = new URL(url)
    parsedUrl.search = ''
    parsedUrl.searchParams.set('xsec_token', 'CB7qo0pm---5VGlM5e3nteJTbaXUIBIzWehQTYSqJKOR0=')
    finalUrl = parsedUrl.toString()
  }
  // 处理微信公众号
  else if (url.includes('weixin.qq.com')) {
    const chksmIndex = url.indexOf('&chksm')
    if (chksmIndex !== -1) {
      finalUrl = url.substring(0, chksmIndex)
    }
  }
  // 处理网易云音乐及其短链
  else if (url.includes('music.163.com') || url.includes('y.qq.com')) {
    const useridIndex = url.indexOf('&')
    if (useridIndex !== -1) {
      finalUrl = url.substring(0, useridIndex)
    }
  }
  // 处理 163cn.tv 短链接
  else if (url.includes('163cn.tv')) {
    const resolvedUrl = await resolveShortUrl(url)
    const firstAmpersandIndex = resolvedUrl.indexOf('&')
    if (firstAmpersandIndex !== -1) {
      finalUrl = resolvedUrl.substring(0, firstAmpersandIndex)
    } else {
      finalUrl = resolvedUrl
    }
  }
  // 其他域名采用默认处理逻辑（清空查询参数）
  else {
    const parsedUrl = new URL(url)
    parsedUrl.search = ''
    finalUrl = parsedUrl.toString()
  }

  return finalUrl
}

export { processUrlBasedOnDomain }
