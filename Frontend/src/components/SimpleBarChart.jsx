import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import data from "../../db.json";
import { Box } from "@chakra-ui/react";

const months = [
  "Jan",
  "Feb",
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
const monthlyData = months.map((month) => {
  let Revenue = 0;
  let COGS = 0;
  let GrossProfit = 0;
  data.Sheet1.forEach((obj) => {
    if (
      obj.Overhead === "Accrued Revenue" ||
      obj.Overhead === "Deferred Revenue"
    ) {
      Revenue += obj[month];
    } else if (
      obj.Overhead === "COGS - Labour" ||
      obj.Overhead === "COGS - Raw Material" ||
      obj.Overhead === "COGS - Freight" ||
      obj.Overhead === "COGS - Overheads" ||
      obj.Overhead === "COGS - Other"
    ) {
      COGS += obj[month];
    } else if (obj.Overhead === "Gross Profit") {
      GrossProfit += obj[month];
    }
  });
  return {
    month,
    Revenue: Revenue.toFixed(2),
    COGS: COGS.toFixed(2),
    GrossProfit: GrossProfit.toFixed(2),
  };
});
function SimpleBarChart() {
  return (
    <Box overflowY={"auto"} w="100%">
      <Box w={{base:"1100px",lg:"100%"}}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={monthlyData}
            margin={{
              top: 5,
              right: 10,
              left: 40,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" fill="#b789dc" />
            <Bar dataKey="COGS" fill="#05adf3" />
            <Bar dataKey="GrossProfit" fill="#eb7e32" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export { SimpleBarChart };
