import React, { useEffect, useState } from "react";
import "./stylesMessages";
import ChatListitem from "./ChatListItem";
import ChatIntro from "./ChatIntro";
import ChatWindow from "./ChatWindow";
import NewChat from "./NewChat";

import {
  MdDonutLarge,
  MdChat,
  MdMoreVert,
  MdOutlineSearch,
} from "react-icons/md";
import MessagesAPI from "../../actions/Api";

import {
  AppWindow,
  Avatar,
  ChatList,
  ContentArea,
  Search,
  Sidebar,
  SidebarHeader,
  SidebarHeaderButtons,
  TextInput,
} from "./stylesMessages";
import "../../actions/Api";

const Messages = (props) => {
  const [chatlist, setChatlist] = useState([]);
  const [user, setUser] = useState(null);
  const [activeChat, setActiveChat] = useState({});
  const [showNewChat, setshowNewChat] = useState(false);

  useEffect(() => {
    if (user !== null) {
      return MessagesAPI.onChatList(user.id, setChatlist);
    }
  }, [user]);

  const handleNewChat = () => {
    setshowNewChat(true);
  };

  return (
    <AppWindow>
      <Sidebar>
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setshowNewChat}
        />
        <SidebarHeader>
          <Avatar>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="" />
            ) : (
              <img src="/images/user.svg" alt="" />
            )}
          </Avatar>
          <SidebarHeaderButtons>
            <button>
              <MdDonutLarge style={{ color: "#919191" }} />
            </button>
            <button onClick={handleNewChat}>
              <MdChat style={{ color: "#919191" }} />
            </button>
            <button>
              <MdMoreVert style={{ color: "#919191" }} />
            </button>
          </SidebarHeaderButtons>
        </SidebarHeader>
        <Search>
          <TextInput>
            <MdOutlineSearch fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="search or start a new conversation"
            />
          </TextInput>
        </Search>
        <ChatList>
          {chatlist.map((item, key) => (
            <ChatListitem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </ChatList>
      </Sidebar>
      <ContentArea>
        {activeChat.chatId !== undefined && (
          <ChatWindow user={user} data={activeChat} />
        )}
        {activeChat.chatId === undefined && <ChatIntro />}
      </ContentArea>
    </AppWindow>
  );
};
export default Messages;
