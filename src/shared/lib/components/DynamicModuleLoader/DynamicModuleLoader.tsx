import React, { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?:Reducer
}
interface DynamicModuleLoaderProps {
    reducers:ReducersList
    removeAfterUnmount?: boolean
}

type ReducersListEntry = [StateSchemaKey, Reducer]

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        Object.entries(reducers).forEach(([name, reducer]) => () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove(name as StateSchemaKey);
                dispatch({ type: `@DESTROY ${name} reducer` });
            }
        });

        // eslint-disable-next-line
    }, []);
    return (
        <div>{children}</div>
    );
};
export default DynamicModuleLoader;
