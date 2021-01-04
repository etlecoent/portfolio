import ToolItem from "./ToolItem";

export default function Tools(props) {

  return (

    <div className = "flex flex-col align-center justify-center width-full h-auto pt-16">
      <h1 className="max-w-full text-center text-4xl font-bold pb-10">🛠️ My tools:</h1>
      
      <h2 className="max-w-full text-center text-2xl font-bold pb-8">Front-End</h2>
      <p className="flex flex-wrap flex-row max-w-full justify-center items-center pb-8">
        <ToolItem href="https://developer.mozilla.org/en-US/docs/Glossary/HTML" src="https://cdn.svgporn.com/logos/html-5.svg" alt="HTML5"/>
        <ToolItem href="https://developer.mozilla.org/en-US/docs/Glossary/CSS" src="https://cdn.svgporn.com/logos/css-3.svg" alt="CSS3" />
        <ToolItem href="https://getbootstrap.com/" src="https://cdn.svgporn.com/logos/bootstrap.svg" alt="Bootstrap" />
        <ToolItem href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" src="https://cdn.svgporn.com/logos/javascript.svg" alt="Javascript (JS)" />
        <ToolItem href="https://reactjs.org/" src="https://cdn.svgporn.com/logos/react.svg" alt="React" />
        <ToolItem href="https://sass-lang.com/" src="https://cdn.svgporn.com/logos/sass.svg" alt="Sass" />
        <ToolItem href="https://tailwindcss.com/" src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg" alt="Tailwind CSS" />
        <ToolItem href="https://www.figma.com/" src="https://cdn.svgporn.com/logos/figma.svg" alt="Figma" />
        <ToolItem href="https://jquery.com/" src="https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png" alt="jQuery" />
      </p>

      <h2 className="max-w-full text-center text-2xl font-bold pb-8">Back-End</h2>
      <p className="flex flex-wrap flex-row max-w-full justify-center items-center pb-8">
        <ToolItem href="https://nodejs.org/en/" src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="Node.js" />
        <ToolItem href="https://www.postgresql.org/" src="https://cdn.svgporn.com/logos/postgresql.svg" alt="PostgreSQL" />
        <ToolItem href="https://www.postman.com/" src="https://cdn.svgporn.com/logos/postman.svg" alt="Postman" />
        <ToolItem href="https://socket.io/" src="https://cdn.svgporn.com/logos/socket.io.svg" alt="Socket.io" />
        <ToolItem href="https://jwt.io/" src="https://camo.githubusercontent.com/8c3663d10582bf346a1ccfd7809f98113b92e5f13f2e6ba7438656496cc57d28/68747470733a2f2f6a77742e696f2f696d672f7069635f6c6f676f2e737667" alt="JWT" />
        <ToolItem href="https://www.java.com/fr/" src="https://cdn.svgporn.com/logos/java.svg" alt="Java" />
        <ToolItem href="https://www.python.org/" src="https://cdn.svgporn.com/logos/python.svg" alt="Python" />
        <ToolItem href="https://expressjs.com/" src="https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png" alt="Express" />
        <ToolItem href="https://rubyonrails.org/" src="https://camo.githubusercontent.com/d8c59366e8967f17d0b7585b9a2b6e66560776afb91758bfcf955ec0c1bf5b7a/68747470733a2f2f7777772e796179612e746f6461792f696d672f726566657272616c2f546563686e6f6c6f676965732f746563685f727562796f6e7261696c732e706e67" alt="Rails" />
      </p>

      <h2 className="max-w-full text-center text-2xl font-bold pb-8">Other</h2>
      <p className="flex flex-wrap flex-row max-w-full justify-center items-center pb-8">
        <ToolItem href="https://git-scm.com/" src="https://cdn.svgporn.com/logos/git-icon.svg" alt="Git" />
        <ToolItem href="https://www.cypress.io/" src="https://cdn.svgporn.com/logos/cypress.svg" alt="Cypress" />
        <ToolItem href="https://storybook.js.org/" src="https://cdn.svgporn.com/logos/storybook-icon.svg" alt="Storybook" />
        <ToolItem href="https://jestjs.io/" src="https://cdn.svgporn.com/logos/jest.svg" alt="Jest" />
        <ToolItem href="https://mochajs.org/" src="https://cdn.svgporn.com/logos/mocha.svg" alt="Mocha" />
        <ToolItem href="https://www.chaijs.com/" src="https://cdn.svgporn.com/logos/chai.svg" alt="Chai" />
        <ToolItem href="https://rspec.info/" src="https://seeklogo.com/images/R/rspec-logo-DA1EE19A18-seeklogo.com.png" alt="RSpec" />
        <ToolItem href="https://ubuntu.com/" src="https://cdn.svgporn.com/logos/ubuntu.svg" alt="ubuntu" />
        <ToolItem href="https://www.microsoft.com/fr-fr/windows/" src="https://cdn.svgporn.com/logos/microsoft-windows.svg" alt="Windows" />
      </p>
    </div>
  )
} 