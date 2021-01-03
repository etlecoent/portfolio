import Profile from "../components/Profile";
import Tool from "../components/Tool";

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
        <div className = "flex flex-col align-center justify-center width-full h-auto pt-16">
          <h1 className="max-w-full text-center text-4xl font-bold pb-10">🛠️ My tools:</h1>
          
          <h2 className="max-w-full text-center text-2xl font-bold pb-8">Front-End</h2>
          <p className="flex flex-wrap flex-row max-w-full justify-center items-center pb-8">
            <Tool src="https://cdn.svgporn.com/logos/html-5.svg" alt="HTML5"/>
            <Tool src="https://cdn.svgporn.com/logos/css-3.svg" alt="CSS3" />
            <Tool src="https://cdn.svgporn.com/logos/bootstrap.svg" alt="Bootstrap" />
            <Tool src="https://cdn.svgporn.com/logos/javascript.svg" alt="Javascript (JS)" />
            <Tool src="https://cdn.svgporn.com/logos/react.svg" alt="React" />
            <Tool src="https://cdn.svgporn.com/logos/sass.svg" alt="Sass" />
            <Tool src="https://cdn.svgporn.com/logos/figma.svg" alt="Figma" />
            <Tool src="https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png" alt="jQuery" />
          </p>

          <h2 className="max-w-full text-center text-2xl font-bold pb-8">Back-End</h2>
          <p className="flex flex-wrap flex-row max-w-full justify-center items-center pb-8">
            <Tool src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="Node.js" />
            <Tool src="https://cdn.svgporn.com/logos/postgresql.svg" alt="PostgreSQL" />
            <Tool src="https://cdn.svgporn.com/logos/postman.svg" alt="Postman" />
            <Tool src="https://cdn.svgporn.com/logos/socket.io.svg" alt="Socket.io" />
            <Tool src="https://camo.githubusercontent.com/8c3663d10582bf346a1ccfd7809f98113b92e5f13f2e6ba7438656496cc57d28/68747470733a2f2f6a77742e696f2f696d672f7069635f6c6f676f2e737667" alt="JWT" />
            <Tool src="https://cdn.svgporn.com/logos/java.svg" alt="Java" />
            <Tool src="https://cdn.svgporn.com/logos/python.svg" alt="Python" />
            <Tool src="https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png" alt="Express" />
            <Tool src="https://camo.githubusercontent.com/d8c59366e8967f17d0b7585b9a2b6e66560776afb91758bfcf955ec0c1bf5b7a/68747470733a2f2f7777772e796179612e746f6461792f696d672f726566657272616c2f546563686e6f6c6f676965732f746563685f727562796f6e7261696c732e706e67" alt="Rails" />
          </p>

          <h2 className="max-w-full text-center text-2xl font-bold pb-8">Other</h2>
          <p className="flex flex-wrap flex-row max-w-full justify-center items-center pb-8">
            <Tool src="https://cdn.svgporn.com/logos/git-icon.svg" alt="Git" />
            <Tool src="https://cdn.svgporn.com/logos/cypress.svg" alt="Cypress" />
            <Tool src="https://cdn.svgporn.com/logos/storybook-icon.svg" alt="Storybook" />
            <Tool src="https://cdn.svgporn.com/logos/jest.svg" alt="Jest" />
            <Tool src="https://cdn.svgporn.com/logos/mocha.svg" alt="Mocha" />
            <Tool src="https://cdn.svgporn.com/logos/chai.svg" alt="Chai" />
            <Tool src="https://seeklogo.com/images/R/rspec-logo-DA1EE19A18-seeklogo.com.png" alt="RSpec" />
            <Tool src="https://cdn.svgporn.com/logos/ubuntu.svg" alt="ubuntu" />
            <Tool src="https://cdn.svgporn.com/logos/microsoft-windows.svg" alt="Windows" />
          </p>
        </div>
      </div>
    </section>
  )
};

export default Home;