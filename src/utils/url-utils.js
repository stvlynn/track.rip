export function extractUrlFromText(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const matches = text.match(urlRegex)
    return matches ? matches[0] : null
  }
  
  export async function resolveShortUrl(url) {
    try {
      const response = await fetch(url, {
        method: 'HEAD',
        redirect: 'follow'
      })
      return response.url
    } catch (error) {
      throw new Error('无法解析短链接')
    }
  }