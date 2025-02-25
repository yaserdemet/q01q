import { useLoaderData, useNavigation } from "react-router";
const Dashboard = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  console.log(data?.data);
  return (
    <>
      <title>Dashboard</title>
      <meta name="description" content="User Dashboard" />
      <div>{data?.message}</div>
    </>
  );
};

export default Dashboard;
