import { RouteProps } from "react-router";

export type RouteState = {
  isAuthenticated: boolean;
  authenticationPath: string;
  redirectPath: string;
  setRedirectPath: (path: string) => void;
} & RouteProps;

export type BookState = {
  id: string;
  title: string | undefined;
  author: string | undefined;
};
