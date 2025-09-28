import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/common/header';

export const MasterTemplate: React.FC = () => {
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
    </>;
};
