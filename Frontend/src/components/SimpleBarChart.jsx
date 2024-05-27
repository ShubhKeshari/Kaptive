import React, { useMemo } from "react";
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

function SimpleBarChart({ period }) {
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
  const monthData = () => {
    const calculatedData = months.map((month) => {
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
        Revenue: Revenue,
        COGS: COGS,
        GrossProfit: GrossProfit,
      };
    });
    return calculatedData;
  };
  const monthlyData = useMemo(() => {
    return monthData() ;
  },[data]);
  console.log(monthlyData);
  const getQuarterlyData = () => {
    const quarterlyData = [];

    for (let i = 0; i < 4; i++) {
      let start = i * 3;
      let end = start + 3;

      const quarterRawData = monthlyData.slice(start, end);

      let Revenue = 0;
      let COGS = 0;
      let GrossProfit = 0;

      quarterRawData.forEach((data) => {
        Revenue += data.Revenue;
        COGS += data.COGS;
        GrossProfit += data.GrossProfit;
      });

      quarterlyData.push({
        month: "Quarter" + (i + 1),
        Revenue: Revenue,
        COGS: COGS,
        GrossProfit: GrossProfit,
      });
    }

    return quarterlyData;
  };

  const quaterlyData = useMemo(() => getQuarterlyData(), [data]);

  const gatHalfYearlyData = () => {
    const halfYearlyData = [];

    for (let i = 0; i < 2; i++) {
      let start = i * 6;
      let end = start + 6;

      const halfYearlyRawData = monthlyData.slice(start, end);

      let Revenue = 0;
      let COGS = 0;
      let GrossProfit = 0;

      halfYearlyRawData.forEach((data) => {
        Revenue += data.Revenue;
        COGS += data.COGS;
        GrossProfit += data.GrossProfit;
      });

      halfYearlyData.push({
        month: "Half Year" + (i + 1),
        Revenue: Revenue,
        COGS: COGS,
        GrossProfit: GrossProfit,
      });
    }

    return halfYearlyData;
  };

  const halfYearlyData = useMemo(() => gatHalfYearlyData(), [data]);
  return (
    <Box overflowY={"auto"} w="100%">
      <Box w={{ base: "1100px", lg: "100%" }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            // data={monthlyData}
            data={
              period == "Monthly"
                ? monthlyData
                : period == "Quaterly"
                ? quaterlyData
                : halfYearlyData
            }
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
