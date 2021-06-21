import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Empty, Spin } from "antd";

import { Message } from "components";

import "./Messages.scss";


const Messages = ({ ref ,items, isLoading }) => {

    return (
        <div ref={ref} className={classNames("messages", {"messages--loading": isLoading})}>
            {
                isLoading ?
                    (<Spin size="large" tip="Загрузка сообщений..." />)
                    : 
                        items && !isLoading ? 
                            (<div>
                                {items.map(item => (
                                    <Message {...item}/>))
                                }
                            </div>)
                         : (<Empty description="Начните диалог прямо сейчас 🌝"/>)
            }
        </div>
    );
    
    // items ? (
    //     <div>
    //         {items.map(item => (<Message {...item}/>))}
    //     </div>
    // ) : (
    //     <Empty description="Начните диалог прямо сейчас 🌝"/>
    // );
}

Messages.propTypes = {
    items: PropTypes.array
}


export default Messages;