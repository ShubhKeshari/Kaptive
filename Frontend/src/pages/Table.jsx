import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { SimpleBarChart } from "../components/SimpleBarChart";
import { SimpleTable } from "../components/SimpleTable";

const Table = () => {
  return (
    <Flex flexDirection={"column"} gap={"20px"} bg={"white"} p={4}>
      <Flex justifyContent={"space-between"}>
        <Flex gap={"5px"}>
          <Button size="sm">Summary</Button>
          <Button size="sm">Balance Sheet</Button>
          <Button size="sm">Income Statement</Button>
          <Button size="sm">Cashflow</Button>
          <Button size="sm">+</Button>
        </Flex>
        <Flex gap={"5px"}>
          <Button size="sm">Normal View</Button>
          <Button size="sm">Growth View</Button>
          <Button size="sm">Period From</Button>
          <Button size="sm">Period To</Button>
        </Flex>
      </Flex>
      <Box style={{ marginTop: "70px"}}>
        <SimpleBarChart />
      </Box>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={600}>Cashflow Summary-1</Text>
        <Flex gap={"5px"}>
          <Button size="sm">Decimal View</Button>
          <Button size="sm">Percent View</Button>
          <Button size="sm">Euro</Button>
        </Flex>
      </Flex>
      <SimpleTable/>
    </Flex>
  );
};

export default Table;
