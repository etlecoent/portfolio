import Error from "../components/Error";

const Page404 = (props) => {

  return (
    <section className="min-h-screen pt-16 bg-ysosw dark:bg-ysosb text-black dark:text-white">
      <Error message={"404 Not Found"}/>
    </section>
  )
};

export default Page404;