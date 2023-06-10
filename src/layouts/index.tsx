import { Link, Outlet } from 'umi';

import Menu from '../components/menu';
import Submenu from '../components/submenu';
import styles from './index.less';

export default function Layout() {
  return (
    <div className='flex h-full'>
      <Menu />
      <Submenu />
      <div className={styles.navs}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li>
            <a href="https://github.com/umijs/umi">Github</a>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
