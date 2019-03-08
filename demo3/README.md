#### 如何接入 babel?

- 接入 babel 必须依赖的模块

`npm i -d babel-core babel-loader`

- 根据需要选择不同 plugins 和 Presets

`npm i -d babal-presets-env babel-plugin-transform-runtime`

---

```
{
    "plugins":[
        [
            "tranform-runtime",
            {
                "polyfill": false,
            }
        ]
    ],
    "presets":{
        [
            "env",
            {
                "modules":false
            }
        ],
        "stage-2"
    }
}
```

配置规则如上：

1. plugins 属性告诉 babel 使用哪些插件，插件可以控制如何转换代码，看具体需要怎么配置

2. presets 属性告诉 babel 特性。要转换的源码使用了哪些新

认识 presets，presets 是 ECMAScript 草案组织来组织的，分三大类：

- 已经写入 ECMAScript 标准中的特性，由于每年都有写入，可以细分
  - ES2015 2015 年加入的新特性
  - ES2016 2016 年加入的新特性
  - ES2017 2017 年加入的新特性
  - Env 包含当前所有的 ECMAScript 的新特性
- 被社区提出，可是未被写入 ECMAScript 标准中
  - stage0 美好的想法，不确定是否会加入新特性
  - stage1 值得加入
  - stage2 特性规范被起草
  - stage3 特性定稿，各个厂商和社区在实现中
  - stage4 在接下来的一年会被加入标准
- 用于支持特定应用场景下的语法特性，和 ECMAScript 标准无关，比如`babel-preset-react`用于支持 React 的 jsx 语法
