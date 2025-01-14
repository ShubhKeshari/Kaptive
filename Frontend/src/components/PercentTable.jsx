import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import data from "../../db.json";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const PercentTable = () => {
  return (
    <Box maxHeight={"500px"} overflow={"scroll"} width="100%">
      <Table size="sm">
        <Thead>
          <Tr>
            <Th minWidth="150px" maxWidth="150px" whiteSpace="wrap">
              Cashflow
            </Th>
            {months.map((item) => {
              return <Th key={item}>{item}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.Sheet1.map((obj, index) => {
            const sum = Object.values(obj).reduce((acc, value) => {
              if (!isNaN(value)) {
                return acc + Number(value);
              }
              return acc;
            }, 0);
            return (
              <Tr key={index}>
                {Object.values(obj).map((value, i) => {
                  //To Check the value is a number
                  if (!isNaN(value)) {
                    value = ((parseFloat(value) / sum) * 100).toFixed(1)+ "%";
                  }
                  return (
                    <Td
                      key={i}
                      minWidth={i === 0 ? "150px" : "auto"}
                      maxWidth={i === 0 ? "150px" : "auto"}
                      whiteSpace="wrap"
                    >
                      {value}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export { PercentTable };
