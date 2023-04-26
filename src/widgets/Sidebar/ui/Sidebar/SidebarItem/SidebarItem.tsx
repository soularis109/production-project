import React from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from 'widgets/Sidebar/ui/Sidebar/Sidebar.module.scss';

import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';

interface SidebarItemProps {
    item?:SidebarItemType
    collapsed:boolean
}
const SidebarItem = ({ item, collapsed }:SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.item}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};

export default SidebarItem;
