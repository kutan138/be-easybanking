import { DocumentDefinition, FilterQuery } from "mongoose";
import { omit } from "lodash";
import User, { UserDocument, UserSaveServer } from "./user.model";
import config from "config";

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await User.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function createUserServer(
  input: DocumentDefinition<UserSaveServer>
) {
  try {
    return await User.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export const createSuperUser = async () => {
  try {
    const email: UserSaveServer["email"] = config.get("super_admin_email");
    const password: string = config.get("super_admin_pwd");
    const name: string = config.get("super_admin_name");
    const body: UserSaveServer = { email, password, name };
    const isCheckExisted = await validatePassword({ email, password });
    if (!isCheckExisted) {
      const user = await createUserServer(body);
      console.log(`Create user successfully ${user}`);
    } else {
      console.log("User is exsited");
    }
  } catch (error) {
    console.log(`Have error: ${error}`);
  }
};

export async function findUserById(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}

export async function validatePassword({
  email,
  password,
}: {
  email: UserDocument["email"];
  password: string;
}) {
  const user = await User.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
}
