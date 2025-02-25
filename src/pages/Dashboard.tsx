// import { use } from "react";
import {useLoaderData} from "react-router"
// import { getTimePray } from "../services/getTimePray.js";
const Dashboard = () => {
    // const data = use(getTimePray())
    const data = useLoaderData()
    console.log(data)
  return (
    <>
      <title>Dashboard</title>
      <meta name="description" content="User Dashboard" />
      <div>
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
