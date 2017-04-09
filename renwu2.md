# 优点
- 纯文本，兼容性强，同时功能也较丰富。
- 更专注于文字内容而不是排版。
- 可以方便地转换格式到html、电子书等。
- Markdown 的标记语法有极好的可读性。

# 使用介绍
## 1. 标题
文本前加“#”可选择标题类型
```
#一级标题
##二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

![标题.png](http://upload-images.jianshu.io/upload_images/5468159-fcb065080475316e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 2. 列表
- ### 无序列表
无序列表前加“`- `”
> - 无序列表1
> - 无序列表2
> - 无序列表3
- ### 有序列表
无序列表前加“`1. `”（序号后一个点加空格）
> 1. 有序列表1
> 2. 有序列表2
> 3. 有序列表3

![列表.png](http://upload-images.jianshu.io/upload_images/5468159-f762a5ed1e7b75ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 3. 链接和图片
- ### 链接
按照以下语法即可加入链接。

 >[链接名称]（链接URL）

[我的主页](u/2e4484f405cf)
- ### 图片
和加入链接类似，只是需要在前面再加一个“`！ `”。
>![图片名称]（链接URL）

![示例](http://upload-images.jianshu.io/upload_images/259-0ad0d0bfc1c608b6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![链接.png](http://upload-images.jianshu.io/upload_images/5468159-351130ea77c857cb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 4. 引用
单行引用的文字前面加上“`> `”。
> 这是一句引用文字

![引用.png](http://upload-images.jianshu.io/upload_images/5468159-21b1cfd1998abea1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 5. 粗体和斜体
- ### 粗体
用两个“`*`”包含一段文本就是粗体的，用一个“`*`”包含一段文本就是斜体。
> `*这是斜体*`   
 `**这是粗体**`   

*这是斜体*         
  **这是粗体**   

![粗体斜体.png](http://upload-images.jianshu.io/upload_images/5468159-090a2ad3533c7dd6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 6. 引用代码
如果引用的语句只有一段，不分行，可以用“`·`”将语句包起来。
如果引用的语句为多行，可以将“`···`”置于这段代码的首行和末行。
` hello world`

```
hello world
hello world
hello world
```


![代码引用.png](http://upload-images.jianshu.io/upload_images/5468159-3e2333c875f11c56.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





## 7. 表格
- 相关代码
```
|name | num | core|
|:----:|:------:|:----:|(":"的位置决定表格中文本的位置)
|Tom | 12  | 68|
|John | 17  | 95|
|Cindy | 23  | 80|
```

|name | num | core|
|:----:|:------:|:----:|
|Tom | 12  | 68|
|John | 17  | 95|
|Cindy | 23  | 80|

## 8. 总结

  所有的字符最好全都使用半角符号，部分语法代码中全角符号没有作用，仅能作为一个符号使用。