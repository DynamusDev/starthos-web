import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import { Header, Side, Screen, Translator } from '../components'
import { color } from '../theme'

import { 
  Container, 
  Content, 
  Form, 
  Input, 
  Title, 
  Text, 
  AirportContainer,
  Checkbox,
  Select
} from '../styles/edit';
import { api } from '../services/api'

export function Edit() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone_number, setTelephone_number] = useState('');
  const [master, setMaster] = useState(false);
  const [keyResponder, setKey_responder] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [userProfiles, setUserProfiles] : any = useState({});
  const [userLocations, setUserLocations] : any = useState({});
  const [userData, setUserData] = useState([])
  var user = JSON.parse(localStorage.getItem('user') || '');

  async function getData(){
    setName(user.name)
    setEmail(user.email)
    setTelephone_number(user.telephone_number)

    setUserData(JSON.parse(localStorage.getItem('user') || ''))
  }

  useEffect(() => {
    getData()
  }, [])

  async function EditWithPassword(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if(name === ''){
      alert('Por favor, preencha o nome do usuário')
    }else if (telephone_number === ''){
      alert('Por favor, informe o número de telefone do usuário')
    }else if(email === ''){
      alert('Por favor, informe o email do usuário')
    }else{
      setLoading(true)
      const data = {
        name, 
        position: user.position, 
        telephone_number, 
        email,
        password,
        master: user.master, 
        keyResponder: user.keyResponder, 
        locations: user.locations
      }

      try{
        const response = await api.put(`users/${user.id}`, data)
          if(response.data.status === 200){
            setLoading(false)
            localStorage.setItem('user', JSON.stringify(response.data.user));
            console.log(response.data.user)
            setUserData(response.data.user)
            alert(`Sucesso!!! O usuário ${name} foi atualizado com sucesso`)
          }else{
            setLoading(false)
            alert(response.data.error)
          }
      }catch(err){
        setLoading(false)
        console.log(err)
      }
    }
  }

  async function EditWithoutPassword(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if(name === ''){
      alert('Por favor, preencha o nome do usuário')
    }else if (telephone_number === ''){
      alert('Por favor, informe o número de telefone do usuário')
    }else if(email === ''){
      alert('Por favor, informe o email do usuário')
    }else{
      const data = {
        name, 
        position: user.position, 
        telephone_number, 
        email,
        master: user.master, 
        keyResponder: user.keyResponder, 
        locations: user.locations
      }

      try{
        const response = await api.put(`editWithoutPassword/${user.id}`, data)
          if(response.data.status === 200){
            localStorage.setItem('user', JSON.stringify(response.data.user));
            console.log(response.data.user)
            alert(`Sucesso!!! O usuário ${name} foi atualizado com sucesso`)
            setUserData(response.data.user)
            user = response.data.user
          }else{
            alert(response.data.error)
          }
      }catch(err){
        console.log(err)
      }
    }
  }

  return (
    <Container>
      <Content>
        <Side userData={userData} />
        <Screen>
          <Header
            fileButton={false}
            backButton={false}
            nextButton={false}
            background={color.grey}
            textStyle={{color: color.white}}
            title='editUserData'
          />
          {
            loading 
            ? <div style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ReactLoading type='spin' color='#333' />
              </div>
            : 
            <Form onSubmit={ password.length === 0 ? EditWithoutPassword : EditWithPassword }>
            <Title> <Translator path='name' /> </Title>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Title> <Translator path='position' /> </Title>
            <Text> {user.position[0].profile} </Text>
            <Title> <Translator path='aeroportoDeTrabalho' /> </Title>
            <Text> {user.locations[0].airport} </Text>
            <Title> <Translator path='phone' /> </Title>
            <Input
              value={telephone_number}
              onChange={e => setTelephone_number(e.target.value)}
            />
            <Title> <Translator path='Email' /> </Title>
            <Input
              value={email}
              type='email'
              onChange={e => setEmail(e.target.value)}
            />
            <Title> <Translator path='password' /> </Title>
            <Input
              value={password}
              type='password'
              onChange={e => setPassword(e.target.value)}
            />
            <AirportContainer 
              type='submit' 
              style={{width: '60%', borderRadius: 8, background: color.pista, height: 50, justifyContent: 'center'}}
            >
              <Title style={{marginBottom: 0, color: color.white}}>
                <Translator path='edit' />
              </Title>
            </AirportContainer>
          </Form>
          }
        </Screen>
      </Content>
    </Container>
  )
}