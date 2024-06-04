import React from 'react';
import type { FC } from 'react';

interface LoginProps {
    name: string;
}

const Login: FC<LoginProps> = ({ name }) => {
    const csrfToken = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;
    
    console.log(csrfToken);
    
    return <div>Hello, {name}!
        <form action="/users/auth/github" method="post">
            <input type="hidden" name="authenticity_token" value={csrfToken} />
            <button type="submit">Login with GitHub</button>
        </form>
    </div>
};

export default Login;
