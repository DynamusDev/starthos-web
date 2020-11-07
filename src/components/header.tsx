/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
  Head,
  Text,
  Back,
  Next,
  Space,
  File,
  Close,
} from '../styles/components/header';

interface Props {
  backButton?: boolean,
  nextButton?: boolean,
  fileButton?: boolean,
  closeButton?: boolean,
  onBackClick?: any,
  onNextClick?: any,
  onFileClick?: any,
  onCloseClick?: any,
  background?: string,
  title?: string,
  textStyle?: object
}

function Header(props: Props) {
  const history = useHistory();
  var user = JSON.parse(localStorage.getItem('user') || '')

  return (
  <Head style={{background: props.background ? props.background : 'transparent'}}>
    {
      props.backButton ? <Back onClick={props.onBackClick ? props.onBackClick : ()=>{}} /> : <Space />
    }
    {
      props.fileButton ? <File onClick={props.onFileClick ? props.onFileClick : ()=>{}} /> : <Space />
    }
    <Text style={props.textStyle}> {props.title} </Text>
    {
      props.closeButton ? <Close onClick={props.onCloseClick ? props.onCloseClick : ()=>{}} /> : <Space />
    }
    {
      props.nextButton ? <Next onClick={props.onNextClick ? props.onNextClick : ()=>{}} /> : <Space />
    }
  </Head>
  )
}

export default Header;