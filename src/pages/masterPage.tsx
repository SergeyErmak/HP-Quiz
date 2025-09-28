import React from 'react';
import { Outlet } from 'react-router-dom';

export const MasterTemplate: React.FC = () => {
    return <>
        <main>
            <Outlet />
        </main>
    </>;
};
