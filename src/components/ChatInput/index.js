import React, { useState } from "react";
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';
import { Input, Button } from "antd";

import "./ChatInput.scss";

const ChatInput = () => {

    const [value, setValue] = useState("");

    return(
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="circle" icon={<SmileOutlined style={{ marginLeft: "12px"}}/>} />
            </div>
            <Input 
                onChange={e => setValue(e.target.value)} 
                size="large" 
                placeholder="Введите текст сообщения…" 
            />
            <div className="chat-input__actions">
                <div className="chat-input__smile-btn">
                    <Button type="circle" icon={<CameraOutlined />} />
                    {value ? 
                        (<Button type="circle" icon={<SendOutlined />} />) 
                        : 
                        (<Button type="circle" icon={<AudioOutlined />} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default ChatInput;