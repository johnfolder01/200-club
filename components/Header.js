import React from 'react';
import Link from 'next/link';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { styleToolbar } from './SharedStyles';
import {Avatar, Hidden} from "@material-ui/core";

import MenuDrop from './MenuDrop';

const optionsMenu = [
    {
        text: 'Got question?',
        href: 'https://github.com/builderbook/builderbook/issues',
    },
    {
        text: 'Log out',
        href: '/logout',
    },
];

const Header = ({ user }) => (
    <div>
        <Toolbar
            style={styleToolbar}
        >
            <Grid
                container direction="row"
                justify="space-around"
                align="center"
            >
                <Grid
                    item sm={12} xs={9}
                    style={{ textAlign: 'left' }}
                >
                    {user ? (
                        <div>
                            <Hidden smDown>
                                <Link prefetch href="/">
                                    <a style={{ marginRight: '20px'}}>Settings</a>
                                </Link>
                            </Hidden>
                        </div>
                    ) : (
                        <Link prefetch href="/">
                            <Avatar
                            src="https://storage.googleapis.com/builderbook/logo.svg"
                            alt="Builder Book Logo"
                            style={{ margin: '0px auto 0px 20px'}}
                            />
                        </Link>
                    )}
                </Grid>
                <Grid
                    item sm={1} xs={3}
                    style={{ textAlign: 'right' }}
                >
                    {user ? (
                        <div style={{ whiteSpace: 'noWrap' }}>
                            {user.avatarUrl ? (
                                <MenuDrop options={optionsMenu} src={user.avatarUrl} alt={user.displayName} />
                            ) : null}
                        </div>
                    ):(
                        <Link prefetch href="/login">
                            <a style={{ margin: '0px 20px 0px auto'}}>Log In</a>
                        </Link>
                    )}

                </Grid>
            </Grid>
        </Toolbar>
    </div>
);

export default Header;