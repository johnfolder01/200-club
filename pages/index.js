import Head from 'next/head';
import React from 'react';
import withLayout from '../lib/withLayout';

const Index = ({ user }) => (
        <div
            style={{ padding: '10px 45px' }}
        >
            <Head>
                <title>Index page</title>
                <meta name="description" content="This is the description of the index page" />
            </Head>
            <p>Content on Index page</p>
            <p>Email: {user.email}</p>
        </div>
    );

Index.getInitialProps = async ({ query }) => ({ user: query.user });


export default withLayout(Index);