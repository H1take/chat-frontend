import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "redux/actions";
import { Messages as BaseMessages } from "components";


const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {

    const messagesRef = useRef(null);

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
    }, [currentDialogId]);

    useEffect(() => {
        
    })

    return (
        <BaseMessages 
            items={items} 
            isLoading={isLoading}
        />
    );
}

export default connect(({ dialogs, messages }) => ({ 
    currentDialogId: dialogs.currentDialogId, 
    items: messages.items,
    isLoading: messages.isLoading
}), messagesActions)(Dialogs);