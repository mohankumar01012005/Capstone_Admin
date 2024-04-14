import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Box, Flex, Icon, Stack,Avatar, Image, Button, Heading, IconButton, useDisclosure, Drawer, DrawerContent, DrawerOverlay, useColorModeValue } from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai';
import { BsFolder2, BsCalendarCheck } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { RiFlashlightFill } from 'react-icons/ri';

export default function Index() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();

  const studentPage = () => {
    navigate('/example');
    console.log("AdminBoard: ");
  };
  const CoachPage = () => {
    navigate('/CoachData');
    console.log("Coach_Application: ");
  };
  const VerifiedStudent = () => {
    navigate('/AdminBoard/verifiedStudents');
    console.log("verifiedStudents");
  };
  const VerifiedCoach = () => {
    navigate('/AdminBoard/verifiedCoach');
    console.log("Verified_Coach: ");
  };

  return (
    <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh">
      <SidebarContent display={{ base: 'none', md: 'unset' }} CoachPage={CoachPage} studentPage={studentPage} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" studentPage={studentPage} CoachPage={CoachPage}/>
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justifyContent={{ base: 'space-between', md: 'flex-end' }}
          w="full"
          px="4"
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit', 'gray.700')}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow="sm"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
          />

          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="Ahmad"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>

        <Box as="main" p={14} minH="25rem" bg={useColorModeValue('auto', 'gray.800')}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="center"
            h="100%"
          >
            <Stack spacing={8}>
              <Box>
                <Heading color="blue.400" fontSize="3xl">
                  Admin Board
                </Heading>
                <Text fontSize="md" color="gray.500">
                  {/* Add your description here */}
                </Text>
              </Box>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent="center">
                {/* Add your buttons here */}
              </Stack>
            </Stack>
            {/* Add your image or other content here */}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

function SidebarContent({ studentPage,CoachPage, ...props }) {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Icon as={RiFlashlightFill} h={8} w={8} />
        <Text 
          fontSize="2xl"
          fontStyle={'oblique'}
          ml="2"
          color='brand.500'
          fontWeight="semibold"
        >
          CricElevate
        </Text>
      </Flex>
      <Flex direction="column" as="nav" fontSize="md" color="gray.600" aria-label="Main Navigation">
        <div onClick={studentPage}>
          <NavItem icon={AiOutlineTeam}>Student Applications</NavItem>
        </div>
        <div onClick={CoachPage}>
          <NavItem icon={AiOutlineTeam}>Coach Applications</NavItem>
        </div>
        <div onClick={studentPage}>
          <NavItem icon={AiOutlineTeam}>Verified Students</NavItem>
        </div>
        <div onClick={studentPage}>
          <NavItem icon={AiOutlineTeam}>Verified Coaches</NavItem>
        </div>
      </Flex>
    </Box>
  );
}

function NavItem({ icon, children, onClick }) {
  const color = useColorModeValue('gray.600', 'gray.300');

  return (
    <Flex
      align="center"
      px="4"
      py="3"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue('inherit', 'gray.400')}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.900'),
        color: useColorModeValue('gray.900', 'gray.200')
      }}
      onClick={onClick}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: color
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
}
