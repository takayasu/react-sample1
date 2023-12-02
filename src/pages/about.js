
import { useParams } from "react-router-dom";

const About = () => {
    const { user } = useParams();
  return (
      <>
      <h1>About Page</h1>
      {user && <h2>User: {user}</h2>}
      </>
  )
}

export default About;