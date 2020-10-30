import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '@/components/layout';
import { selectIsLogin } from '@/application/redux/selectors/auth';
import { setLogin, setLogout } from '@/application/redux/actions/auth';

function Home(){
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  function toggleLogin(){
    if(isLogin){
      dispatch(setLogout());
    } else {
      dispatch(setLogin());
    }
  }

  return (
    <Layout pageTitle="Homapage">
      <h1>home</h1>
      <h1>isLogin : {`${isLogin}`}</h1>

      <button type="button" onClick={() => toggleLogin()}>Toggle Login</button>
      <div>
        {process.env.NEXT_PUBLIC_API_ENDPOINT}
      </div>
    </Layout>
  );
}

export default Home;