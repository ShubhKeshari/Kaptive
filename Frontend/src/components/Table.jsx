import { Button, Flex, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { SimpleTable } from "./SimpleTable";
import { PercentTable } from "./PercentTable";

const Table = () => {
  const [isPercent, setIsPercent] = useState(false);
  const [currency, setCurrency] = useState("Ruppes");

  return (
    <Flex flexDirection={"column"} gap={"20px"} bg={"white"} p={4}>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={600}>Cashflow Summary-1</Text>
        <Flex gap={"5px"} flexWrap={"wrap"}>
          <Button
            size="sm"
            bgColor={!isPercent ? "#6e6eff" : ""}
            color={!isPercent ? "#ffffff" : ""}
            onClick={() => setIsPercent(false)}
          >
            Decimal View
          </Button>
          <Button
            size="sm"
            bgColor={isPercent ? "#6e6eff" : ""}
            color={isPercent ? "#ffffff" : ""}
            onClick={() => setIsPercent(true)}
          >
            Percent View
          </Button>

          <Select
            size="sm"
            w={"100px"}
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
            borderRadius={"6px"}
          >
            <option value="Rupees">Rupees</option>
            <option value="Dollar">Dollar</option>
            <option value="Riyal">Riyal</option>
          </Select>
        </Flex>
      </Flex>
      {!isPercent ? <SimpleTable currency={currency} /> : <PercentTable />}
    </Flex>
  );
};

export { Table };
