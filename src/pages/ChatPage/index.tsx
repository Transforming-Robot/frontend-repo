import React, { useState } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';

import { Title, Button, HorizontalBar } from '@/components/atoms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ConnectButton = styled(Button)``;

const DisconnectButton = styled(Button)``;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SendMessageContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const MessageInput = styled.input`
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  box-sizing: border-box;
  border: 1.8px solid #64768c;
  border-radius: 8px;

  padding: 12px;

  outline: none;

  &::placeholder {
    color: #b1b8c0;
  }
`;

const SendButton = styled(Button)`
  width: fit-content;
  margin-left: auto;

  white-space: nowrap;
`;

export function ChatPage() {
  const [connectStatus, setConnectStatus] = useState(false);
  const [socketId, setSocketId] = useState('');

  const [messageFromServerConnect, setMessageFromServerConnect] = useState('');
  const [messageToServer, setMessageToServer] = useState('');
  const [messageFromSever, setMessageFromServer] = useState('');

  const socket = io('http://localhost:3000', {
    path: '/chat',
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageToServer(event.target.value);
  };

  const handleConnectServer = () => {
    socket.emit('connectToServer', {
      data: '연결하고 싶어요',
    });
    socket.on('connectToServer', (message) => {
      setMessageFromServerConnect(message.data);
      setConnectStatus(true);
      setSocketId(message.id);
    });
  };

  const handleDisconnectServer = () => {
    socket.emit('disconnectToServer', {
      data: '연결해제 하고 싶어요',
    });
    socket.on('disconnectToServer', (message) => {
      setMessageFromServerConnect(message);
      setConnectStatus(false);
    });
  };

  const sendMessageHandler = () => {
    if (connectStatus) {
      socket.emit(`test`, {
        data: messageToServer,
      });
      socket.on(`test`, (message) => {
        setMessageFromServer(message);
      });
      console.log(`test`);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Title title="ChatterBox" />
        <ConnectButton label="Hi!" onClick={handleConnectServer} />
        <DisconnectButton label="Run!" onClick={handleDisconnectServer} />
      </HeaderContainer>
      <HorizontalBar />
      <span>서버 메시지 : {messageFromServerConnect}</span>
      <div>
        <div>
          <span>서버로 보낸 메시지 {messageToServer}</span>
        </div>
        <div>
          <span>서버에서 받은 메시지 {messageFromSever}</span>
        </div>
      </div>
      <HorizontalBar />
      <SendMessageContainer>
        <MessageInput
          placeholder="메시지를 입력해주세요"
          value={messageToServer}
          onChange={onChangeHandler}
        />
        <SendButton label="메시지 보내기" onClick={sendMessageHandler} />
      </SendMessageContainer>
    </Container>
  );
}
