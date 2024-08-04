import { extractUrlFromText, resolveShortUrl } from './url-utils'

const processUrlBasedOnDomain = async (url) => {
  let finalUrl = url

  // 处理小红书及其短链
  if (url.includes('xiaohongshu.com') || url.includes('xhslink.com')) {
    finalUrl = await processXiaoHongShu(url)
  }
  // 处理微信公众号
  else if (url.includes('mp.weixin.qq.com')) {
    finalUrl = await processWeiXin(url)
  }
  // 处理网易云音乐及其短链
  else if (url.includes('music.163.com') || url.includes('y.qq.com')) {
    finalUrl = await processNetEaseMusic(url)
  }
  // 处理 B 站及其短链
  else if (url.includes('bilibili.com')) {
    finalUrl = await processBiliBili(url)
  }
  // 处理知乎
  else if (url.includes('zhihu.com')) {
    finalUrl = await processZhihu(url)
  }
  // 其他域名采用默认处理逻辑（清空第一个?后的查询参数）
  else {
    finalUrl = await processDefaultUrl(url)
  }

  return finalUrl
}

async function processXiaoHongShu(url) {
  let extractedUrl = await extractUrlFromText(url)
  return extractedUrl
}

async function processWeiXin(url) {
  let extractedUrl = await extractUrlFromText(url)
  return extractedUrl
}

async function processNetEaseMusic(url) {
  let extractedUrl = await extractUrlFromText(url)
  return extractedUrl
}

async function processBiliBili(url) {
  let extractedUrl = await extractUrlFromText(url)
  let cleanUrl = new URL(extractedUrl)
  cleanUrl.search = ''
  return cleanUrl.toString()
}

async function processZhihu(url) {
  let extractedUrl = await extractUrlFromText(url)
  return extractedUrl
}

async function processDefaultUrl(url) {
  let extractedUrl = new URL(url)
  extractedUrl.search = ''
  return extractedUrl.toString()
}

export { processUrlBasedOnDomain }