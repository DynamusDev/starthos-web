/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Header, Side, Screen, Translator } from '../components'
import { color } from '../theme'
import {api, rab} from '../services/api'

import { 
        Container, 
        Content,
      } from '../styles/maintenance';

export function Maintenance() {
  const [value, onChange] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [yesColor, setYesColor] = useState(color.grey);
  const [noColor, setNoColor] = useState(color.grey);
  const [types, setTypes] = useState([]);
  const [type, setType] : any = useState([]);
  const [isNow, setIsNow] = useState(true);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [prefix, setPrefix] = useState('');
  const [cabeceira_dePouso, setCabeceira_dePouso] = useState('');
  const [numero_passageiros, setNumero_Passageiros] = useState('');
  const [tipo_deCarga, setTipo_deCarga] = useState('');
  const hoje = (new Date().getDate() < 10 ? '0' : '') + new Date().getDate().toString() + '/' + (new Date().getMonth() < 9 ? '0' : '') + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString()
  var user = JSON.parse(localStorage.getItem('user') || '');

  async function getTypes() {
    const response = await api.get('type?category=emergência')
    console.log(response.data)
    setTypes(response.data.type)
  }

  async function submit() {
    if (type.length === 0) {
      alert(`Por favor, selecione o tipo de ocorrência`)
    } else if (date === '') {
      alert(`Por favor, informe a data da ocorrência`)
    } else if (time === '') {
      alert(`Por favor, informe o horário da ocorrência`)
    } else if (description === '') {
      alert(`Por favor, faça uma breve descrição do ocorrido`)
    } else {
      setLoading(true)
      var modelo_aeronave
      if(prefix !== ''){
        const consult = await rab.get(`/${prefix}`)
        modelo_aeronave = consult.data.modelo
      }
      const category = 'emergência'
      const response = await api.post('/events', {
        isNow,
        date,
        time,
        type,
        description,
        status: 'ativo',
        user,
        local: user.locations[0],
        category,
        tasks: type.tasks,
        prefix,
        cabeceira_dePouso,
        modelo_aeronave,
        numero_passageiros,
        tipo_deCarga,
      })

      if(response.data.status === 201) {
        setLoading(false)
        alert(`A ocorrência com ID ${response.data.event.id} foi criada com sucesso`)
        setDescription('')
        setIsNow(true)
        setDate(hoje)
        setTime((new Date().getHours() < 10 ? '0' : '') + new Date().getHours().toString() + ':' + (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes().toString())
        setYesColor(color.green)
        setNoColor(color.grey)
      }
    }
  }

  useEffect(()=>{
    getTypes()
    setIsNow(true)
    setDate(hoje)
    setTime((new Date().getHours() < 10 ? '0' : '') + new Date().getHours().toString() + ':' + (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes().toString())
    setYesColor(color.green)
    setNoColor(color.grey)
  }, [])

  function clickYes() {
    setIsNow(true)
    setDate(hoje)
    setTime((new Date().getHours() < 10 ? '0' : '') + new Date().getHours().toString() + ':' + (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes().toString())
    setYesColor(color.green)
    setNoColor(color.grey)
  }
  function clickNo() {
    setIsNow(false)
    setNoColor(color.green)
    setYesColor(color.grey)
  }

  return (
    <Container>
      <Content>
        <Side />
        <Screen>
          <Header
            background={color.manutenção}
            title='manutenção'
            textStyle={{color: color.white}}
          />
          <Calendar
            value={value}
            
          />
        </Screen>
      </Content>
    </Container>
  )
}