import React, { useEffect } from 'react';

import AuthStack from './AuthStack';
import AppStack from './AppStack'
import { useSelector } from 'react-redux';

const Stacks = () => {
    const { name, token } = useSelector(state => state.authReducer);

    useEffect(() => {
      console.log("nameeee",name)
      console.log("tokennnn",token)
    }, [name, token])

    return (
        <>
          {token  ? <AppStack /> : <AuthStack />}
        </>
    )
}

export default Stacks;