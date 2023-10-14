import React, { useEffect } from 'react';

import AuthStack from './AuthStack';
import AppStack from './AppStack'
import { useSelector } from 'react-redux';

const Stacks = () => {
    const { token } = useSelector(state => state.authReducer);

    return (
        <>
          {token  ? <AppStack /> : <AuthStack />}
        </>
    )
}

export default Stacks;