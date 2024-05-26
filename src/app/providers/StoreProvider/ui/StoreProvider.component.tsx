import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {store} from '../config/store';

export default function StoreProvider({children}: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
