import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { RouteState } from "src/models";
import DanhMuc from "./DanhMuc";
import DashBoard from "./DashBoard";
import HeThong from "./HeThong";
import Post from "./Post";
export const ROUTES: RouteState[] = [
  {
    key: "1",
    label: "DashBoard",
    path: "/dashboard",
    Cmp: DashBoard,
    isPrivate: true,
    isSideBar: true,
    icon: DashboardOutlined,
  },
  {
    key: "2",
    label: "Post",
    path: "/post",
    isPrivate: true,
    Cmp: Post,
    isSideBar: true,
    icon: UserOutlined,
  },
  {
    key: "3",
    label: "Hệ thống",
    path: "/he-thong",
    isPrivate: true,
    Cmp: HeThong,
    isSideBar: true,
    icon: UserOutlined,
  },
  {
    key: "4",
    label: "Danh mục",
    path: "/danh-muc",
    isPrivate: true,
    Cmp: DanhMuc,
    isSideBar: true,
    icon: UserOutlined,
  },
];
