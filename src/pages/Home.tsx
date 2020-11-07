import React, { useState, useEffect, useRef } from 'react';

import Side from '../components/side'
import Screen from '../components/screen'
import Header from '../components/header'
import Events from '../components/events'

import { Container, Add, Close, Content } from '../styles/home';

function Home() {

  return (
    <Container>
      <Content>
        <Side />
        <Screen>
          <Header
            fileButton={false}
            backButton={false}
            nextButton={false}
            title='Ocorrências'
          />
          <Events />
        </Screen>
      </Content>
    </Container>
  )
}

export default Home;