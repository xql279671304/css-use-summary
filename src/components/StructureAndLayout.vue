<template>
  <div>
    <h1>结构与布局</h1>

    <h2>自适应内部元素</h2>
    <div class="adaptive">
      <p>Let’s assume we have some text here. Bacon ipsum dolor sit amet turkey veniam shankle, culpa short ribs kevin t-bone occaecat.</p>
      <figure>
        <img src="../assets/images/adamcatlace.jpg" />
        <figcaption>
          The great Sir Adam Catlace was named after Countess Ada Lovelace, the first programmer ever.
        </figcaption>
      </figure>
      <p>We also have some more text here. Et laborum venison nostrud, ut veniam sint kielbasa ullamco pancetta.</p>
    </div>

    <h2>精确控制表格列宽</h2>
    <p>table-layout: fixed;</p>
    <div>
      <table>
        <tr>
          <td>If we don’t…</td>
          <td>specify a cell width, they will be assigned one that depends on their contents. Notice how the cell with the more content here is much wider.</td>
        </tr>
      </table>

      <table>
        <tr>
          <td>If we don’t…</td>
          <td>specify a cell width, they will be assigned one that depends on their contents. Notice how the cell with the more content here is much wider.</td>
        </tr>
        <tr>
          <td>All rows take part in calculating the widths, not just the first one.</td>
          <td>Notice how the dimensions here are different than the previous example.</td>
        </tr>
      </table>

      <table>
        <tr>
          <td style="width: 1000px">If we specify a width, it will not always be followed. I have a width of <code>1000px</code>…</td>
          <td style="width: 2000px">…and I have a width of <code>2000px</code>. Because there’s not enough space for <code>3000px</code>, they are reduced proportionally, to 33.3% and 66.6% of the total width.</td>
        </tr>
      </table>

      <table>
        <tr>
          <td>If we prevent word wrapping, the table can become so wide it grows beyond its container.</td>
          <td class="preformatted">…and <code>text-overflow: ellipsis</code> doesn’t help either.</td>
        </tr>
      </table>

      <table>
        <tr>
          <td>Large images and blocks of code can also cause the same issue.</td>
          <td><img src="http://lea.verou.me/book/panoramic.jpg" /></td>
        </tr>
      </table>
    </div>

    <h2>根据兄弟元素的数量来设置样式</h2>
    <div>
      <code>
        <pre>
          li:only-child{
            /* 只有一个列表项时的样式 */
          }
        </pre>
        <pre>
          /* 定义mixin */ 
          @mixin n-items($n) {
            &:first-child:nth-last-child(#{$n}), &:first-child:nth-last-child(#{$n}) ~ & {
              @content; 
            }
          }
        </pre>
        <pre>
          /* 调用时是这样的:*/ 
          li {
            @include n-items(4) {
              /* 属性与值写在这里 */
            } 
          }
        </pre>
        <pre>
          li:first-child:nth-last-child(n+4), 
          li:first-child:nth-last-child(n+4) ~ li {
            /* 当列表至少包含四项时，命中所有列表项 */ 
          }
        </pre>
        <pre>
          li:first-child:nth-last-child(-n+4), 
          li:first-child:nth-last-child(-n+4) ~ li { 
            /* 当列表最多包含四项时，命中所有列表项 */
          }
        </pre>
        <pre>
          li:first-child:nth-last-child(n+2):nth-last-child(-n+6), 
          li:first-child:nth-last-child(n+2):nth-last-child(-n+6) ~ li {
            /* 当列表包含2~6项时，命中所有列表项 */ 
          }
        </pre>
      </code>
      <ul class="n-items">
        <li>1</li><li>2</li><li>3</li>
      </ul>
      <ul class="n-items">
        <li>1</li><li>2</li><li>3</li><li>4</li>
      </ul>
      <ul class="n-items">
        <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li>
      </ul>
    </div>

    <h2>满幅的背景，定宽的内容</h2>
    <code>
      <pre>
        /* 简化结构，样式灵活、代码简练，还具有良好的兼容性 */ 
        footer {
          padding: 1em;
          padding: 1em calc(50% - 450px);
          background: #333; 
        }
      </pre>
    </code>

    <h2>垂直居中</h2>
    <code>
      <pre>
        Flexbox
      </pre>
    </code>

    <h2>紧贴底部的页脚</h2>
    <code>
      <pre>
        body {
          display: flex;
          flex-flow: column;
          min-height: 100vh; 
        }
        main { flex: 1; }
      </pre>
    </code>
  </div>
</template>
<style lang="scss" scoped>
  .adaptive figure{
    max-width: 300px;
    max-width: min-content;
    margin: auto;
    padding: 10px;
    border: 1px solid silver;
  }
  .adaptive figure>img{
    max-width: inherit;
  }

  table{
    border-collapse: collapse;
    margin-bottom: 1em;
    width: 100%;
    table-layout: fixed;
  }
  td {
    border: 1px solid #aaa;
  }
  td.preformatted {
    white-space: pre;
    font-family: Consolas, Monaco, monospace;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .n-items {
    display: flex;
    margin: 0;
    li {
      width: 30px;
      height: 30px;
      line-height: 2;
      background-color: bisque;
      color: #ffffff;
      list-style: none;
      margin: 6px;
      @include n-items(4) {
        background-color: beige;
      } 
    }
  }
</style>