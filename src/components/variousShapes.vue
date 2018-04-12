<template>
  <div class="list">
    <div>
      <div class="normal">
        <img src="../assets/images/adamcatlace.jpg" alt="..." />
      </div>
      <h4>正常</h4>
    </div>
    <div>
      <div class="picture">
        <img src="../assets/images/adamcatlace.jpg" alt="..." />
      </div>
      <h4>八边形</h4>
    </div>
    <div>
      <div class="picture" style="width: calc(200px/1.42);">
        <img class="scale" src="../assets/images/adamcatlace.jpg" alt="..." />
      </div>
      <h4>平行四边形</h4>
    </div>
    <div>
      <div class="picture">
        <img class="scale" src="../assets/images/adam-sleeping.jpg" alt="..." />
      </div>
      <h4>平行四边形不规则图片</h4>
    </div>
    <div>
      <img class="clip" src="../assets/images/adam-sleeping.jpg" alt="..." />
      <h4>平行四边形不规则图片（clip-path）</h4>
    </div>
    <div class="clip-corner">
      切角效果！
    </div>
    <div class="inner-corner">
      切角效果！一直想要的一个效果，内圆角！
    </div>
	<div class="beveled-corner">
	  切角效果！我想要一个四个平角！
	</div>
    <div class="beveled-corner-2">
      切角效果！我想要一个四个平角！不一样的我哦～～～
    </div>
    <div>
      <nav>
        <a href="#">首页</a>
      </nav>
      <h4>梯形标签页</h4>
    </div>
    <div>
      <nav class="nav-left">
        <a href="#">首页</a>
      </nav>
      <h4>梯形标签页,向左</h4>
    </div>
    <div>
      <div class="pie" style="animation-delay: -20s;">&nbsp;</div>
      <h4>饼图</h4>
    </div>
    <div>
      <div class="pie" style="animation-delay: -80s;">&nbsp;</div>
      <h4>饼图</h4>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/scss">

  .list{
    display: flex;
    align-items: center;
    justify-content: flex-start;
	flex-wrap: wrap;
    >div{
      width: 200px;
      margin: 20px;
    }
    img{
      display: block;
      max-width: 100%;
    }
  }
  .picture {
    width: 200px;
    transform: rotate(45deg);
    overflow: hidden;
    img {
      max-width: 100%;
      transform: rotate(-45deg);
    }
    img.scale{
      max-width: 100%;
      transform: rotate(-45deg) scale(1.42);
    }
  }
  .clip{
    max-width: 200px;
    margin: 20px;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: 1s;
  }
  .clip:hover{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .clip-corner{
    height: 200px;
    color: #ffffff;
    background: #655;
    background: linear-gradient(-45deg, transparent 15px, #58a 0);
  }
  .inner-corner {
    height: 160px;
    color: #ffffff;
    padding: 20px;
    @include inner-corners(#58a, 15px, 15px);
  }
  .beveled-corner{
	height: 160px;
	color: #ffffff;
	padding: 20px;
	@include beveled-corners(#58a, 15px, 5px);
  }
  .beveled-corner-2{
	border: 21px solid transparent;
	border-image: 1 url('data:image/svg+xml,\
					  <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a">\
					  <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2" />\
					  </svg>');
	background: #58a;
	background-clip: padding-box;

	max-width: 12em;
	color: white;
	font: 150%/1.6 Baskerville, Palatino, serif;
  }
  nav > a{
    position: relative;
    display: inline-block;
    padding: 10px 20px 0;
    color: #808080;
  }
  nav > a::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #ccc;
    background-image: linear-gradient(hsla(0,0%,100%,.6), hsla(0,0%,100%,0));
    border: 1px solid rgba(0,0,0,.4);
    border-bottom: none;
    border-radius: .5em .5em 0 0;
    box-shadow: 0 .15em white inset;
    transform: perspective(.5em) rotateX(5deg);
    transform-origin: bottom;
  }
  nav.nav-left>a::before{
    transform-origin: right;
  }
  .pie{
    display: inline-block;
    position: relative;
    width: 100px;
    line-height: 100px;
    border-radius: 50%;
    background: yellowgreen;
    background-image: linear-gradient(to right, transparent 50%, #655 0);
    color: transparent;
    text-align: center;
  }
  @keyframes spin {
    to { transform: rotate(.5turn); }
  }
  @keyframes bg {
    50% { background: #655; }
  }
  .pie::before{
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 / 50%;
    background-color: inherit;
    transform-origin: left;
    animation: spin 50s linear infinite, bg 100s step-end infinite;
    animation-play-state: paused;
    animation-delay: inherit;
  }

</style>
