<template>
  <div>
    <div class="hyphens">
      你好，这个就是字体排印！你好，这个就是字体排印！你好，这个就是字体排印！你好，这个就是字体排印！
    </div>
    <h2>换行也可以这么做！！</h2>
    <div class="insert">
      <dl>
        <dt>Name:</dt>
        <dd>Lea Verou</dd>
        <dt>Email:</dt>
        <dd>lea@verou.me</dd>
        <dd>lea2@verou.me</dd>
        <dd>lea3@verou.me</dd>
        <dt>Location:</dt>
        <dd>Earth</dd>
      </dl>
    </div>
    <h2>文本的斑马条纹</h2>
    <div class="">
      <pre>
        <code>
          while (true) {
            var d = new Date();
            if (d.getDate()==1 &amp;&amp;
                d.getMonth()==3) {
              alert("TROLOLOL");
            }
          }
        </code>
      </pre>
    </div>
    <h2>HTML & css，单独修饰一个字符 &</h2>
    <h2>唯美、优雅的下划线</h2>
    <div class="underline">
      <p>“The only way to <a class="line">get rid of a temp­ta­tion</a> is to <a>yield</a> to it.”</p>
      <p>“你好，我是<a class="line">小红</a> 哈哈哈<a>签名</a> 是的是的”</p>
      <p>“The only way to <a class="dash">get rid of a temp­ta­tion</a> is to <a>yield</a> to it.”</p>
      <p>“你好，我是<a class="dash">小红</a> 哈哈哈<a>签名</a> 是的是的”</p>
      <p>“你好，我是<a class="curve">小红</a> 哈哈哈<a>签名</a> 是的是的”</p>
    </div>
    <h2>文字的效果</h2>
    <div class="letterpress">
      <p>“The only way to get rid of a temp­ta­tion is to yield to it.”</p>
      <p>“你好这个是文字凸显.”</p>
      <p>“The only way to get rid of a temp­ta­tion is to yield to it.”</p>
      <p>“你好这个是文字凸显.另一种风格”</p>
    </div>
    <h2>空心字</h2>
    <div class="stroked-text">
      <p>CSS</p>
      <p>
        <svg overflow="visible" width="2em" height="1.2em"><use xlink:href="#css" /><text id="css" y="1em">CSS</text></svg>
      </p>
    </div>
    <h2>文字外发光效果</h2>
    <div class="glow">
      <a href="#">Glow</a>
    </div>
    <h2>css3d</h2>
    <div class="extruded">
      <p>css3d</p>
      <p>css3d</p>
      <p>css3d</p>
    </div>
    <h2>circular</h2>
    <div class="circular">
      circular reasoning works because,你好
    </div>
  </div>
</template>
<style scoped lang="scss" type="text/scss">
  @import "../assets/scss/variable";

  body {
    font: 150%/1.6 Baskerville, Palatino, serif;
  }

  .hyphens{
    width: 120px;
    hyphens: auto;
  }

  .insert{
    display: block;
    width: 100%;
    text-align: left;
  }
  dt, dd {
    display: inline;
    margin: 0;
    text-align: left;
  }

  dd {
    font-weight: 600;
  }

  dd + dt::before {
    content: "\A";
    white-space: pre;
  }

  dd + dd::before {
    content: ', ';
    font-weight: normal;
    margin-left: -.25em;
  }


  pre {
    padding: .5em;
    line-height: 1.5;
    background: hsl(20, 50%, 95%);
    background-image: linear-gradient(rgba(120,0,0,.1) 50%, transparent 0);
    background-size: auto 3em;
    background-origin: content-box;
    font-family: Consolas, Monaco, monospace;
  }

  code { font: inherit }

  @font-face {
    font-family: Ampersand;
    src: local('Baskerville-Italic'), local('GoudyOldStyleT-Italic'), local('Garamond-Italic'), local('Palatino-Italic');
    unicode-range: U+26;
  }

  h2 {
    font-family: Ampersand, Helvetica, sans-serif;
  }

  .underline a.line{
    background: linear-gradient(gray, gray) no-repeat;
    background-size: 100% 1px;
    background-position: 0 1.11em;
    text-shadow: .05em 0 white, -.05em 0 white;
  }
  .underline a.dash{
    background: linear-gradient(90deg, gray 66%, transparent 0) repeat-x;
    background-size: .2em 2px;
    background-position: 0 1em;
  }
  .underline a.curve{
    background: linear-gradient(-45deg, transparent 40%, red 0, red 60%, transparent 0) 0 1.2em,
                linear-gradient(45deg, transparent 40%, red 0, red 60%, transparent 0) .1em 1.2em;
    background-repeat: repeat-x;
    background-size: .2em .1em;
    text-shadow: .05em 0 white, -.05em 0 white;
  }

   .letterpress p{
     padding: .8em 1em;
     background: hsl(210, 13%, 60%);
     color: hsl(210, 13%, 30%);
     text-shadow: 0 1px 1px hsla(0,0%,100%,.8);
   }
  .letterpress p:nth-child(3),
  .letterpress p:nth-child(4){
    background: hsl(210, 13%, 30%);
    color: hsl(210, 13%, 60%);
    text-shadow: 0 -1px 1px black;
  }
  .stroked-text p{
    color: #ffffff;
    font-size: 28px;
  }
  .stroked-text p:first-child{
    text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
  }
  .stroked-text p:last-child{
    fill: currentColor
  }
  .stroked-text p:last-child use{
    stroke: black;
    stroke-width: 6;
    stroke-linejoin: round;
  }

  .glow a{
    color: green;
    text-decoration: none;
    transition: 1s;
  }
  .glow a:hover{
    text-shadow: 0 0 .1em, 0 0 .3em;
  }

  .extruded p:first-child{
    color: white;
    text-shadow: 0 1px hsl(0,0%,85%),
                0 2px hsl(0,0%,80%),
                0 3px hsl(0,0%,75%),
                0 4px hsl(0,0%,70%),
                0 5px hsl(0,0%,65%),
                0 5px 10px black;
    font: bold 500%/1 Rockwell, serif;
  }
  .extruded p:nth-child(2){
    @include text-3d(#eee, 4);
    font-size: 30px;
  }
  .extruded p:last-child{
    color: white;
    background: hsl(0, 50%, 45%);
    text-shadow: text-retro();
    font-size: 30px;
  }


  .circular {
    width: 30em;
    height: 30em;
    margin: 4em auto 0;
    font-size: 14px;
  }
</style>
<style>
  .circular svg {
    display: block;
    overflow: visible;
    transition: 10s linear transform;
  }
  .circular svg:hover { transform: rotate(-2turn); }
  .circular text { fill: currentColor }
  .circular path { fill: none; }
</style>
<script>
  function $$ (selector, context) {
    context = context || document
    var elements = context.querySelectorAll(selector)
    return Array.prototype.slice.call(elements)
  }

  export default {
    mounted () {
      $$('.circular').forEach(function (el) {
        var NS = 'http://www.w3.org/2000/svg'

        var svg = document.createElementNS(NS, 'svg')
        svg.setAttribute('viewBox', '0 0 100 100')

        var circle = document.createElementNS(NS, 'path')
        circle.setAttribute('d', 'M0,50 a 50,50 0 1,1 0,1z')
        circle.setAttribute('id', 'circle')

        var text = document.createElementNS(NS, 'text')
        var textPath = document.createElementNS(NS, 'textPath')
        textPath.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#circle')
        textPath.textContent = el.textContent
        text.appendChild(textPath)

        svg.appendChild(circle)
        svg.appendChild(text)

        el.textContent = ''
        el.appendChild(svg)
      })
    }
  }
</script>