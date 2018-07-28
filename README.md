# vue-pages

## 简介

> 基于vue-cli修改的构建多页面应用程序。

- 开发多页面应用的脚手架
- 开箱即用
- 命令行生成模板

## 使用

``` bash
# 安装依赖
npm install

# 开启开发模式
npm run dev

# 打包构建
npm run build

# 打包构建并生成报告
npm run build --report

# 生成模板页面
npm run init-page <pageName> ... <pageName>

# 生成模板页面简写
npm run p <pageName> ... <pageName>
```

## 工程目录说明

开发页面放在 ```src/pages``` 目录下，```pages``` 下的目录结构是 ```模块名/页面名```。推荐使用命令行来生成开发页面，命令行会引导你创建正确的目录结构。

> 将应用划分为模块不仅是出于个人实际中的项目需求，而且这样划分能够使得工程目录更加直观清晰。

## 模板的一些说明

```html-webpack-plugin``` 的 ```html``` 模板均是根目录下的 ```inde.html```，所以可以在该文件中针对全局做一些配置。

命令行自动生成的开发页面则是以根目录下的 ```template``` 目录的所有文件作为模板创建的，所以可以根据实际项目需求在这里做一些全局定制。如，引入 ```vuex```。

在使用命令行创建模板时候，可以一次性键入多个页面名，以空格隔开。比如说，现在需要在 ```myself``` 模块下创建 ```index``` 和 ```safe```页面，如下 :

``` bash
npm run p index safe
```

执行上面的命令后，如下 :

![自动生成模板步骤1](/readImg/choseDir1.png)

这时会提示你需要将页面创建在哪个目录下，选择现有的页面则会创建在对应模块下。因为没有 ```myself``` 模块，所以这里选择其他路径敲回车。

> 脚本会自动读取 ```src/pages``` 下所有的模块路径。

![自动生成模板步骤2](/readImg/choseDir2.png)

然后，输入模块名 ```myself``` 敲回车，就创建成功了。

![自动生成模板步骤3](/readImg/choseDir3.png)

 ```src/pages``` 目录下就有 ```myself``` 模块以及 ```index``` 和 ```safe```页面了，然后开始忙碌的搬砖生活吧！

![生成的目录结果](/readImg/dirRes.png)
