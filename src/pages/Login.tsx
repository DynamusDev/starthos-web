import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import logo from '../assets/logo.svg'
import starthos from '../assets/starthos.svg'
import ReactLoading from 'react-loading';
import {Translator} from '../components';

import { api } from '../services/api'

import { Container, Powered } from '../styles/login';

export function Login() {
  const [email, setEmail] = useState('');
  const [emailP, setEmailP] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [forgot, setForgot] = useState(false)
  const history = useHistory();

  async function forgotPassword(e: { preventDefault: () => void; }) {
    e.preventDefault();
    try {
      const response = await api.post('forgot_password', {
        email: emailP
      })

      if (response.data.status === 400) {
        alert(`Erro ao enviar!!! ${response.data.error}`)
      } else if (response.data.status === 200) {
        alert(`Sucesso!!! ${response.data.message}`)
        setEmailP('')
        setForgot(false)
      }
    } catch {
      alert('Erro ao enviar!!!, Tente novamente')
    }
  }

  useEffect(() => {
      const value = localStorage.getItem('user')
      if (value !== null) {
        history.push('/home')
      }
  }, [history])

  async function handleLogin(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if(email === ''){
      alert('Por favor, preencha o campo de email')
    } else if(password === '') {
      alert('Por favor, preencha o campo de senha')
    } else{
      setLoading(true)
      try{
        const response = await api.post('sessions', {
                email,
                password
              }
            );
        if (response.data.status === 201){
          setLoading(false)
          localStorage.setItem('user', JSON.stringify(response.data.user));
          console.log(response.data)
          history.push('/home')
        }else if (response.data.status === 400 || response.data.status === 401){
          setLoading(false)
          alert(`Erro ao logar!!! ${response.data.error}`)
        }
      }catch(error) {
        setLoading(false)
        console.log(error)
        alert('Erro ao logar, tente novamente')
      }
    }
  }

  return (
    <Container>
      <Powered>Powered by Starthos</Powered>
      {
        loading ? 
          <ReactLoading type='spin' color='#333' />
            :
              forgot ? 
                <form onSubmit={forgotPassword}>
                  <img className="logo" src={logo} alt="Starthos"/>

                  <p><Translator path='forgotPassword' /></p>
          
                  <input 
                    placeholder="email@email.com.br"
                    value={emailP}
                    type='email'
                    onChange={e => setEmailP(e.target.value)}
                  />
                  <button className="button" type="submit">
                    <Translator path='send' />
                  </button>
                  <a onClick={()=>{setForgot(false)}} className="button" id='forgot'>
                    <Translator path='comeBackLogin' />
                  </a>
                </form>
                  :
                    <form onSubmit={handleLogin}>
                      <img className="logo" src={logo} alt="Starthos"/>

                      <p>Login</p>
              
                      <input 
                        placeholder="email@email.com"
                        value={email}
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                      />

                      <input 
                        placeholder='password'
                        value={password}
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                      />
              
                      <button className="button" type="submit">
                        <Translator path='signin' />
                      </button>
                      <a onClick={()=>{setForgot(true)}} className="button" id='forgot'>
                        <Translator path='forgotPassword' />
                      </a>
                    </form>
      }
    </Container>
  )
}