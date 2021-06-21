import React from "react";
import classNames from "classnames";
import { isToday, format } from "date-fns"

import "./DialogItem.scss";

import { IconReaded, Avatar } from "components";


const getMessageTime = (created_at) => {
    if (isToday(created_at)) {
        return format(
            new Date(created_at),
            "HH:mm"
        )
    } else if (created_at) {
        return format(
            new Date(created_at),
            "dd.mm.yyyy"
        )
    }
}


const DialogItem = ({ _id, user, text, unread, created_at, isMe, onSelect }) => {

    console.log(_id)

    return(
        <div className={classNames("dialogs__item", {
            "dialogs__item--online": user.isOnline
        })}
        onClick={onSelect.bind(this, _id)}
        >
            <div className="dialogs__item-avatar">
                <Avatar user={user}/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {getMessageTime(created_at)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{text}</p>
                    {isMe && <IconReaded isMe={false} isReaded={false}/>}
                    {unread > 0 && (
                        <div className="dialogs__item-info-bottom-count">
                            {unread > 9 ? "+10" : unread}
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default DialogItem;