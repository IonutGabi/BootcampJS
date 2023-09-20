export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  movements: "/movements",
  account: "/create-account",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  createAccount: routesPrefixes.account,
  editAccount: "/edit-account/:id",
  movements: `${routesPrefixes.movements}/:id`,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
