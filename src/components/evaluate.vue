<template>
  <div class='evaluate'>
    <div class='new'>
      商品最新评价
    </div>
    <div class='content'>
      <div class='lubo'>
        <div style='padding-left: 40px;' v-for='(item,index) in list' :key='index'>
          <div class='plname'>
            <span>{{item.name}}</span> 
            <span style='color:#666'> &nbsp;&nbsp;&nbsp;满意度：</span>
            <span>★★★★★</span>
          </div>
          <div class='pltext'>
            {{item.text}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {name: '林**', text:'表和保修卡的号码一样，这才能保证是正品。所以拍了几张带号码的方便关注的人参考，实话实说在网上买价格不低的表的确是犹豫，不过事实证明，值了。三个字，可以买。'},
        {name: '黄**', text:'特意带了两天才评价的，表很好，老板服务也给力，以后必须再来光顾。'},
        {name: '赵**', text:'手表超棒，很好看，有发票和保修卡，盒子也很漂亮，去亨得利看外观鉴定是正品，送人的，很喜欢，卖家态度也超好，着急送人给转的顺风，终于纪念日前一天到了，好评，以后买表还来你家'},
        {name: '陈**', text:'观察了好多天，手表确实很准！一天的误差只有两三秒。客服服务态度很好！欢迎鉴定。一看就有把握！赞一个！以后还来贵店！'},
        {name: '叶**', text:'非常好！这就是为什么要买高品质的东西，提升人的气质。 好'},
        {name: '曾**', text:'看起来非常棒，高大上的感觉。没有去验货，凭自己在网上看到的鉴定细节，应该是正品！'},
        {name: '林**', text:'表和保修卡的号码一样，这才能保证是正品。所以拍了几张带号码的方便关注的人参考，实话实说在网上买价格不低的表的确是犹豫，不过事实证明，值了。三个字，可以买。'},
      ],
    }
  },

  methods: {

  },

  created(){
  }
}
</script>
<style lang='less'>
.evaluate {
  padding: 5px;
  .new {
    color: #000;
    background: #eee;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-weight: bold;
    z-index: 20;
  }
  .plname {
    line-height: 25px;
    color: #e8373c;
    font-size: 14px;
  }
  .pltext {
    line-height: 25px;
    color: #666666;
    font-size: 14px;
    border-bottom: 1px dotted #cccccc;
  }
  .content {
    height: 355px;
    overflow: hidden;
  }
  .lubo {
    animation: myMove 10s linear infinite;
    animation-fill-mode: forwards;
  }
  /*文字无缝滚动*/
  @keyframes myMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-280px);
    }
  }
}

</style>