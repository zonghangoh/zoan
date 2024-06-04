import React from 'react';
import type { FC } from 'react';

interface LandingProps {
    current_user: any;
    name: string;
}

const Landing: FC<LandingProps> = ({ current_user, name }) => {
    return <div>Hello, {current_user.id}!</div>
};

export default Landing;
