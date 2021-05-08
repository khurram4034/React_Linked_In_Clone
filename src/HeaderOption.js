import React from 'react';
import './HeaderOption.css';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && (
                <Avatar src={user?.photoUrl} className='sidebar__avatars'>
                    {user?.email[0]} </Avatar>
                )}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    );
}

export default HeaderOption

