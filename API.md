# old-land-flask-api
## API说明
* 点赞和取消点赞接口需要携带token
* token必须通过小程序的code换取
* 无论是提交数据还是返回数据只支持json
* API遵从严格的HTTP动作并采用标准的 Http Status Code 作为响应状态，建议采用HTTP状态码作为Api调用是否成功的标识,具体异常请通过错误码判断

- [返回码](README.md#返回码)
    * [HTTP 状态码](README.md#HTTP状态码)
    * [错误码(error_code)](README.md#错误码)

- [期刊](README.md#期刊)
    * [获取最新一期](README.md#获取最新一期)
    * [获取当前一期的下一期](README.md#获取当前一期的下一期)
    * [获取某一期详细信息](README.md#获取某一期详细信息)
    * [获取当前一期的上一期](README.md#获取当前一期的上一期)
    * [获取点赞信息](README.md#获取点赞信息)
    * [获取我喜欢的期刊](README.md#获取我喜欢的期刊)

- [书籍](README.md#书籍)
    * [获取热门书籍](README.md#获取热门书籍)
    * [获取书籍短评](README.md#获取书籍短评)
    * [获取喜欢书籍数量](README.md#获取喜欢书籍数量)
    * [获取书籍点赞情况](README.md#获取书籍点赞情况)
    * [新增短评](README.md#新增短评)
    * [获取热搜关键字](README.md#获取热搜关键字)
    * [书籍搜索](README.md#书籍搜索)
    * [获取书籍详细信息](README.md#获取书籍详细信息)

- [点赞](README.md#点赞)
    * [进行点赞](README.md#进行点赞)
    * [取消点赞](README.md#取消点赞)

- [小程序登录](README.md#小程序登录)
    * [获取token](README.md#获取token)
    * [验证token](README.md#验证token)


# 返回码
 ## HTTP状态码

| 状态码 | 含义                      | 说明                 |
| ------ | ------------------------- | -------------------- |
| 200    | OK                        | 请求成功             |
| 201    | CREATED                   | 创建成功             |
| 202    | ACCEPTED                  | 更新成功             |
| 204    | NO CONTENT                | 删除成功             |
| 301    | MOVED PERMANENTLY         | 永久重定向           |
| 400    | BAD REQUEST               | 请求包含不支持的参数 |
| 401    | UNAUTHORIZED              | 未授权               |
| 403    | FORBIDDEN                 | 被禁止访问           |
| 404    | NOT FOUND                 | 请求的资源不存在     |
| 413    | REQUIRED LENGTH TOO LARGE | 上传的File体积太大   |
| 500    | INTERNAL SERVER ERROR     | 内部错误             |


## 错误码

请以错误码来判断具体的错误，不要以文字描述作为判断的依据

>100x 通用类型:

| 错误码 | 含义                 |
| ------ | -------------------- |
| 0      | OK, 成功             |
| 1000   | 输入参数错误         |
| 1001   | 输入的json格式不正确 |
| 1002   | 找不到资源           |
| 1003   | 未知错误             |
| 1004   | 禁止访问             |
| 1005   | 不正确的开发者key    |
| 1006   | 服务器内部错误       |


>200x 点赞类型

| 错误码 | 含义           |
| ------ | -------------- |
| 2000   | 你已经点过赞了 |
| 2001   | 你还没点过赞   |


>300x 期刊类型

| 错误码 | 含义           |
| ------ | -------------- |
| 3000   | 该期内容不存在 |


# 期刊

## 获取最新一期
URL:
>GET    /classic/latest

Response 200:
```json
{
    "content": "人生不能像做菜，把所有的材料准备好才下锅",
    "fav_nums": 2,
    "id": 8,
    "image": "http://127.0.0.1:5000/v1/movie.2.png",
    "index": 8,
    "like_status": 0,
    "pubdate": "2018-08-14",
    "title": "李安《饮食男女》",
    "type": 100
}
```

Response_description:
* content：期刊内容
* fav_nums: 点赞次数
* image: 图片
* index: 期号
* like_status: 是否点赞
* pubdate: 发布日期
* title: 期刊题目
* type: 期刊类型,这里的类型分为:100 电影 200 音乐 300 句子
* id: 期刊在数据中序号，供点赞使用
* 返回期刊的详细信息

## 获取当前一期的下一期
URL:
>GET   /classic/<int:index>/next

>demo  /classic/2/next

Parameters:

* id：id号,必填,必须是正整数

Response 200:
```json
{
    "content": "你陪我不如蝉夏 越过城市喧嚣",
    "fav_nums": 0,
    "id": 3,
    "image": "http://127.0.0.1:5000/v1/music.2.png",
    "index": 3,
    "like_status": 0,
    "pubdate": "2018-08-14",
    "title": "花弼《纸短情长》",
    "type": 200,
    "url": "http://music.163.com/song/media/outer/url?id=557581284.mp3"
}
```

## 获取某一期详细信息
URL:
>GET   /classic/<int:type>/<int:id>

>demo   /classic/200/1

Parameters:

* id：id号,必填,必须是正整数
* type: 类型号，必填，为100,200,300的一种，分别表示电影，音乐，句子

Response 200:
```json
{
    "content": "岁月长，衣裳薄",
    "fav_nums": 0,
    "id": 1,
    "image": "http://127.0.0.1:5000/v1/music.1.png",
    "index": 1,
    "like_status": 0,
    "pubdate": "2018-08-14",
    "title": "杨千嬅《再见二丁目》",
    "type": 200,
    "url": "http://music.163.com/song/media/outer/url?id=557581284.mp3"
}
```

## 获取当前一期的上一期
URL:
>GET   /classic/<int:index>/next

>demo /classic/5/next

Parameters:
* id：id号,必填,必须是正整数

Response 200:
```json
{
    "content": "在变换的生命里，岁月原来是最大的小偷",
    "fav_nums": 0,
    "id": 4,
    "image": "http://127.0.0.1:5000/v1/movie.1.png",
    "index": 4,
    "like_status": 0,
    "pubdate": "2018-08-14",
    "title": "罗启锐《岁月神偷》",
    "type": 100
}
```

## 获取点赞信息

URL:
>GET   /classic/<int:type>/<int:id>/favor

>demo /classic/200/7/favor

Parameters:

* id：id号,必填,必须是正整数
* type: 类型号，必填，为100,200,300的一种，分别表示电影，音乐，句子
* token: 通过 Basic Auth方式传递 username: eyJhbGciOiJIUzI1NiIsImlhdCI6MTUzNDUxODQ0MCwiZXhwIjoxNTM3MTEwNDQwfQ.eyJ1aWQiOjEsInR5cGUiOjIwMCwic2NvcGUiOiJVc2VyU2NvcGUifQ.S1YoU30kgUIwYRgyCVeDgL2VvYcTlmeGph6P9Vd2irg, password: ''

Response 200:

```json
{
    "fav_nums": 2,
    "id": 7,
    "like_status": 1
}
```

## 获取我喜欢的期刊
URL:
>GET   /classic/favor

Parameters:
* token

Response 200:

```json
[
    {
        "content": "人生不能像做菜，把所有的材料准备好才下锅",
        "fav_nums": 2,
        "id": 8,
        "image": "http://127.0.0.1:5000/v1/movie.2.png",
        "index": 8,
        "like_status": 1,
        "pubdate": "2018-08-14",
        "title": "李安《饮食男女》",
        "type": 100
    },
    {
        "content": "谁念过 千字文章 秋收冬已藏",
        "fav_nums": 2,
        "id": 7,
        "image": "http://127.0.0.1:5000/v1/music.4.png",
        "index": 7,
        "like_status": 1,
        "pubdate": "2018-08-14",
        "title": "不才《参商》",
        "type": 200,
        "url": "http://music.163.com/song/media/outer/url?id=557581284.mp3"
    },
    {
        "content": "谁念过 千字文章 秋收冬已藏",
        "fav_nums": 2,
        "id": 7,
        "image": "http://127.0.0.1:5000/v1/music.4.png",
        "index": 7,
        "like_status": 1,
        "pubdate": "2018-08-14",
        "title": "不才《参商》",
        "type": 200,
        "url": "http://music.163.com/song/media/outer/url?id=557581284.mp3"
    }
]
```




## 获取热门书籍

URL:

>GET  /book/hot_list

Response 200:

```json
[
    {
        "author": [
            "Vamei"
        ],
        "fav_nums": 3,
        "id": 13,
        "image": "https://img1.doubanio.com/lpic/s29166309.jpg",
        "like_status": 0,
        "title": "从Python开始学编程"
    },
    {
        "author": [
            "MarkPilgrim"
        ],
        "fav_nums": 2,
        "id": 5,
        "image": "https://img3.doubanio.com/lpic/s4059293.jpg",
        "like_status": 0,
        "title": "Dive Into Python 3"
    }
]
```


## 获取书籍短评

URL:

>GET  /book/<int:book_id>/shot_comment

Parameters:

* book_id：书籍的id,必填,必须为正整数
* Response 200:

```json
{
    "book_id": 1,
    "comment": [
        {
            "book_id": 1,
            "content": "这个书不错",
            "nums": 1
        },
        {
            "book_id": 1,
            "content": "而是的回忆！七龙珠",
            "nums": 9
        },
        {
            "book_id": 1,
            "content": "回忆杀！",
            "nums": 19
        }
    ]
}
```

Response_description:

* comment: 一个评论的列表,包含用户对书籍的评论及对应数量的字典
* book_id: 书籍id



Parameters:


response_description:

* fav_nums:点赞数
* id: 书籍id
* like_status: 是否点赞
* author: 作者
* title: 书籍题目
* image: 书籍图片
* 返回一个列表，包含所有热门书籍的概要信息


## 获取喜欢书籍数量

URL:

>GET  /book/favor/count

Parameters:
* token
```json
{
    "count": 1
}
```
Response_description:

* count: 返回我喜欢的书籍数量


## 获取书籍点赞情况

URL:

>GET      /book/<int:book_id>/favor

Parameters:

* book_id：书籍的id,必填,必须为正整数

Response 200:

```json
{
    "fav_nums": 0,
    "id": 1,
    "like_status": 0
}
```


## 新增短评

URL:

>POST  /book/add/comment

Parameters:

* book_id：书籍id
* content：评论内容,我们可允许的评论内容范围为12字以内

Response 201:
```json
{
    "error_code": 0,
    "msg": "OK",
    "request": "POST /v1/book/add/short_comment"
}
```

## 获取热搜关键字

URL:
>GET /json

Response 200:
```json
{
    "hot": [
        "鸟山明",
        "龙珠",
        "http",
        "PHP",
        "周",
        "阿",
        "火箭",
        "阿斯达",
        "\bphp",
        "\bpython3",
        "鲁迅",
        "python"
    ]
}
```

## 书籍搜索

URL:
>GET  /book/search

> demo1 /book/search?q=七龙珠

> demo2  /book/search?q=七龙珠&summary=1

Parameters:

* start: 开始记录数，默认为0
* count: 记录条数，默认为20,超过依然按照20条计算
* summary: 返回完整或简介,默认为0,0为完整内容,1为简介
* q:搜索内容

Response 200:

当summary=0,返回详细数据:


```json
{
    "books": [
        {
            "author": [
                "[日]鸟山明"
            ],
            "category": "日本漫画",
            "id": 17699,
            "image": "https://img1.doubanio.com/lpic/s28671937.jpg",
            "isbn": "9787600100354",
            "pages": "全42册",
            "price": "367.6",
            "pubdate": "2005-7-1",
            "publisher": "中国少年儿童出版社",
            "subtitle": "",
            "summary": "《DRAGON BALL》译名《龙珠》（又名：七龙珠）是日本著名漫画家鸟山明的得意作品，1984年登场，1992年又推出『龙珠』续集。这部长篇巨作在『少年跳跃』上连载7年。\\n故事讲述了孙悟空（当然不是我们神化中的那个齐天大圣喽）父子和那7颗能满足人们心愿的龙珠，把读者从山村引到城市，从地球引到外星，又从现在引到未来。\\n根据《龙珠》的漫画故事，还推出了《龙珠》的系列动画片，无论是TV版还是剧场版，都吸引了无数的龙珠迷，掀起了一股股“龙珠”的热潮。\\n龙珠的舞台，虽说是带有中国色彩的，但是也并非就限定在中国；时代也一样，并没有把它固定在某一个具体时间。整个故事架构很简单，至于一些细节和结局，我想任其自由发展。这么一来，连我自己也会想[故事下一步会怎么发展啊]，并为之捏了一把汗。因为无论怎么发挥都可以，所以乐在其中。\\n传说中，地球四处散落着7颗龙珠。如果谁将他们收集起来就可以实现自己的愿望，人们为了得到它而不断的你争我夺……每年都会有一场以龙珠为奖品的《天下第一武道大会》……在地球的一个角落，生活着孙悟空这个茁壮的孩子，他的身份其实是赛亚人卡卡罗特。因为婴儿时的变身能力不够而被派往地球，其实是为了毁灭地球生物而变成殖民地，但他生来和平，丝毫不知自己的身世……这种战斗力超强的种族“赛亚人”与宇宙中另一些种族“那美克星人”等等间发生了无数惊险有趣又富有教育意义的故事……这就是日本著名漫画家“鸟山明”创造的《七龙珠》世界。",
            "title": "龙珠(全42册)",
            "translator": [
                "牟琳"
            ]
        },
        {
            "author": [
                "[日]鸟山明"
            ],
            "category": "日本漫画",
            "id": 18569,
            "image": "https://img3.doubanio.com/lpic/s11231433.jpg",
            "isbn": "9787500774860",
            "pages": "175",
            "price": "6.9",
            "pubdate": "2005-7",
            "publisher": "中国少年儿童出版社",
            "subtitle": "孙悟空和伙伴们",
            "summary": "《龙珠(套装共42册)》是日本著名漫画家鸟山明的得意作品。相传，有七颗龙珠散落在世界的各个角落，当它们被聚集到一起时神龙就会出现，能够实现你的任何一个愿望。这个一个美丽的的传说引出了小悟空和他的朋友们寻找龙珠的故事。",
            "title": "龙珠1",
            "translator": [
                "牟琳"
            ]
        }
    ],
    "count": 20,
    "start": 0,
    "total": 2
}
```

当summary=1,返回概要数据:

```json
{
    "books": [
        {
            "author": [
                "[日]鸟山明"
            ],
            "id": 17699,
            "image": "https://img1.doubanio.com/lpic/s28671937.jpg",
            "isbn": "9787600100354",
            "price": "367.6",
            "title": "龙珠(全42册)"
        },
        {
            "author": [
                "[日]鸟山明"
            ],
            "id": 18569,
            "image": "https://img3.doubanio.com/lpic/s11231433.jpg",
            "isbn": "9787500774860",
            "price": "6.9",
            "title": "龙珠1"
        }
    ],
    "count": 20,
    "start": 0,
    "total": 2
}
```


## 获取书籍详细信息

URL:

>GET  /book/<id>/detail

>demo /book/6548683/detail

Parameters:

id: 书籍的id号，从豆瓣API获取

Response 200:

```json
{
    "author": [
        "申音"
    ],
    "category": "",
    "id": "6548683",
    "image": "https://img1.doubanio.com/view/subject/m/public/s6569607.jpg",
    "isbn": "9787807674030",
    "pages": "262",
    "price": "35.00元",
    "pubdate": "2011-7-1",
    "publisher": "山西经济出版社",
    "subtitle": "为何普世商业价值在中国行不通",
    "summary": "★为什么美国没有史玉柱，中国没有乔布斯？\n★什么是“对的行业”、“错的行业”？\n★我们需要什么样的营销？\n★老板为什么要读商学院？\n★山寨公司还需要管理吗？\n★资源问题是个“伪问题”？\n★别把商业模式当成葵花宝典\n★给海归技术创业兄弟的九个忠告\n★在一个不伟大的行业里，做一个伟大的公司\n★是什么让互联网遭遇了有史以来最鸡犬不宁的一战？",
    "title": "商业的常识",
    "translator": ""
}
```

# 点赞

## 进行点赞
URL:

>POST  /like

Parameters:

* art_id: 点赞对象,例如你想对电影进行点赞，那这个参数就是电影的id号
* type：点赞类型分为四种：100 电影 200 音乐 300 句子 400 书籍

Response Status 201:

```json
{
    "error_code": 0,
    "msg": "OK",
    "request": "POST /v1/like"
}
```

## 取消点赞
URL:
>POST /like/cancel

Parameters:

* art_id: 点赞对象id
* type：点赞类型

Response Status 201:
```json
{
    "error_code": 0,
    "msg": "OK",
    "request": "POST /v1/like"
}
```


# 小程序登录

## 获取token

URL:
>POST /token/mina

Parameters:
* code: wx.login API获取的code值。

Response Status 200:
```json
{
    "token" : "eyJhbGciOiJIUzI1NiIsImlhdCI6MTUzNDUxODQ0MCwiZXhwIjoxNTM3MTEwNDQwfQ.eyJ1aWQiOjEsInR5cGUiOjIwMCwic2NvcGUiOiJVc2VyU2NvcGUifQ.S1YoU30kgUIwYRgyCVeDgL2VvYcTlmeGph6P9Vd2irg"
}
```

Response_description:

* token: 供需要权限认证的接口请使用

## 验证token

Parameters:
* token: 需要权限认证的接口请使用HTTP BASIC方式在header头中传递token，headers中的键名为 Authorization， 键值为 base64(basic token:'')

Response Status 200:
```json
{
    "error_code": 1008,
    "msg": "token is invalid",
    "request": "POST /v1/like/cancel"
}
```
