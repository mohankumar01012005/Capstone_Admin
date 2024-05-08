import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import refresh from "../assets/images.png";
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
  Flex,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
// import Deny from "./Deny";
// import Accept from "./Accept";
import { AppContext } from "./ParentContext";

const OverlayOne = () => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="80%"
    backdropBlur="2px"
  />
);
const OverlayTwo = () => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="80%"
    backdropBlur="2px"
  />
);

const CoachData = () => {
  const { id, setId } = useContext(AppContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/checkCoach "
      );
      console.log(response.data);
      setData(response.data.coachData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const DeleteCoach=async(id,coachname)=>{
    try {
      const deleteCoach=await axios.delete(`http://localhost:3001/deletecoach/${coachname}/${id}`)
      console.log(DeleteCoach);
      
    } catch (error) {
      console.log(error);
      
    }
      }
  const DeleteCoachafterverified=async(id)=>{
    try {
      const deleteCoach=await axios.delete(`http://localhost:3001/DeleteCoachafterverified/${id}`)
      console.log(deleteCoach);
      
    } catch (error) {
      console.log(error);
      
    }
      }
  const VerifiedCoach=async(user)=>{
    try {
      const response=await axios.post("http://localhost:5001/createCoach",user)
      console.log(response);
      
    } catch (error) {
      console.log(err);
      
    }
      }

  return (
    <Container maxW="5xl" p={{ base: 5, md: 6 }} >
      <img
        style={{ cursor: "pointer", marginLeft: "80vw" }}
        width="5%"
        onClick={fetchData}
        src={refresh}
        alt="refresh"
      />
      <Grid templateColumns="repeat(auto-fill, minmax(17rem, 1fr))" gap={6} >
        {data.map((item, index) => (
          <Box marginLeft={"10vw"}key={index}w={"60vw"}>
            <Box
              p={4}
              border="1px solid"
              borderColor={useColorModeValue("gray.400", "gray.600")}
              rounded="md"
              _hover={{
                boxShadow: useColorModeValue(
                  "0 4px 6px rgba(160, 174, 192, 0.6)",
                  "0 4px 6px rgba(9, 17, 28, 0.4)"
                ),
              }}
            >
              <Tooltip
                label={item.state + ", " + item.country}
                aria-label={item.state + ", " + item.country}
                placement="top"
                size="sm"
              >
                <Box pos="relative">
                  <Avatar
                    src={item.photo}
                    name={item.firstName + " " + item.lastName}
                    size="xl"
                    borderRadius="md"
                  />
                  <Avatar
                    src={item.photo}
                    size="xs"
                    borderRadius="full"
                    pos="absolute"
                    bottom={0}
                    right="-12px"
                  />
                </Box>
              </Tooltip>
              <chakra.h1 fontSize="xl" fontWeight="bold" mt={2}>
                {item.firstName} {item.lastName}
              </chakra.h1>
              <Text fontSize="md" color="gray.500" mt={1}>
                Email: {item.email}
              </Text>
              <Text fontSize="md" color="gray.500">
                Phone: {item.phone}
              </Text>
           

              <Text fontSize="md" color="gray.500">
              state :{item.state}
              </Text>
              <Text fontSize="md" color="gray.500">
                Role: {item.role}
              </Text>
              <Text fontSize="md" color="gray.500">
                Highest Level Played: {item.highestLevelPlayed}
              </Text>
              <Text fontSize="md" color="gray.500">
              Address {item.address}
              </Text>
              <Text fontSize="md" color="gray.500">
              Description: {item.description}
              </Text>
              <Text fontSize="md" color="gray.500">
                is the coach online : {item.amionline}
              </Text>
              <Text fontSize="md" color="gray.500">
              country:{item.country}
              </Text>
              <Text fontSize="md" color="gray.500">
              Date Of Birth:{item.dateOfBirth}
              </Text>
              <Text fontSize="md" color="gray.500">
              Gender :{item.gender}
              </Text>
              <Text fontSize="md" color="gray.500">
              password :{item.password}
              </Text>
              <Text fontSize="md" color="gray.500">
              Detailed Description :{item.detailedDescription}
              </Text>
              <Text fontSize="md" color="gray.500">
              Role :{item.role}
              </Text>
              <Text fontSize="md" color="gray.500">
              Fee:{item.fee}
              </Text>
           
              <Flex display="flex">
                {/* <Accept/>
                <Deny /> */} 

                <Button margin="3vh 0 0 0" colorScheme='green' onClick={()=>{
                  VerifiedCoach(item)
                  DeleteCoachafterverified(item._id)
                }}>Accept</Button>
                <Button  margin="3vh 0 0 15vw" colorScheme='orange' onClick={()=>{DeleteCoach (item._id,item.email),console.log(item._id)}}>Deny</Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default CoachData;
