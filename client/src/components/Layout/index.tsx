import { Layout } from "antd";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";
import SideBarLayout from "./SideBarLayout";
import AppContent from "src/routes/index";

const { Content } = Layout;

export default function Index() {
  return (
    <Layout>
      <SideBarLayout />
      <Layout>
        <HeaderLayout />
        <Content className="content">
          <AppContent />
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
}
