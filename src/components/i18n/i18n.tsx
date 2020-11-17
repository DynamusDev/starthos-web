import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flag, Container } from '../../styles/components/i18n';
import { Icon } from '../'

interface Props {
  onClick?: any
}

export function I18n(props: Props) {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language);
  }

  const selectedLanguage = i18n.language

  return(
    <Container>
      <Flag onClick={()=>{handleChangeLanguage('pt-BR')}} >
        <Icon width={35} height={25} name='brasilFlag' />
      </Flag>
      <Flag onClick={()=>{handleChangeLanguage('en-US')}} >
        <Icon width={35} height={25} name='usaFlag' />
      </Flag>
    </Container>
  )
}