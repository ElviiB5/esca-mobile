import React from 'react';

import AuthStack from './AuthStack';
import AppStack from './AppStack'
import { useSelector } from 'react-redux';

const Stacks = () => {
    const { name, rol } = useSelector(state => state.authReducer);

    return (
        <>
          {name && rol  ? <AppStack /> : <AuthStack />}
        </>
    )
}

export default Stacks;