import { LoginResponse } from "src/models/auth";
import { LoginPayload } from "src/redux/slices/auth.slice";
import axiosClient from "src/utils/axiosClient";

const authApi = {
  login(data: LoginPayload): Promise<LoginResponse> {
    const url = "/sessions";
    return axiosClient.post(url, data);
  },
};
export default authApi;
