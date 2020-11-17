import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Image } from '../../styles/components/icon';
import addUser from './icons/addUser.png'
import aeroportos from './icons/aeroportos.png'
import emergência from './icons/emergencia.png'
import iconBranco from './icons/iconBranco.png'
import logout from './icons/logout.png'
import manutenção from './icons/manutenção.png'
import estoque from './icons/estoque.png'
import ocorrências from './icons/ocorrências.png'
import pista from './icons/pista.png'
import tasks from './icons/tasks.png'
import arquivos from './icons/arquivos.png'
import avatar from './icons/avatar.png'
import back from './icons/back.png'
import close from './icons/close.png'
import details from './icons/details.png'
import dropLeft from './icons/dropLeft.png'
import exportar from './icons/ocorrências.png'
import logotipoHorizontal from './icons/logotipoHorizontal.png'
import membership from './icons/membership.png'
import menu from './icons/menu.png'
import search from './icons/search.png'
import videoCall from './icons/videoCall.png'
import editUser from './icons/user.png'
import translator from './icons/translator.png'
import brasilFlag from './icons/brasilFlag.png'
import usaFlag from './icons/usaFlag.png'

interface Props {
  onClick?: any,
  size?: number,
  width?: number,
  height?: number,
  style?: React.CSSProperties,
  name?:  'addUser' | 'aeroportos' | 'emergência' | 'iconBranco' |
          'logout' | 'manutenção' | 'ocorrências' | 'pista' | 'tasks' |
          'arquivos' | 'avatar' | 'back' | 'close' | 'details' | 'dropLeft' |
          'exportar' | 'logotipoHorizontal' | 'membership' | 'menu' | 'search' |
          'videoCall' | 'editUser' | 'translator' | 'brasilFlag' | 'usaFlag' | 'estoque'
}

export function Icon(props: Props) {
  const [img, setImg] = useState(Object)

  useEffect(()=>{
    if(props.name === 'addUser'){
      setImg(addUser)
    }else if(props.name === 'aeroportos'){
      setImg(aeroportos)
    }else if(props.name === 'emergência'){
      setImg(emergência)
    }else if(props.name === 'iconBranco'){
      setImg(iconBranco)
    }else if(props.name === 'logout'){
      setImg(logout)
    }else if(props.name === 'manutenção'){
      setImg(manutenção)
    }else if(props.name === 'ocorrências'){
      setImg(ocorrências)
    }else if(props.name === 'estoque'){
      setImg(estoque)
    }else if(props.name === 'pista'){
      setImg(pista)
    }else if(props.name === 'tasks'){
      setImg(tasks)
    }else if(props.name === 'arquivos'){
      setImg(arquivos)
    }else if(props.name === 'avatar'){
      setImg(avatar)
    }else if(props.name === 'back'){
      setImg(back)
    }else if(props.name === 'close'){
      setImg(close)
    }else if(props.name === 'details'){
      setImg(details)
    }else if(props.name === 'dropLeft'){
      setImg(dropLeft)
    }else if(props.name === 'exportar'){
      setImg(exportar)
    }else if(props.name === 'logotipoHorizontal'){
      setImg(logotipoHorizontal)
    }else if(props.name === 'membership'){
      setImg(membership)
    }else if(props.name === 'menu'){
      setImg(menu)
    }else if(props.name === 'search'){
      setImg(search)
    }else if(props.name === 'videoCall'){
      setImg(videoCall)
    }else if(props.name === 'editUser'){
      setImg(editUser)
    }else if(props.name === 'translator'){
      setImg(translator)
    }else if(props.name === 'usaFlag'){
      setImg(usaFlag)
    }else if(props.name === 'brasilFlag'){
      setImg(brasilFlag)
    }
  }, [])

  return (
    <Container onClick={props.onClick} >
      <Image 
        style={ {...props.style, height: props.height, width: props.width} } 
        src={img}
        alt='DEV: Informe o nome do ícone'
      />
    </Container>
  )
}