import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

	const { user, setUser } = useContext(UserContext) as { user: any, setUser: any };
	console.log(user);
	
	
  return (
	<>
	  <h1>LoginPage</h1>
	  <hr />
	  <pre>
		{JSON.stringify(user, null, 3)}
	  </pre>
	  
	  <button className="btn btn-primary" 
	  	onClick={() => setUser({
			id: 123,
			name: 'Juan',
			email: 'juan@gmail.com'
	  })}>
		Set User
	  </button>
	</>
  )
}

