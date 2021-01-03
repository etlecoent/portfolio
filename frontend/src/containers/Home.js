import Profile from "../components/Profile";

const Home = (props) => {

  return (
    <section className="min-h-screen pt-16 bg-ysosw dark:bg-ysosb shadow text-black dark:text-white">
      <div className="min-h-screen mx-auto py-8 px-8 flex pt-16 flex-wrap justify-around items-start">
        <Profile />
        <div className=" flex flex-col items-center justify-center h-auto w-auto">
          <h1 className="max-w-full text-center text-4xl font-bold pb-10">
            M.Eng & Full-Stack Dev
          </h1>
          <div className="max-w-md">
            <p className = "text-center">
              Curious about technology since my childhood, I chose to become a general engineer in order to better understand the workings of our modern world. Along the way, I discovered an interest in project management and a real passion for the Web which lead me to finish my schooling with a Web Dev bootcamp in order to become a Full Stack Developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Home;