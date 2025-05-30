import ApplicationLogo from '@/Components/ApplicationLogo';
import customTheme from '@/Data/theme.json';
import { HddOutlined, HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from '@inertiajs/react';
import { Avatar, Breadcrumb, Button, ConfigProvider, Dropdown, Layout, Menu, theme } from 'antd';
import { useState } from 'react';

export default function AuthenticatedLayout({ children, auth, breadcrumbs = [], menu = '' }) {
  const [activeMenu, setActiveMenu] = useState(menu || route(route().current()));
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const dropdowns = [
    {
      label: `Logged in as - ${auth.user.name}`,
      key: '0',
      type: 'link',
    },
    {
      type: 'divider',
    },
    {
      label: <a href={route('logout')}>Logout</a>,
      key: '2',
    },
  ];

  return (
    <ConfigProvider componentSize="large" theme={customTheme}>
      <Layout>
        <Layout.Sider trigger={null} collapsible collapsed={collapsed} theme="light">
          <div className="sticky top-0 z-50 flex h-16 items-center justify-center !bg-white">
            <Link href={route('dashboard')}>
              <ApplicationLogo
                className="block h-9 w-auto fill-current text-gray-800"
                collapsed={collapsed}
              />
            </Link>
          </div>
          <Menu
            className="sticky top-16 z-50 min-h-[calc(100vh-4rem)] space-y-2"
            mode="vertical"
            defaultSelectedKeys={[activeMenu]}
            items={[
              {
                key: route('dashboard'),
                icon: <HomeOutlined className="mr-4" />,
                label: <Link href={route('dashboard')}>Dashboard</Link>,
              },
              {
                key: route('inventory.index'),
                icon: <HddOutlined className="mr-4" />,
                label: <Link href={route('inventory.index')}>Inventory</Link>,
              },
            ]}
          />
        </Layout.Sider>
        <Layout>
          <Layout.Header
            className="sticky top-0 z-50"
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div className="flex justify-between pr-4">
              <div className="flex items-center space-x-4 px-4">
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 40,
                    height: 40,
                  }}
                />
                <Breadcrumb items={breadcrumbs} />
              </div>
              <Dropdown menu={{ items: dropdowns }} placement="bottomRight" trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <Avatar
                    style={{
                      backgroundColor: '#82a5f6',
                      verticalAlign: 'middle',
                    }}
                    size="medium"
                    gap={4}
                  >
                    {auth.user.name.slice(0, 1)}
                  </Avatar>
                </a>
              </Dropdown>
            </div>
          </Layout.Header>
          <Layout.Content className="min-h-[60vh] p-6">{children}</Layout.Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
