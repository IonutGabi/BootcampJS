import Axios from "axios";

import { AccountApiModel } from "./account.api.model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (
  account: AccountApiModel
): Promise<AccountApiModel> =>
  Axios.post<AccountApiModel>(url, account).then(({ data }) => data);
