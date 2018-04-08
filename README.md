# js实现多行文本溢出元素后添加省略号

实现这种效果的方法有很多，可以用css方法，比如-webkit-line-clamp，但这种方法存在浏览器兼容性问题，比较完美的方法还是应当使用js来动态改变。
  
  本例代码展示的是多个div内多行效果，所以需要先对每个对应的层进行遍历，css需要设置固定height
  
  后面使用scrollHeight，offsetHeight这两个属性值来判断是否溢出，用innerText取得div内的字符数后，存入一个新数组，之后用substr来动态改变div内的字符数
  ，当substr取得的字符数使得scrollHeight大于offsetHeight时就将每个层设置overflow：hidden，然后删除若干个字符，把省略号添加进去。
    这样便实现了这个效果
