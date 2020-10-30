export interface AuthReducer {
  isLogin: boolean;
  token: string;
}

export interface UserProfileInterface {
  _id: string;
  accountNumber: string;
  bankName: string;
  bonus: string;
  createDate: string;
  credit: number;
  firstName: string;
  lastName: string;
  name: string;
  prefix: string;
  username: string;
  password: string;
  isFacebook: boolean;
  isVerifyLine: boolean;
  point: number;
  tel: string;
  userId: boolean;
  wallet: number;
  walletCommission: any;
  walletMain: any;
  walletTransfer: any;
  walletWinLose: any;
}

export interface UserReducer {
  profile: UserProfileInterface;
}

export interface PrefixInterface {
  PREFIX_NAME: string;
  affiliate: boolean;
  autoLogin: boolean;
  background: string;
  banner: string;
  bottonGoToGame: boolean;
  changePassword: boolean;
  companyName: string;
  depositAuto: boolean;
  depositManual: boolean;
  depositMenu: any;
  isCreditCard: boolean;
  isDw: boolean;
  isLine: boolean;
  isNewAffiliate: boolean;
  isTrueMoney: boolean;
  isVpay: boolean;
  line: string;
  lineDetail: any;
  login: boolean;
  logo: string;
  logout: boolean;
  proCashBack: boolean;
  proCashBackFirst: boolean;
  product: string;
  promotion: boolean;
  register: boolean;
  settings: boolean;
  toGame: boolean;
  url: string;
  urlMobileProduct: string;
  urlWebProduct: string;
  website: string;
  _id: string;
}

export interface PartnerReducer {
  settings: PrefixInterface;
}
