# @mlz/admin 的公共业务的代码库。

## 安装

```shell
$ npm install @mlz/adminer
```

## 使用

```ts
import { decodePhone } from '@mlz/adminer';
```

## 按需加载

```js
// babel配置

module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@mlz/admin',
        libraryDirectory: 'es',
        // 这里略有不同
        style: false,
      },
      '@mlz/admin',
    ],
  ],
};
```

## 开发

本库开发前，需要先制定 config 文件，这个文件管理着请求地址等诸多必要且敏感的信息。是开发@mlz/adminer 的必须材料。

#### 你可以在根目录建立`/config/${env}.json`文件指定特殊的底层配置：

你也可以从 yuumi 模板项目中的/config 目录复制过来。

##### 我们对\${env}有约定，请参加[env 配置说明]()

```json
// dev.json
{
  "development": {
    "hosts": {
      "open-service": "https://dev-api.google.com/open-service/api/v3",
      "internal-account": "https://dev-api.google.com/nternal-account/api/v3"
    }
  },
  "test": {
    "hosts": {
      "open-service": "https://test-api.google.com/open-service/api/v3",
      "internal-account": "https://test-api.google.com/nternal-account/api/v3"
    }
  },
  "staging": {
    "hosts": {
      "open-service": "https://staging-api.google.com/open-service/api/v3",
      "internal-account": "https://staging-api.google.com/nternal-account/api/v3"
    }
  },
  "production": {
    "hosts": {
      "open-service": "https://api.google.com/open-service/api/v3",
      "internal-account": "https://api.google.com/nternal-account/api/v3"
    }
  }
}
```

## \${env}约定

## 最佳开发实践
