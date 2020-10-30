const AUTH_TOKEN: string = 'AUTH_TOKEN';
const REFRESH_TOKEN: string = 'REFRESH_TOKEN';
const USER_PROFILE: string = 'USER_PROFILE';
const REFERENCE: string = 'REFERENCE';
const DEPOSIT_TRANSSACTION: string = 'DEPOSIT_TRANSSACTION';
const FORCE_MOBILE: string = 'forceMobile';

export default class Storage{
  setAccessToken(token: string){
    if (typeof window !== 'undefined' && token){
      return sessionStorage.setItem(AUTH_TOKEN, token);
    }
    return null;
  }

  getAccessToken(){
    // return this.Cookies.get(AUTH_TOKEN, { path: '/', sameSite: true });
    if (typeof window !== 'undefined'){
      return sessionStorage.getItem(AUTH_TOKEN);
    }
    return null;
  }

  clearAccessToken(){
    // return this.Cookies.remove(AUTH_TOKEN, { path: '/', sameSite: true });
    if (typeof window !== 'undefined'){
      return sessionStorage.removeItem(AUTH_TOKEN);
    }
    return null;
  }

  setRefeshToken(token: string){
    // return this.Cookies.set(REFRESH_TOKEN, token, { path: '/', sameSite: true });
    if (typeof window !== 'undefined' && token){
      return sessionStorage.setItem(REFRESH_TOKEN, token);
    }
    return null;
  }

  getRefeshToken(){
    if (typeof window !== 'undefined'){
      return sessionStorage.getItem(REFRESH_TOKEN);
    }
    return null;
  }

  clearRefeshToken(){
    // return this.Cookies.remove(REFRESH_TOKEN, { path: '/', sameSite: true });
    if (typeof window !== 'undefined'){
      return sessionStorage.removeItem(REFRESH_TOKEN);
    }
    return null;
  }

  setProfile(profile: any){
    if (typeof window !== 'undefined' && profile){
      return sessionStorage.setItem(USER_PROFILE, JSON.stringify(profile));
    }
    return null;
  }

  getProfile(){
    if (typeof window !== 'undefined'){
      const profile = sessionStorage.getItem(USER_PROFILE);
      if (profile) return JSON.parse(profile);

      return null;
    }
    return null;
  }

  clearProfile(){
    if (typeof window !== 'undefined'){
      return sessionStorage.removeItem(USER_PROFILE);
    }
    return null;
  }

  setAffiliate(reference: string){
    if (reference) return localStorage.setItem(REFERENCE, reference);
    return null;
  }

  getAffiliate(){
    const reference = localStorage.getItem(REFERENCE);
    return reference;
  }

  clearLocalDepositTransaction(){
    localStorage.removeItem(DEPOSIT_TRANSSACTION);
  }

  clearAuth(){
    this.clearAccessToken();
    this.clearRefeshToken();
    this.clearProfile();
  }

  getLang(){
    if (typeof window !== 'undefined'){
      return localStorage.getItem('i18nextLng');
    }
    return null;
  }

  setForceMobile(){
    if (typeof window !== 'undefined'){
      return sessionStorage.setItem(FORCE_MOBILE, 'true');
    }
    return null;
  }

  getForceMobile(){
    if (typeof window !== 'undefined'){
      return sessionStorage.getItem(FORCE_MOBILE);
    }
    return null;
  }
}

export const AppStorage = new Storage();
export function clearAuth(){
  AppStorage.clearAccessToken();
  AppStorage.clearRefeshToken();
  AppStorage.clearProfile();
}
