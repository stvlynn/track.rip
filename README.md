# track.rip

track.rip 是一个去除链接的追踪参数的在线工具。

demo 地址：https://track.rip/

## 介绍

通过 track.rip 可以去除常见链接的追踪参数，例如：

- 小红书（短链接暂时有问题）

- 微信公众号

- 网易云音乐

- 哔哩哔哩（短链接暂时有问题）

- 其他常见链接（包含?的）

- 暂不支持YouTube等

## 使用方法

### 在网页使用

1. 打开 track.rip

2. 输入需要去除追踪参数的链接
![](https://cdn.statically.io/gh/stvlynn/cloudimg@master/blog/2310/截屏2024-08-05-16.56.03.3r1rx81dwkc0.webp)

3. 点击处理

4. 点击复制链接
![](https://cdn.statically.io/gh/stvlynn/cloudimg@master/blog/2310/截屏2024-08-05-16.54.49.699wmfxsnsg0.webp)

### 添加URL前缀使用

直接在URL前添加`track.rip/`即可。例如：

- https://track.rip/https://www.bilibili.com/video/BV1v14y1z7MV/?share_source=copy_web&vd_source=114514

## 部署

### Zeabur

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/H64N92?referralCode=stvlynn)

### Cloudflare Pages

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/stvlynn/track.rip)

### Vercel

暂不支持Vercel，因为未知原因会白屏，请大佬多多提交pr😭

## ‼️待实现内容

- 部署到Vercel

- 读取复制口令的链接

- 小红书短链接（xhslink）、B站（b23.tv）短链接的处理

## LICENSE

[GNU General Public License v3.0](LICENSE)

## 感谢

- 感谢 [@mitian233](https://github.com/mitian233) 提供了修改建议以及pr ~~对不起我后来的git push --force覆盖了你的pr记录😭~~

- 感谢 [@leez233](https://github.com/leez233) ，本项目参考了[tracker-remover](https://tr.lizi.su/)链接处理部分的代码

## 贡献

<a href="https://github.com/OWNER/REPO/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=stvlynn/track.rip" />
</a>
