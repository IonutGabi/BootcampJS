import Axios from "axios";

import { AccountApiModel, MovementApiModel } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const urlAccountList = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getMovements = (accountId: string): Promise<MovementApiModel[]> =>
  Axios.get<MovementApiModel[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

export const getAccountList = (): Promise<AccountApiModel> =>
  Axios.get<AccountApiModel>(urlAccountList).then((response) => response.data);
