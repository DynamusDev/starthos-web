import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {FiLogOut, FiUsers, FiArchive} from 'react-icons/fi';
import { Button, Translator } from './'

import emerg from '../assets/emergencia.png'
import estoque from '../assets/estoque.png'
import manut from '../assets/manutencao.png'
import pista from '../assets/pista.png'

import { 
        Container, 
        Bar,
      } from '../styles/components/side';

export function Side() {
  const [i18n, setI18n] = useState(false);
  const history = useHistory();
  var user = JSON.parse(localStorage.getItem('user') || '');

  function logout() {
    localStorage.removeItem('user')
    history.push('/');
  }

  return (
  <Container>
    <div style={{display: 'flex', flexDirection: 'row', background: '#58595B', height: 'auto', width: 'auto', alignItems: 'center'}} id='profile'>
      <img style={{height: 100, width: 100, borderRadius: 20, marginRight: 15}} src={`data: image/jpeg; base64, ${user.image}`} alt="foto"/>
      <div style={{display: 'flex', flexDirection: 'column', background: '#58595B', height: 100, justifyContent: 'center'}} id='profile'>
        <h1 style={{color: '#fff', fontSize: 15, width: '100%', textAlign: 'left'}} >{user.name}</h1>
        <p style={{color: '#fff', fontSize: 13, width: '100%', textAlign: 'left', fontWeight: 'bold'}}>{user.position[0].profile}</p>
        <a onClick={()=>{alert('teste')}} className="button" id='forgot'>
          <Translator path='edit' />
        </a>
      </div>
    </div>
    <Bar />
    <Button name='emergência' onClick={()=>{alert('teste')}}/>
    <Button name='manutenção' onClick={()=>{alert('teste')}}/>
    <Button name='estoque' onClick={()=>{alert('teste')}}/>
    <Button name='pista' onClick={()=>{alert('teste')}}/>
    <Button name='aeroportos' onClick={()=>{alert('teste')}}/>
    <Button name='tasks' onClick={()=>{alert('teste')}}/>
    <Button name='ocorrências' onClick={()=>{history.push('/home')}}/>
    {
      user.master == 1 &&
      <>
        <Button name='addUser' onClick={()=>{history.push('/register')}}/>
        <Button name='editUser' onClick={()=>{alert('teste')}}/>
      </>
    }
    <Button i18n={i18n} name='translator' onClick={i18n === true ? ()=>{setI18n(false)} : ()=>{setI18n(true)}}/>
    <Button name='logout' onClick={logout}/>
  </Container>
  )
}