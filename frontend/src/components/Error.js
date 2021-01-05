

export default function Error(props) {

  return (
    <div className="min-h-screen mx-auto py-8 px-8 flex justify-center items-center">
      <div className="max-w-full flex items-center justify-center">
        
        <p className="max-w-full text-center text-5xl font-bold">
          {props.message}
        </p>
        
      </div>
    </div>
  )
};