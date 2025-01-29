import { Flex, type FlexProps } from '../Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
  const { align = 'start' } = props
  return <Flex direction='column' {...props} align={align} />
}
