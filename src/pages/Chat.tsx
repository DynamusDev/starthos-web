import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { api, sock } from '../services/api';
import socketio from 'socket.io-client';

import { Header, Side, Screen, Icon } from '../components'

import { Container } from '../styles/chat';

export function Chat() {
  const history = useHistory();
  var event = JSON.parse(localStorage.getItem('event') || '')

  const socket = useMemo(() => socketio(sock), [])

  useEffect(() => {
    socket.on(event.id, (data: any[]) => {
      console.log(data)
    })
  }, [socket, event.id])

  return (
    <Container>
      <Side />
      <Screen>
        <Header
          textStyle={{color: '#FFF'}}
          backButton
          background={event.category === 'emergência' ? ('#C40000') : event.category === 'manutenção' ? ('#FF8A00') : event.category === 'estoque' ? ('#0065A7') : event.category === 'pista' ? ('#002A4E') : '#58595B'}
          onBackClick={()=>{history.push('/home')}}
          title={event.id}
        />
      </Screen>
    </Container>
  )
}