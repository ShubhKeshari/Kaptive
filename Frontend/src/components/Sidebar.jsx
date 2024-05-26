import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FiTable,
  FiMenu,
  FiBarChart2,
  FiFileText,
  FiLogOut,
} from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { BiSolidBinoculars } from "react-icons/bi";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import BackgroundImg from "../assets/Background.jpg";
import Table from "../pages/Table";

const LinkItems = [
  { name: "Charts", icon: FiBarChart2, path: "/charts" },
  { name: "Tables", icon: FiTable, path: "/tables" },
  { name: "Reports", icon: FiFileText, path: "/reports" },
  { name: "Forecast", icon: BiSolidBinoculars, path: "/forecast" },
];

export function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      bgImg={BackgroundImg}
      bgRepeat={"repeat"}
      bgSize={"contain"}
    >
      <Router>
        <SidebarContent
          onClose={onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="xs"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>

        {/* mobilenav */}
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 56 }} pl="4" pr="4" pt="12">
          <Routes>
            <Route path="/charts" element={<div>Charts Page</div>} />
            <Route path="/tables" element={<Table/>} />
            <Route path="/reports" element={<div>Reports Page</div>} />
            <Route path="/forecast" element={<div>Forecast Page</div>} />
            <Route path="/" element={<div>Home Page</div>} />
          </Routes>
          {children}
        </Box>
      </Router>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#0000ff75", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 56 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex flexDirection="column" justifyContent="space-between" h="100%">
        <div>
          <Flex
            h="20"
            alignItems="center"
            mx="8"
            justifyContent="space-between"
          >
            <Text
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
              color="white"
            >
              Kaptive
            </Text>
            <CloseButton
              display={{ base: "flex", md: "none" }}
              onClick={onClose}
            />
          </Flex>
          {LinkItems.map((link) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              path={link.path}
              onClose={onClose}
            >
              {link.name}
            </NavItem>
          ))}
          <Box borderBottom="1px" borderColor="gray.300" mt={4} />
        </div>

        <Box mb={"30px"}>
          <Flex direction={"column"} gap={2}>
            <Box>
              <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                color="white"
                bg="#0000ff33"
                _hover={{
                  bg: "#0000ff33",
                  color: "white",
                }}
                {...rest}
              >
                <Flex align={"center"}>
                  <Icon
                    mr="4"
                    fontSize="26"
                    _groupHover={{
                      color: "white",
                    }}
                    as={FaRegUserCircle}
                  />
                  <Flex direction={"column"}>
                    <p>Shubham</p>
                    <Text fontSize={"12px"}>User</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box>
              <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                color="white"
                bg="#0000ff33"
                _hover={{
                  bg: "#0000ff33",
                  color: "white",
                }}
                {...rest}
              >
                <Flex align={"center"}>
                  <Icon
                    mr="4"
                    fontSize="26"
                    _groupHover={{
                      color: "white",
                    }}
                    as={FiLogOut}
                  />
                  {"Logout"}
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, children, path, onClose, ...rest }) => {
  return (
    <NavLink to={path} onClick={onClose}>
      {({ isActive }) => (
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          color="white"
          bg={isActive ? "#0000ff33" : "transparent"}
          _hover={{
            bg: "#0000ff33",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      )}
    </NavLink>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      gap={4}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        color="white"
      >
        Kaptive
      </Text>
    </Flex>
  );
};
