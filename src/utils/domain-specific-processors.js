export async function processUrlBasedOnDomain(url) {
    const parsedUrl = new URL(url)
    const hostname = parsedUrl.hostname
  
    if (hostname.includes('xiaohongshu') || hostname.includes('xhslink')) {
      // 小红书处理逻辑
      parsedUrl.search = ''
      parsedUrl.searchParams.set('xsec_token', 'CB7qo0pm---5VGlM5e3nteJTbaXUIBIzWehQTYSqJKOR0=')
      return parsedUrl.toString()
    } else if (hostname.includes('weixin')) {
      // 微信处理逻辑，保留到 &chksm 前的内容
      const chksmIndex = url.indexOf('&chksm')
      if (chksmIndex !== -1) {
        return url.substring(0, chksmIndex)
      } else {
        return url // 如果没有 &chksm，保留整个URL
      }
    } else if (hostname.includes('music.163.com')) {
      // 网易云音乐处理逻辑，删除 &userid 及其后面的部分
      const useridIndex = url.indexOf('&userid')
      if (useridIndex !== -1) {
        return url.substring(0, useridIndex)
      } else {
        return url // 如果没有 &userid，保留整个URL
      }
    } else {
      // 默认处理逻辑，清空查询参数
      parsedUrl.search = ''
      return parsedUrl.toString()
    }
  }