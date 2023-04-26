import { LoginSchema } from 'features/AuthByUsername';
import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'Kostya',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('Kostya')))
            .toBe({ username: 'Kostya' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '1323',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('1323')))
            .toBe({ password: '1323' });
    });
});
