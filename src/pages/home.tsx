import React from 'react';
import CurrentTime from '../components/CurrentTime.tsx';

export const Home: React.FC = () => {
    return <section className="home-page">
        <CurrentTime />
    </section>;
};
