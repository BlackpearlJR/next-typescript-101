import toastr from 'toastr';
import Swal from 'sweetalert2';
import { Request } from '@/application/interfaces/RequestInterface.d';
import { AppStorage } from '@/application/helpers/storage';
import configs from '@/application/configs';

const dev = process.env.NODE_ENV === 'development';

export default function getQuery(): any{
  if (typeof window === 'undefined') return null;
  const { location } = window;

  const queryStrings = location && location.search.replace('?', '');

  const queryParams: any = {};

  if (queryStrings){
    const params = queryStrings.split('&');
    for (let i = 0; i < params.length; i += 1){
      const pair = params[i].split('=');
      queryParams[pair[0]] = decodeURIComponent(pair[1]);
    }
    return queryParams;
  }

  return null;
}

export async function APIRequest(action: Request){
  const { NEXT_PUBLIC_API_ENDPOINT } = process.env;
  const {
    method,
    url,
    data,
    notification = true,
    auth = false,
    env = true
  } = action;

  let reqURL = NEXT_PUBLIC_API_ENDPOINT + url;
  if (env === false){
    reqURL = url;
  }

  let token = null;
  const requestHeaders = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  if (dev){
    requestHeaders.set('Access-Control-Allow-Origin', '*');
    requestHeaders.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    requestHeaders.set('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, PATCH, DELETE');
  }

  if (auth){
    token = AppStorage.getAccessToken() ? `Bearer ${AppStorage.getAccessToken()}` : null;
    if (!token){
      Swal.fire({
        icon: 'error',
        title: 'Authentication Failure!',
        text: 'Please login',
        confirmButtonText: 'OK'
      })
        .then(() => {
          AppStorage.clearAuth();
          window.location.href = '/';
        });
      return null;
    }

    requestHeaders.set('Authorization', token);
  }

  if (notification){
    toastr.options = { ...configs.toastr };
  }

  return (
    fetch(reqURL, {
      method,
      headers: requestHeaders,
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res => {
        if (res){
          // * ห้ามลบเคสนี้
          switch (res.code){
            case 0:
              return res;

            case 1003:
            case 1005:
              Swal.fire({
                icon: 'warning',
                title: 'API Warning!',
                text: res.message,
                confirmButtonText: 'OK'
              }).then(() => {
                AppStorage.clearAuth();
                window.location.href = '/';
              });
              return res;

            default:
              if (notification) toastr.error(res.message || 'เกิดข้อผิดพลาด');
              return res;
          }
        }

        if (notification){
          if (res.code === 1003 || res.code === 1005){
            console.log();
          } else {
            toastr.error(res.message || 'เกิดข้อผิดพลาด');
          }
          return res;
        }

        return null;
      })
      .catch(error => {
        console.error('report error : ', error);
        if (notification){
          toastr.error(error.message || 'เกิดข้อผิดพลาด');
        }
        return error;
      })
  );
}
