import React, { useEffect, useState } from 'react';
import styles from './layout.less';
import ProLayout, { SettingDrawer } from '@ant-design/pro-layout';
import { editerPages } from '@/routes';
import {
  Button,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';





function LayoutIndex(props: any) {
  const pathname = props.route.path;
  const [theme, setTheme] = useState({})
  return (
      <div
        id="pro-layout"
        style={{
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <ProLayout
          route={editerPages}
          location={{
            pathname,
          }}
          collapsedButtonRender={false}
          collapsed={true}
          onMenuHeaderClick={(e) => props.history.push('/')}
          menuItemRender={(item, dom) => (
            <a
              onClick={() => {
                props.history.push(`${item.path}`);
              }}
            >
              {dom}
            </a>
          )}
       
          rightContentRender={() => (
            <div>
              {/* <Button type="primary" style={{ marginRight: 10 }}>
                创建
              </Button> */}
              <Button type="primary" style={{ marginRight: 50 }}>
                  保存 <DownOutlined />
              </Button>
              <SettingDrawer
                pathname={pathname}
                enableDarkTheme
                getContainer={() => document.getElementById('pro-layout')}
                settings={theme}
                onSettingChange={(changeSetting) => {
                  setTheme(changeSetting);
                }}
                disableUrlParams={false}
              />
            </div>
          )}
          {...theme}
        >
          {props.children}
        </ProLayout>
      </div>
  );
}
export default LayoutIndex;
