## MVC 概念

1. 背景
   - 一种来源于后端项目架构的**设计思想/方案**
   - 目前我们的 WEB 项目主要是采用**前后端分离**开发，客户端发起 http 请求，同时在客户端进行解析渲染，即**客户端渲染**的方式运行的；而以前 WEB 项目主要是采用**前后端混编**的方案，利用服务端渲染完整的 HTML 文件，即**服务端渲染**的方式来实现
2. M（Model）
   - 模型层，表示数据模型，主要包括直接操作数据库 / 数据的方法
3. V（View）
   - 视图层，主要表示模版引擎（EJS/PUG），其本质为 HTML 字符串
4. C（Controller）
   - 控制器层，主要用于给视图层提供数据 / 调用模型层方法 / 提供数据 API
5. MVC 项目运行流程：
   1. 浏览器访问项目网站，会向服务端请求 HTML 资源
   2. 此时服务端会利用控制器（Controller），调用模型层（Model）的方法获取数据
   3. 控制器拿到数据后，利用模版引擎（View），拼接一个完整的 HTML 字符串，并返回一个完整的 HTML 文件
   4. 最后交由客户端做页面的解析渲染

## 前端 MVC 概念

1. M（Service）
   - 服务层，用于异步请求数据，从而间接对数据进行操作
2. V（View）
   - HTML 字符串，通常利用函数返回 HTML 字符串（因为函数能接受参数）
3. C（Controller）
   - 调用 M 层的方法获取或操作数据 / 为 V 层提供数据 / 对 DOM 进行相应的操作

## 后端 MVC 实践

1. 路由： List Detail
2. 用户列表展示 Name Age
3. 用户详情展示
4. 用户数据新增与删除
