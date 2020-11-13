import { useTranslation } from 'react-i18next';

interface Props {
  path: any
}

export function Translator(props: Props) {
  const { t } : any = useTranslation()

  return t(props.path)
}