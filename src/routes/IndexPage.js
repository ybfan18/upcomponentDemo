import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.info}>
      <h1 >介绍</h1>
      <div></div>
      <p>
        蚂蚁集团的企业级产品是一个庞大且复杂的系统，数量多且功能复杂，而且变动和并发频繁，常常需要设计者与开发者能快速做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。

      随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁集团体验技术部）经过大量项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系 —— Ant Design。基于「自然」、「确定性」、「意义感」、「生长性」四大设计价值观，通过模块化解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验。</p>
      <h2>设计资源</h2>
      <p>我们提供完善的设计指引、最佳实践、设计资源和设计工具，来帮助设计者快速产出高质量产品原型。</p>
      <ul>
        <li>设计价值观</li>

        <li>设计模式</li>

        <li>可视化</li>

        <li>插画</li>

        <li>设计资源</li>

        <li>Sketch 工具集</li>

        <li>文章</li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
