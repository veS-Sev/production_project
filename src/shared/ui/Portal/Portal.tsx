import { createPortal } from 'react-dom'

interface PortalProps {
  children?: React.ReactNode
  elem?: HTMLElement
}

export const Portal = (props: PortalProps) => {
  const { children, elem = document.body } = props
  return (
    createPortal(children, elem)

  )
}
