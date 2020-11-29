import React, { useState, useEffect, useRef } from 'react';
import ReactLoading from 'react-loading';

import { Header, Side, Screen, Translator } from '../components'
import { color } from '../theme'

import { 
  Container, 
  Content, 
  Form, 
  Input, 
  Title, 
  Ponto, 
  Text, 
  AirportsContainer, 
  AirportContainer,
  Checkbox,
  Submit,
  Select
} from '../styles/addUser';
import { api } from '../services/api'

export function AddUser() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buttonColor, setButtonColor] = useState('#transparent')
  const [telephone_number, setTelephone_number] = useState('');
  const [master, setMaster] = useState(false);
  const [keyResponder, setKey_responder] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [userProfiles, setUserProfiles] : any = useState({});
  const [userLocations, setUserLocations] : any = useState({});
  var user = JSON.parse(localStorage.getItem('user') || '');
  var locations:[] = user.locations

  async function getProfiles(){
    const response = await api.get('profiles')
    setProfiles(response.data.profiles)
  }

  useEffect(() => {
    getProfiles()
  }, [])

  async function Submit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if(name === ''){
      alert('Por favor, preencha o nome do usuário')
    }else if(userProfiles === {}){
      alert('Por favor, selecione um cargo para o usuário')
    }else if(userLocations === {}) {
      alert('Por favor, selecione um aeroporto de trabalho para o usuário')
    }else if (telephone_number === ''){
      alert('Por favor, informe o número de telefone do usuário')
    }else if(email === ''){
      alert('Por favor, informe o email do usuário')
    }else{
      setLoading(true)
      const data = {
        name, 
        position: [userProfiles], 
        telephone_number, 
        email,
        master, 
        keyResponder, 
        locations: [userLocations]
      }

      try{
        const response = await api.post('users', data)
          if(response.data.status === 201){
            setLoading(false)
            alert(`Sucesso!!! O usuário ${name} foi criado com sucesso`)
            setName('')
            setEmail('')
            setUserProfiles({})
            setUserLocations({})
            setTelephone_number('')
            setMaster(false)
            setKey_responder(false)
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

  return (
    <Container>
      <Content>
        <Side />
        <Screen>
          <Header
            fileButton={false}
            backButton={false}
            nextButton={false}
            background={color.grey}
            textStyle={{color: color.white}}
            title='addNewUser'
          />
          {
            loading 
              ? <div style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <ReactLoading type='spin' color='#333' />
                </div>
              : 
              <Form onSubmit={Submit}>
                <Title> <Translator path='name' /> </Title>
                <Input
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <Title> <Translator path='position' /> </Title>
                <Select value={userProfiles.profile}>
                  {profiles.map((profile: any) =>(
                    <option 
                      onClick={()=>{setUserProfiles(profile)}} 
                      value={JSON.stringify(profile)} 
                      style={{width: 'auto', textAlign: 'center', fontSize: 12, color: color.grey}}
                    > {profile.profile} 
                    </option>
                  ))}
                </Select>
                <Title> <Translator path='aeroportoDeTrabalho' /> </Title>
                <Select value={userLocations.airport}>
                  {locations.map((location: any) =>(
                    <option 
                      onClick={()=>{setUserLocations(location)}} 
                      value={JSON.stringify(location)} 
                      style={{width: 'auto', textAlign: 'center', fontSize: 12, color: color.grey}}
                    > {location.airport} 
                    </option>
                  ))}
                </Select>
                <AirportContainer 
                  onClick={(e)=>{
                    e.preventDefault()
                    setMaster(!master)
                  }}
                >
                  <Checkbox checked={master} onClick={()=>{setMaster(!master)}} />
                  <Text> <Translator path='userMaster' /> </Text>
                </AirportContainer>
                <AirportContainer 
                  onClick={(e)=>{
                    e.preventDefault()
                    setKey_responder(!keyResponder)
                  }}
                >
                  <Checkbox checked={keyResponder} onClick={()=>{setKey_responder(!keyResponder)}} />
                  <Text> <Translator path='userKeyResponder' /> </Text>
                </AirportContainer>
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
                <AirportContainer 
                  type='submit' 
                  style={{width: '60%', borderRadius: 8, background: color.pista, height: 50, justifyContent: 'center'}}
                >
                  <Title style={{marginBottom: 0, color: color.white}}>
                    <Translator path='submit' />
                  </Title>
                </AirportContainer>
              </Form>
          }
        </Screen>
      </Content>
    </Container>
  )
}