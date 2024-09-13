import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
      <Menu.Item key="1">
        <Link to="/">Use useCallback</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/reducer">Reducer</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/customhook">Custom Hook</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/counter2">Coustome Counter 2</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/memohook">Memo Hook</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/refhook">Ref Hook</Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link to="/useeffecthook">Use Effect Hook</Link>
      </Menu.Item>
      <Menu.Item key="8">
        <Link to="/ustatehook">Use State Hook</Link>
      </Menu.Item>
      <Menu.Item key="9">
        <Link to="/usecontexthook">Use Context Hook</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
