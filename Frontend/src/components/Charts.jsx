import { Box, Button, Flex, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { SimpleBarChart } from "./SimpleBarChart";

const Charts = () => {
  const [period, setPeriod] = useState("Monthly");
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
          <Select
            size="sm"
            w={"100px"}
            value={period}
            onChange={(e) => {
              setPeriod(e.target.value);
            }}
            borderRadius={"6px"}
          >
            <option value="Monthly">Monthly</option>
            <option value="Quaterly">Quaterly</option>
            <option value="Half Yearly">Half Yearly</option>
          </Select>
        </Flex>
      </Flex>
      <Box style={{ marginTop: "70px" }}>
        <SimpleBarChart period={period} />
      </Box>
    </Flex>
  );
};

export { Charts };
