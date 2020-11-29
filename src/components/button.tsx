import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { color } from '../theme'
import { Icon, Translator, I18n } from './'

import { 
  Container
} from '../styles/components/button';

interface Props {
  to?: any,
  onClick?: any,
  type?: "button" | "submit" | "reset" | undefined,
  backColor?: string,
  i18n?: boolean,
  containerStyle?: React.CSSProperties,
  name?:  'addUser' | 'aeroportos' | 'emergência' | 'iconBranco' |
          'logout' | 'manutenção' | 'ocorrências' | 'pista' | 'tasks' |
          'arquivos' | 'avatar' | 'back' | 'close' | 'details' | 'dropLeft' |
          'exportar' | 'logotipoHorizontal' | 'membership' | 'menu' | 'search' |
          'videoCall' | 'editUser' | 'translator' | 'brasilFlag' | 'usaFlag' | 'estoque'
}

export function Button(props: Props) {
  const [background, setBackground] = useState(color.transparent)

  useEffect(()=>{
    if(props.name === 'addUser'){
      setBackground(color.transparent)
    }else if(props.name === 'aeroportos'){
      setBackground(color.white)
    }else if(props.name === 'emergência'){
      setBackground(color.emergência)
    }else if(props.name === 'iconBranco'){
      setBackground(color.transparent)
    }else if(props.name === 'logout'){
      setBackground(color.transparent)
    }else if(props.name === 'estoque'){
      setBackground(color.estoque)
    }else if(props.name === 'manutenção'){
      setBackground(color.manutenção)
    }else if(props.name === 'ocorrências'){
      setBackground(color.transparent)
    }else if(props.name === 'pista'){
      setBackground(color.pista)
    }else if(props.name === 'tasks'){
      setBackground(color.transparent)
    }else if(props.name === 'arquivos'){
      setBackground(color.transparent)
    }else if(props.name === 'avatar'){
      setBackground(color.transparent)
    }else if(props.name === 'back'){
      setBackground(color.transparent)
    }else if(props.name === 'close'){
      setBackground(color.transparent)
    }else if(props.name === 'details'){
      setBackground(color.transparent)
    }else if(props.name === 'dropLeft'){
      setBackground(color.transparent)
    }else if(props.name === 'exportar'){
      setBackground(color.transparent)
    }else if(props.name === 'logotipoHorizontal'){
      setBackground(color.transparent)
    }else if(props.name === 'membership'){
      setBackground(color.transparent)
    }else if(props.name === 'menu'){
      setBackground(color.transparent)
    }else if(props.name === 'search'){
      setBackground(color.transparent)
    }else if(props.name === 'videoCall'){
      setBackground(color.estoque)
    }else if(props.name === 'editUser'){
      setBackground(color.transparent)
    }else if(props.name === 'translator'){
      setBackground(color.transparent)
    }else if(props.name === 'usaFlag'){
      setBackground(color.transparent)
    }else if(props.name === 'brasilFlag'){
      setBackground(color.transparent)
    }
  }, [])

  return (
    <Container 
      className="button" 
      to={props.to}
      onClick={props.onClick}
      type={props.type}
      style={{
        ...props.containerStyle, 
        background: background || props.backColor
        }} 
    >
      {
        props.i18n ? <I18n />
          : <>
              <Icon name={props.name} />
              <p style={{color: background === color.white ? color.black : color.white}}>
                <Translator path={props.name} />
              </p>
            </>
      }
    </Container>
  )
}