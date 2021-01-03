import Profile from "../components/Profile";

const Home = (props) => {

  return (
    <section className="min-h-screen pt-16 bg-ysosw dark:bg-ysosb shadow text-black dark:text-white">
      <div className="flex flex-col min-h-screen mx-auto py-8 px-8 pt-16 ">
        <div className = "flex flex-row flex-wrap justify-around">
          <Profile />
          <div className=" flex flex-col items-center justify-center h-auto w-auto">
            <h1 className="max-w-full text-center text-4xl font-bold pb-10">
              M.Eng & Full-Stack Dev
            </h1>
              <p className = "text-center max-w-md">
                Curious about technology since my childhood, I chose to become a general engineer in order to better understand the workings of our modern world. Along the way, I discovered an interest in project management and a real passion for the Web which lead me to finish my schooling with a Web Dev bootcamp in order to become a Full Stack Developer.
              </p>
          </div>
        </div>
        <div className = "flex align-center justify-center width-full h-auto pt-16">
          yooooooooooooo
        </div>
      </div>
    </section>
  )
};

export default Home;