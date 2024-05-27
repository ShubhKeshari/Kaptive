import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { SimpleBarChart } from "./SimpleBarChart";

const Charts = () => {
  return (
    <Flex
      flexDirection={"column"}
      gap={"20px"}
      bg={"white"}
      pl={4}
      pr={4}
      pt={4}
    >
      <Flex justifyContent={"space-between"}>
        <Flex gap={"5px"} flexWrap={"wrap"}>
          <Button size="sm">Summary</Button>
          <Button size="sm">Balance Sheet</Button>
          <Button size="sm">Income Statement</Button>
          <Button size="sm">Cashflow</Button>
          <Button size="sm">+</Button>
        </Flex>
        <Flex gap={"5px"} flexWrap={"wrap"}>
          <Button size="sm">Normal View</Button>
          <Button size="sm">Growth View</Button>
          <Button size="sm">Period From</Button>
          <Button size="sm">Period To</Button>
        </Flex>
      </Flex>
      <Box style={{ marginTop: "70px" }}>
        <SimpleBarChart />
      </Box>
    </Flex>
  );
};

export { Charts };
