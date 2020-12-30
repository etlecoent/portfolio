import logo from "../images/logo.png";

const Loading = (props) => {

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <img src={logo} alt="Loading" className="animate-spin h-20 w-auto"/>
    </div>
  )
}

export default Loading;