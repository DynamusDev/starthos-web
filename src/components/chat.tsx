import React, {useState, useEffect, useMemo} from 'react';
import { useHistory } from 'react-router-dom';

import { 
  Container
} from '../styles/components/chat';

interface Props {
  onFocus?: any,
  children?: any
  roomId?: number
}

export function Chat(props: Props) {
  const [messages, setMessages] = useState([])
  const [images, setImages] = useState([])
  const [tasks, setTasks] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [text, setText] = useState('')
  const [sala, setSala] = useState('')

  return (
    <Container onFocus={props.onFocus ? props.onFocus : () => {}}>
      {props.children}
    </Container>
  )
}