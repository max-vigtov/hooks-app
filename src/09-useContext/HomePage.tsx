import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

	const { user } = useContext(UserContext) as { user: any };
  return (
	<div>
	  <h1>HomePage <span>{user?.name}</span></h1>
	  <hr />
	  
	</div>
  )
}

