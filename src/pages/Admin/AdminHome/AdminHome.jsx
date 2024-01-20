import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis,CartesianGrid } from "recharts";
import { PieChart, Pie, Legend, Tooltip } from "recharts";



const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const [chartData, setChartData] = useState({});
  // get request pieChart stats
  useEffect(() => {
    axiosSecure.get("/admin-pieChart-stats").then((res) => {
      setChartData(res.data);
    });
  }, []);
  // get admin stats
  const { data: stats = {} } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
console.log(chartData);
  // -------chart functionality------
  const data = [
    {
      name: "Total-Biodata",
      uv: `${chartData?.total_Biodata}`,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Male",
      uv: `${chartData?.male}`,
      pv: 198,
      amt: 110,
    },
    {
      name: "Female",
      uv: `${chartData?.female}`,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Premium",
      uv: `${chartData?.premium}`,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Revenue",
      uv: `${chartData?.revenue}`,
      pv: 4800,
      amt: 2181,
    }
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <Helmet>
        <title> Admin Dashboard| WedlockBD</title>
      </Helmet>
      <div className="grid md:grid-cols-5">
        <div className="w-[250px]  border/10 p-4 md:p-5 rounded shadow-lg">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <h6 className="font-bold text-2xl text-center text-blue-700">
              Total Biodata
            </h6>
            <p className="text-2xl font-bold">{stats?.totalBiodata}</p>
          </div>
        </div>
        <div className="w-[250px]  border/10 p-4 md:p-5 rounded shadow-lg">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <h6 className="font-bold text-2xl text-center text-blue-700">
              Female Biodata
            </h6>
            <p className="text-2xl font-bold">{stats?.femaleBiodata}</p>
          </div>
        </div>
        <div className="w-[250px]  border/10 p-4 md:p-5 rounded shadow-lg">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <h6 className="font-bold text-2xl text-center text-blue-700">
              Male Biodata
            </h6>
            <p className="text-2xl font-bold">{stats?.maleBiodata}</p>
          </div>
        </div>
        <div className="w-[250px]  border/10 p-4 md:p-5 rounded shadow-lg">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <h6 className="font-bold text-2xl text-center text-blue-700">
              Premium Biodata
            </h6>
            <p className="text-2xl font-bold">{stats?.premiumBiodata}</p>
          </div>
        </div>
        <div className="w-[250px]  border/10 p-4 md:p-5 rounded shadow-lg">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <h6 className="font-bold text-2xl text-center text-blue-700">
              Total Revenue
            </h6>
            <p className="text-2xl font-bold">{stats?.totalRevenue} taka</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        
        <div className="bg-slate-100 p-12 rounded-md">
          <h1 className="text-lg ml-3">Contact request information is presented through the chart</h1>
          <BarChart
          className="mt-6"
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
           
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
       
      </div>
    </div>
  );
};

export default AdminHome;
