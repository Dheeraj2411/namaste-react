import User from "./User";
import { useContext } from "react";
import MyContext from "../Utlis/UserContext";
const About = () => {
  const { loggedInUser } = useContext(MyContext);
  console.log(loggedInUser);

  return (
    <div>
      <h1>About us</h1>
      <h3>You are on About Page</h3>
      <div>{loggedInUser}</div>
      <div>{loggedInUser?.avatar_url}</div>
      <User name={"Dheeraj(Fun)"} location={"Gurgaon"} />
      {/* <UserContext /> */}
    </div>
  );
};
export default About;
