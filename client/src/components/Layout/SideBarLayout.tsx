import { ROUTES } from "src/routes/routes";
import { Layout, Menu } from "antd";
import { MenuClickEventHandler, MenuInfo } from "rc-menu/lib/interface";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { RouteState } from "src/models";

const { Sider } = Layout;
function SideBarLayout() {
  const location = useLocation();
  const history = useHistory();
  const ROUTES_SIDEBAR = ROUTES.filter((item: RouteState) => item.isSideBar);
  const currentPathname = location.pathname;
  const [selectedKey, setSelectedKey] = useState(
    ROUTES_SIDEBAR.find((_item: RouteState) =>
      currentPathname?.startsWith(_item.path)
    )?.key ?? ""
  );

  useEffect(() => {
    if (ROUTES_SIDEBAR) {
      const item = ROUTES_SIDEBAR.find((_item: RouteState) => {
        return currentPathname.startsWith(_item.path);
      });
      setSelectedKey(item?.key ?? "");
    }
  }, [ROUTES_SIDEBAR, currentPathname]);

  const clickHandler: MenuClickEventHandler = (item: MenuInfo) => {
    const clicked = ROUTES_SIDEBAR.find(
      (_item: RouteState) => _item.key === item.key
    );
    if (clicked && clicked.path) {
      history.push(clicked.path);
    }
  };
  return (
    <Sider className="sider" breakpoint="lg" collapsedWidth="0">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        onClick={clickHandler}
        selectedKeys={[selectedKey]}
      >
        {ROUTES_SIDEBAR.map((item: RouteState) => {
          return (
            <Menu.Item key={item.key} icon={<item.icon />}>
              {item.label}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}

export default SideBarLayout;
