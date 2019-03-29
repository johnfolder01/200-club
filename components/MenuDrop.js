import React, { useState } from 'react';
import Link from 'next/link';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';

function MenuDrop({ options, src, alt }) {
    const [ anchorEl, setAnchorEl ] = useState(null);
    const [open, setOpen ] = useState(false);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = ( ) => {
        setOpen(false);
    };

    return (
            <div>
                <Avatar
                    role="presentation"
                    aria-owns="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    onKeyPress={handleClick}
                    src={src}
                    alt={alt}
                    style={{ margin: '0px 20px 0px auto', cursor: 'pointer' }}
                />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <p />
                    {options.map(option => (
                        <div id="wrappingLink" key={option.text}>
                            <Link prefetch href={option.href} as={option.as || option.href}>
                                <a style={{ padding: '0px 20px' }}>{option.text}</a>
                            </Link>
                            <p />
                        </div>
                    ))}
                </Menu>
            </div>
    );
}

export default MenuDrop;

