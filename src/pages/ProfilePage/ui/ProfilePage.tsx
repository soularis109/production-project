import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/tests/useAppDispatch';

const reducers:ReducersList = {
    profile: profileReducer,
};
const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>{t('Profile page')}</div>
            <ProfileCard />
        </DynamicModuleLoader>

    );
};
export default ProfilePage;
