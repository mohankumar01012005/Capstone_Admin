import React, { useState } from "react";

import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  chakra,
  Box,
  Grid,
  Tooltip,
  Text,
  Avatar,
  Button,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";



const Deny = () => {

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )
  const OverlayOne = () => (
    <ModalOverlay
   bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  );
    const confirm=()=>{
      onClose();
      Deleteuser();
    }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  
  return (
    <div>
      <Button
        margin="5vh 0vw 0 9vw"
        height="7vh"
        colorScheme="orange"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Deny
      </Button>
      <Modal  isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent height="45vh">
          <ModalHeader>Hey Admin!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure You want to Deny This Player?</Text>
          </ModalBody>
          <ModalFooter>
            <Button marginRight="15vw" onClick={onClose}>Close</Button>
            <Button onClick={confirm} colorScheme='red'>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Deny;
