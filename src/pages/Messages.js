import React from "react";
import Leftnav from "../components/LeftNav";
// import { ChatEngine } from "react-chat-engine";
// import ChatFeed from '../components/ChatFeed';





const Messages = () => {

  // if(!localStorage.getItem('username')) return <SignInform />
  return (
    
    <div className="home">
    
      <Leftnav />
      {/* <ChatEngine
        height="80vh"
        projectID="4202d95f-4705-4dcd-9637-8685ffc872b1"
        userName="booba"
        userSecret="booba"
        renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
      /> */}
    </div>
  );
};

export default Messages;
