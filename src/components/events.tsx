import React, {useState, useEffect, useMemo} from 'react';
import { useHistory } from 'react-router-dom';
import { api, sock } from '../services/api';
import socketio from 'socket.io-client';

import {Header, Translator} from './';

import folder from '../assets/folder.png'

import { 
  Container,
  Select,
  Event,
  EventList,
  Button,
  DataHora,
  DataText,
  Id,
  Details,
  Timming,
  Time,
  Body,
  ContentTitle,
  Content,
  Separate,
  Footer,
  FooterButton,
  ContentButton
} from '../styles/components/events';

interface Props {
  onFocus?: any,
  children?: React.ReactChild,
  onChange?: object,
}

export function Events(props: Props) {
  const [ativos, setAtivos] : any = useState([])
  const [finalizados, setFinalizados] : any = useState([])
  const [arquivados, setArquivados] : any = useState([])
  const [event, setEvent] : any = useState([])
  const [dropdown, setDropdown] = useState('Ativas')
  const [modalIsOpen,setIsOpen] = useState(false);
  const history = useHistory();
  var user = JSON.parse(localStorage.getItem('user') || '')

  const socket = useMemo(() => socketio(sock), [])

  useEffect(() => {
    socket.on(user.location, (data: any[]) => {
      ativos.push(data.filter((data: { status: string }) => data.status === 'ativo'))
      finalizados.push(data.filter((data: { status: string }) => data.status === 'finalizado'))
      arquivados.push(data.filter((data: { status: string }) => data.status === 'arquivado'))
    })
  }, [arquivados, ativos, finalizados, socket, user.location])

  function loadAtivo(ativo: any) {
    setEvent(ativo)
    setIsOpen(true)
  }

  function loadFinalizado(finalizado: any) {
    setEvent(finalizado)
    setIsOpen(true)
  }

  function loadArquivado(arquivado: any) {
    setEvent(arquivado)
    setIsOpen(true)
  }

  function closeModal(){
    setIsOpen(false);
  }

  function handleChat(event: any){
    localStorage["event"] = JSON.stringify(event);
    history.push('/chat')
  }

  async function handleArquivar(event: any) {
    const arquivar = await api.put(`/events/${event.id}`, {
      status: 'arquivado'
      }, {
        headers: {
          Authorization: user.name
      }
    })
    setIsOpen(false)
    alert(`Ocorrência com id ${event.id} arquivada com sucesso!!!`)

    const response = await api.get('events')
    const rAtivos = response.data.filter((response: { status: string; }) => response.status === 'ativo')
    setAtivos(rAtivos)
    const rFinalizados = response.data.filter((response: { status: string; }) => response.status === 'finalizado')
    setFinalizados(rFinalizados)
    const rArquivados = response.data.filter((response: { status: string; }) => response.status === 'arquivado')
    setArquivados(rArquivados)
  }

  async function handleFinalizar(event: any) {
    const finalizar = await api.put(`/events/${event.id}`, {
      status: 'finalizado'
      }, {
        headers: {
          Authorization: user.name
      }
    })
    setIsOpen(false)
    alert(`Ocorrência com id ${event.id} finalizada com sucesso!!!`)

    const response = await api.get('events')
    const rAtivos = response.data.filter((response: { status: string; }) => response.status === 'ativo')
    setAtivos(rAtivos)
    const rFinalizados = response.data.filter((response: { status: string; }) => response.status === 'finalizado')
    setFinalizados(rFinalizados)
    const rArquivados = response.data.filter((response: { status: string; }) => response.status === 'arquivado')
    setArquivados(rArquivados)
  }

  async function loadEvents() {
    const response = await api.get('events')
    const data = response.data
    console.log('CARREGOU', data)
    setAtivos(data.filter((data: { status: string; }) => data.status === 'ativo'))
    setFinalizados(data.filter((data: { status: string; }) => data.status === 'finalizado'))
    setArquivados(data.filter((data: { status: string; }) => data.status === 'arquivado'))
  }

  useEffect(() => {
    loadEvents()
  }, [])

  function handleChange(event: any) {
    setDropdown(event.target.value);
  }

  return (
    <Container onFocus={props.onFocus ? props.onFocus : () => {}}>
      {
        modalIsOpen ? 
          <Details>
            <Header 
              fileButton={user.keyResponder == true && event.status !== 'arquivado' ? true : false}
              onFileClick={()=>{handleArquivar(event)}} 
              title={event.id} 
              closeButton 
              onCloseClick={()=>{setIsOpen(false)}} 
            />
            <Timming>
              <Time>
                <ContentTitle> <Translator path='dateOfEvent' /> </ContentTitle>
                <Content> {event.date} </Content>
              </Time>
              <Time>
                <ContentTitle> <Translator path='timeOfEvent' /> </ContentTitle>
                <Content> {event.time} </Content>
              </Time>
            </Timming>
            <Body>
              <Timming>
                <Time>
                  <ContentTitle> <Translator path='typeOfEvent' /> </ContentTitle>
                  <Content> {event.type} </Content>
                </Time>
                {event.type === 'Aeronave Envolvida' && 
                  <Time>
                    <ContentTitle> <Translator path='aircraftPrefix' /> </ContentTitle>
                    <Content> {event.prefix} </Content>
                  </Time>
                }
              </Timming>
              {event.type === 'Aeronave Envolvida' &&
                <Timming>
                  <Time>
                    <ContentTitle> <Translator path='landingHeadboard' /> </ContentTitle>
                    <Content> {event.cabeceira_dePouso} </Content>
                  </Time>
                  <Time>
                    <ContentTitle> <Translator path='aircraftModel' /> </ContentTitle>
                    <Content> {event.modelo_aeronave} </Content>
                  </Time>
                </Timming>
              }
              <ContentTitle> <Translator path='responsibleForOpeningEvent' /> </ContentTitle>
              <Content> {event.name} </Content>

              <Separate />

              <ContentTitle> <Translator path='eventLocation' /> </ContentTitle>
              <Timming>
                <ContentTitle> {event.icao} </ContentTitle>
                <Content> - </Content>
                <Content> {event.airport} </Content>
              </Timming>

              <Time>
                { event.updatedBy !== '' && event.status === 'arquivado' ? 
                  <ContentTitle> <Translator path='filedBy' /> </ContentTitle>
                  : event.updatedBy !== '' && event.status === 'finalizado' &&
                    <ContentTitle> <Translator path='closedBy' /> </ContentTitle>
                }
                <Content> {event.updatedBy} </Content>
              </Time>

              <ContentTitle> <Translator path='status' /> </ContentTitle>
              <Content> {event.status} </Content>

              <Separate />

              <ContentTitle> <Translator path='description' /> </ContentTitle>
              <Content> {event.description} </Content>
            </Body>
            <Footer>
              {user.keyResponder == true && event.status !== 'arquivado'  && event.status !== 'finalizado' &&
                <FooterButton 
                  onClick={()=>{handleFinalizar(event)}}
                  style={{
                    backgroundColor: event.category === 'emergência' ? '#C40000' : event.category === 'manutenção' ? '#FF8A00' : event.category === 'estoque' ? '#0065A7' : event.category === 'pista' ? '#002A4E' : '#58595B', 
                  }}
                >
                  <ContentButton ><Translator path='closeEvent' /></ContentButton>
                </FooterButton>
              }
              <FooterButton 
                  onClick={()=>{handleChat(event)}}
                  style={{
                    backgroundColor: event.category === 'emergência' ? '#C40000' : event.category === 'manutenção' ? '#FF8A00' : event.category === 'estoque' ? '#0065A7' : event.category === 'pista' ? '#002A4E' : '#58595B', 
                  }}
                >
                  <ContentButton ><Translator path='goToCrisisRoom' /></ContentButton>
                </FooterButton>
            </Footer>
          </Details>
        :
        <>
          <Select onChange={handleChange}>
            <option value="Ativas" >Ativas</option>
            <option value="Finalizadas" >Finalizadas</option>
            <option value="Arquivadas" >Arquivadas</option>
          </Select>
          <Event>
            { dropdown === 'Ativas' ?
              <EventList>
                {ativos.map((ativo: { category: string; id: string | number | null | undefined; date: any; time: any; type: string }) => (
                  <Button
                    style={{
                      backgroundColor: ativo.category === 'emergência' ? '#C40000' : ativo.category === 'manutenção' ? '#FF8A00' : ativo.category === 'estoque' ? '#0065A7' : ativo.category === 'pista' ? '#002A4E' : '#58595B', 
                    }}
                    onClick={()=>{loadAtivo(ativo)}} 
                    key={ativo.id}
                  >
                    <DataHora>
                      <DataText id="dataText">{ativo.date}</DataText>
                      <DataText id="dataText">{ativo.time}</DataText>
                    </DataHora>
                    <Id className="id">{ativo.id}</Id>
                    <DataText id="dataText">{ativo.type}</DataText>
                  </Button>
                ))}
              </EventList>
              : dropdown === 'Finalizadas' ?
              <EventList>
                {finalizados.map((finalizado: { category: string; id: string | number | null | undefined; date: any; time: any; type: string }) => (
                  <Button
                    style={{
                      backgroundColor: finalizado.category === 'emergência' ? '#C40000' : finalizado.category === 'manutenção' ? '#FF8A00' : finalizado.category === 'estoque' ? '#0065A7' : finalizado.category === 'pista' ? '#002A4E' : '#58595B', 
                    }}
                    onClick={()=>{loadFinalizado(finalizado)}} 
                    key={finalizado.id}
                  >
                    <DataHora>
                      <DataText id="dataText">{finalizado.date}</DataText>
                      <DataText id="dataText">{finalizado.time}</DataText>
                    </DataHora>
                    <Id className="id">{finalizado.id}</Id>
                    <DataText id="dataText">{finalizado.type}</DataText>
                  </Button>
                ))}
              </EventList>
              : dropdown === 'Arquivadas' && 
                <EventList>
                  {arquivados.map((arquivado: { category: string; id: string | number | null | undefined; date: any; time: any; type: string }) => (
                    <Button
                      style={{
                        backgroundColor: arquivado.category === 'emergência' ? '#C40000' : arquivado.category === 'manutenção' ? '#FF8A00' : arquivado.category === 'estoque' ? '#0065A7' : arquivado.category === 'pista' ? '#002A4E' : '#58595B', 
                      }}
                      onClick={()=>{loadArquivado(arquivado)}} 
                      key={arquivado.id}
                    >
                      <DataHora>
                        <DataText id="dataText">{arquivado.date}</DataText>
                        <DataText id="dataText">{arquivado.time}</DataText>
                      </DataHora>
                      <Id className="id">{arquivado.id}</Id>
                      <DataText id="dataText">{arquivado.type}</DataText>
                    </Button>
                ))}
              </EventList>
            }
          </Event>
        </>
      }
    </Container>
  )
}