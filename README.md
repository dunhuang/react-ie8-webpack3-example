# react-ie8-webpack3-example 

## intro 
基于webpack3来跑react+ie8的例子，项目包含的各种常用插件和库，尽量接近实际需求，有很好的参考性
支持async/await语法，fetch，sass，redux + redux thunk

server side render的例子在这 https://github.com/dunhuang/react-ie8-webpack3-server-render-example

## run  

ie8 只能在build模式下跑起来:

```
npm run deploy
```

开发模式dev mode（不支持ie8）:

```
npm run dev
```

## notice

注意有些npm模块的package.json中已经有了“module”属性(根据npm最新标准)，webpack会优先用模块中的es6部分去解析，这会导致build之后的代码不能在ie8下运行，（我们配置babel-loader不处理node_modules下的代码）此时要进行如下配置（以react-redux为例）：
```
  resolve: {
    ...
    alias: {
      'react-redux': path.resolve(__dirname, './node_modules/react-redux/lib/index.js')
    }
  },
```

## mock api

假接口配置在/json目录下，我在server.js里有做了相应配置，在正式项目中应去除

## docs

为了兼容ie8，用了一系列旧版本库，部分参考文档整理如下：

- react@0.14.9
http://react-ie8.xcatliu.com/react/

- react-router@1.0.3
https://github.com/ReactTraining/react-router/tree/1.0.x/docs
https://github.com/ReactTraining/react-router/blob/v2.8.1/upgrade-guides/v1.0.0.md