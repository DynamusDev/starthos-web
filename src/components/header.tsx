/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Translator } from './'

import { 
  Head,
  Text,
  Back,
  Next,
  Space,
  File,
  Close,
} from '../styles/components/header';

interface TextStyle {
  textShadowOffset?:  {width: number,height: number},
  color?: string,
  fontSize?: number,
  fontStyle?: 'normal' | 'italic',
  fontWeight?: 'normal'| 'bold'| '100'| '200'| '300'| '400'| '500'| '600'| '700'| '800'| '900',
  lineHeight?: number,
  textAlign?: 'auto'| 'left'| 'right'| 'center'| 'justify',
  textDecorationLine?: 'none'| 'underline'| 'line-through'| 'underline line-through',
  textShadowColor?: string,
  fontFamily?: string,
  includeFontPadding?: boolean,
  textAlignVertical?: 'auto'| 'top'| 'bottom'| 'center',
  textTransform?: 'none'| 'uppercase'| 'lowercase'| 'capitalize',
  textDecorationStyle?: 'solid'| 'double'| 'dotted'| 'dashed',
};

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
  textStyle?: React.CSSProperties
}

export function Header(props: Props) {
  const history = useHistory();
  var user = JSON.parse(localStorage.getItem('user') || '')

  return (
  <Head style={{background: props.background ? props.background : 'transparent'}}>
    {
      props.backButton ? <Icon name='back' onClick={props.onBackClick} /> : <Space />
    }
    {
      props.fileButton ? <File onClick={props.onFileClick} /> : <Space />
    }
    <Text style={props.textStyle}> <Translator path={props.title} /> </Text>
    {
      props.closeButton ? <Close onClick={props.onCloseClick} /> : <Space />
    }
    {
      props.nextButton ? <Next onClick={props.onNextClick} /> : <Space />
    }
  </Head>
  )
}