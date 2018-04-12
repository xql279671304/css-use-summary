<template>
  <div class="sha">
    <div class="shadow">
      从逻辑上来说，如果我们应用一个负的扩张半径，而它的值刚好等于模 糊半径，那么投影的尺寸就会与投影所属元素的尺寸完全一致。
    </div>
    <div class="shadow rb">
      从逻辑上来说，右边、底部！如果我们应用一个负的扩张半径，而它的值刚好等于模 糊半径，那么投影的尺寸就会与投影所属元素的尺寸完全一致。
    </div>
    <div class="shadow rl">
      从逻辑上来说，右边、底部！如果我们应用一个负的扩张半径，而它的值刚好等于模 糊半径，那么投影的尺寸就会与投影所属元素的尺寸完全一致。
    </div>
    <div class="shadow-dialog speech">
      speech bubble
    </div>
    <div class="shadow-dialog dot">
      dotted border
    </div>
    <div class="shadow-dialog cutout">
      cutOut corners
    </div>
    <div class="filter">
      <img src="../assets/images/tiger.jpg">
      <h4>滤镜</h4>
    </div>
    <div class="tinted-image">
      <img src="../assets/images/tiger.jpg">
      <h4>滤镜</h4>
    </div>
    <div class="frosted">
      <main>
        <blockquote>
          “The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”
          <footer>— <cite>Oscar Wilde, The Picture of Dorian Gray</cite></footer>
        </blockquote>
      </main>
    </div>
    <div class="note">
      “The only way to get rid of a temptation is to yield to it.”
      — Oscar Wilde, The Picture of Dorian Gray
    </div>
  </div>
</template>
<style scoped lang="scss" type="text/scss">

  .sha{
    display: flex;
    flex-wrap: wrap;
  }
  .shadow{
    margin: 10px;
    padding: 10px;
    width: 2in;
    height: 1in;
    background-color: #fb3;
    box-shadow: 0 5px 4px -4px black;
    font-size: 12px;
  }
  .rb{
    box-shadow: 3px 3px 6px -3px black;
  }
  .rl{
    box-shadow: 2px 0 2px -2px black, -2px 0 2px -2px black;
  }

  .shadow-dialog {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    vertical-align: bottom;
    box-sizing: border-box;
    width: 5.9em;
    height: 5.2em;
    margin: .6em;
    background: #fb3;
    /*box-shadow: .1em .1em .3em rgba(0,0,0,.5);*/
    -webkit-filter: drop-shadow(.1em .1em .1em rgba(0,0,0,.5));
    filter: drop-shadow(.1em .1em .1em rgba(0,0,0,.5));
    font: 200%/1.6 Baskerville, Palatino, serif;
    text-align: center;
  }
  .shadow-dialog.speech{
    border-radius: .3em;
    padding: 0.2em;
  }
  .shadow-dialog.speech::before{
    content: '';
    position: absolute;
    top: 1em;
    right: -.7em;
    width: 0;
    height: 0;
    border: 1em solid transparent;
    border-left-color: #fb3;
    border-right-width: 0;
  }
  .shadow-dialog.dot{
    background: transparent;
    border: .3em dotted #fb3;
  }
  .shadow-dialog.cutout{
    border: .5em solid #58a;
    border-image: 1 url('data:image/svg+xml,\
	                     <svg xmlns="http://www.w3.org/2000/svg"\
		                 width="3" height="3" fill="%23fb3">\
		     	         <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\
		     	</svg>');
    background-clip: padding-box;
  }

  .filter img{
    max-width: 640px;
    transition: 1s filter, 1s -webkit-filter;
    -webkit-filter: sepia() saturate(4) hue-rotate(295deg);
    filter: sepia() saturate(4) hue-rotate(295deg);
  }
  .filter img:hover,
  .filter img:focus{
    -webkit-filter: none;
    filter: none;
  }

  .tinted-image {
    background-color: hsl(335, 100%, 50%);
    transition: .5s background-color;
  }
  .tinted-image img{
    max-width: 640px;
    mix-blend-mode: luminosity;
  }
  .tinted-image:hover {
    background-color: transparent;
  }

  .frosted{
    width: 100%;
    padding: calc(50vh - 6em) 0 20px;
    font: 150%/1.6 Baskerville, Palatino, serif;
  }
  .frosted,
  .frosted main::before{
    background: url("http://csssecrets.io/images/tiger.jpg") 0 / cover fixed;
  }
  .frosted main{
    position: relative;
    margin: 0 auto;
    padding: 1em;
    max-width: 23em;
    background: hsla(0,0%,100%,.25) border-box;
    overflow: hidden;
    border-radius: .3em;
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
    text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
    z-index: 0;
  }
  .frosted main::before {
    content: '';
    position: absolute;
    top: 0;  right: 0;  bottom: 0;  left: 0;
    margin: -30px;
    z-index: -1;
    filter: blur(20px);
  }
  .frosted blockquote {
    font-style: italic;
  }
  .frosted blockquote cite { font-style: normal; }

  .note {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 15em;
    padding: 2em;
    margin: 10px 0;
    color: white;
    font: 100%/1.6 Baskerville, Palatino, serif;
    border-radius: .5em;
    @include folded-corner(#58a, 1.5em, 25deg);
  }
</style>