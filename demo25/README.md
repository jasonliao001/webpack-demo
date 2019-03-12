#### cdn 加速

    cdn 其实就是速度更快的HTTP服务，会启用很长的缓存。

#### 业界开启 CDN 加速常用从做法：

    - 对于HTML文件，将HTML放到自己的服务器，同时关闭自己服务器上的缓存，自己服务器上只提供HTML文件和数据接口，
    - 静态js,css,img等文件，开启cdn和缓存，上传到cdn服务器，同时带上[name]_[hash],只要文件内容变化，无论缓存的时间多久，都会发生变化
    - 增加 "dns-prefetch" 预解析域名，减少域名带来的延迟

#### 构建要求

    - 静态资源的导入URL需要变成指向CDN服务的绝对路径，而不是相对于HTML文件的URL
    - 静态资源带上Hash值，防止被缓存
    - 将不同的资源放到不同域名的cnd服务器，防止资源的并行加载被阻塞

#### 为了让不同的资源输出到不同的 CDN

    - output.publicPath 设置javascript的地址
    - css-loader.publicPath 设置css的地址
    - webPlugin.stylePublicPath 设置css文件的地址
