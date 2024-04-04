import React, { useState,useContext } from "react";
import { AppContext } from "./ParentContext";
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



const Accept = () => {

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
// console.log(id);


  }
  const {id}=useContext(AppContext)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  
  return (
    <div>
      <Button
        margin="5vh 0vh 0vw 0vw"
        height="7vh"
        colorScheme="blue"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Accept
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent height="45vh">
          <ModalHeader>Hey Admin!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure You want to Accept This Player?</Text>
            <Text>{id}</Text>
          </ModalBody>
          <ModalFooter>
          <Button marginRight="15vw" onClick={onClose}>Close</Button>
            <Button onClick={confirm}  colorScheme='red'>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Accept;
