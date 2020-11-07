import React from 'react';
import { useHistory } from 'react-router-dom';
import {FiLogOut, FiUsers, FiArchive} from 'react-icons/fi';
import { FaFreeCodeCamp } from 'react-icons/fa';

import emerg from '../assets/emergencia.png'
import estoque from '../assets/estoque.png'
import manut from '../assets/manutencao.png'
import pista from '../assets/pista.png'

import { 
        Container, 
        Bar, 
        Emergência,
        Manutenção,
        Estoque,
        Pista,
        Logout,
        SignIn
      } from '../styles/components/side';

function Side() {
  const history = useHistory();
  var user = JSON.parse(localStorage.getItem('user') || '')

  function logout() {
    localStorage.clear();
    history.push('/');
  }

  return (
  <Container>
    <div style={{display: 'flex', flexDirection: 'row', background: '#58595B', height: 'auto', width: 400, alignItems: 'center'}} id='profile'>
      <img style={{height: 100, width: 100, borderRadius: 20, marginRight: 15}} src={`data: image/jpeg; base64, ${user.image}`} alt="foto"/>
      <div style={{display: 'flex', flexDirection: 'column', background: '#58595B', height: 'auto', justifyContent: 'center'}} id='profile'>
        <h1 style={{color: '#fff', fontSize: 18, width: '100%', textAlign: 'center'}} >{user.name}</h1>
        <p style={{color: '#fff', fontSize: 15, width: '100%', textAlign: 'center', fontWeight: 'bold'}}>{user.position}</p>
        <a onClick={()=>{alert('teste')}} className="button" id='forgot'>Editar</a>
      </div>
    </div>
    <Bar />
    <SignIn onClick={()=>{alert('teste')}} className="button" >
      <FiArchive size={30} color='#fcfcff'/>
      <p>Ocorrências</p>
    </SignIn>
    {
      user.master == 1 &&
        <SignIn onClick={()=>{alert('teste')}} className="button" >
          <FiUsers size={30} color='#fcfcff'/>
          <p>Cadastrar Membro</p>
        </SignIn>
    }
    <Emergência onClick={()=>{alert('teste')}} className="button" >
      <img src={emerg} alt="emergencia" />
      <p>Emergência</p>
    </Emergência>
    <Manutenção onClick={()=>{alert('teste')}} className="button" >
      <img src={manut} alt="emergencia" />
      <p>Manutenção</p>
    </Manutenção>
    <Estoque onClick={()=>{alert('teste')}} className="button" >
      <img src={estoque} alt="emergencia" />
      <p>Estoque</p>
    </Estoque>
    <Pista onClick={()=>{alert('teste')}} className="button" >
      <img src={pista} alt="emergencia" />
      <p>Pista</p>
    </Pista>
    <Logout onClick={()=>{logout()}}>
      <FiLogOut size={30} color='#fcfcff'/>
      <p>Logout</p> 
    </Logout>
  </Container>
  )
}

export default Side;