import { RouteProps } from "react-router";

export interface RouteState {
  key: string;
  label: string;
  path: string;
  Cmp: React.FC;
  exact?: boolean;
  isSideBar?: boolean;
  isPrivate?: boolean;
  icon?: any;
}
export type ProtectedRouteProps = {
  component: React.FC;
} & RouteProps;
