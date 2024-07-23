import { useEffect, useState } from "react";
const User = ({ name, location }) => {
  // console.log("useEffect");
  // const timer = setInterval(() => {
  //   console.log("setInterval");
  // }, 1000);
  // return () => {
  //   clearInterval(timer);
  //   console.log("return useEffect");
  // };
  const [gitData, setGitData] = useState("");
  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const gitUser = await fetch("https://api.github.com/users/Dheeraj2411");
    const data = await gitUser.json();
    console.log(data);

    setGitData(data);
  };
  console.log(gitData.avatar_url);
  console.log(gitData.login);

  return (
    <div>
      <h3>{name}</h3>
      <h3>{gitData.login}</h3>
      <h3>Git:{gitData.id}</h3>
      <img src={gitData.avatar_url} />
      <h3>{location}</h3>
      <h3>This is react series</h3>
    </div>
  );
};

export default User;
