import React, { useState } from 'react';
import { Router, Route, Switch, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import UpButton from './routes/UpButton';
import UpAlert from './routes/UpAlert';
import UploadPage from './routes/UploadPage';
import styles from './routes/IndexPage.css';
import { menuList } from './utils/menu';
const leftMenuHeight = window.innerHeight;
const rightContentWidth = window.innerWidth - 275;
function RouterConfig({ history }) {

  const [menuState, setMenuState] = useState(0);
  //选中状态
  const setMenuActive = (e) => {
    setMenuState(e.currentTarget.getAttribute('index'));
  }
  return (
    <Router history={history}>
      <div>
        <div>
          <div className={styles.header}>
            前端组件库PC端文档平台
      </div>
          <div className={styles.leftMenu} style={{ height: leftMenuHeight }}>
            <ul>
              {
                menuList ? menuList.map((item) => (
                  <li index={item.id} className={menuState == item.id ? styles.activeLi : ''} onClick={setMenuActive} key={item.id}><Link to={item.path}>{item.name}</Link></li>
                )) : ''
              }
            </ul>
          </div>
          <div className={styles.rightContent} style={{ width: rightContentWidth }}>
            <Switch>
              <Route path="/" exact component={IndexPage} />
              <Route path="/upButton" exact component={UpButton} />
              <Route path="/upAlert" exact component={UpAlert} />
              <Route path='/upLoad'exact component={UploadPage} />
            </Switch>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default RouterConfig;
