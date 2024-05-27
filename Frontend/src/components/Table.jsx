import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { SimpleTable } from "./SimpleTable";

const Table = () => {
  return (
    <Flex flexDirection={"column"} gap={"20px"} bg={"white"} p={4}>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={600}>Cashflow Summary-1</Text>
        <Flex gap={"5px"} flexWrap={"wrap"}>
          <Button size="sm">Decimal View</Button>
          <Button size="sm">Percent View</Button>
          <Button size="sm">Euro</Button>
        </Flex>
      </Flex>
      <SimpleTable />
    </Flex>
  );
};

export { Table };
