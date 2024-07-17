import { Button, Icon } from '@chakra-ui/react'
import { HiArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Button
      position="absolute"
      top="0"
      left="0"
      w="4rem"
      h="3rem"
      p="0"
      background="transparent"
      onClick={() => navigate(-1)}
    >
      <Icon as={HiArrowLeft} width="3rem" height="2rem" />
    </Button>
  )
}

export default BackButton
