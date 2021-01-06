
import { useState } from "react";
import axios from "axios";


export default function MyForm(props) {
  
  const { url } = props;

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({status:"", content:""});

  const validate = () => {
    
    if (!name) {
      setAlert({status:"error", content:"Name cannot be blank"});
      return;
    } else if (!email) {
      setAlert({status:"error", content:"Email cannot be blank"});
      return;
    } else if (!message) {
      setAlert({status:"error", content:"message cannot be blank"});
      return;
    } else {
      sendForm(email, message)
        .then(res => {
          setAlert({status:"success", content:"Email sent, I will contact you ASAP!"});
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch(err => setAlert({status:"error", content:"Ooops! Something went wrong."}));
    }
  }

  const sendForm = (email, message) => {
    return axios
      .post(url, {
        
        'email': email,
        'name': name,
        'message': message
      })
  }

  return(

    <div className="min-h-screen mx-auto py-8 px-8 flex flex-col justify-center items-center fade-in">
      {alert.status === "error" && 
        <div className="border-red-600 text-red-600 border-l-4 p-4 m-4 growDown" role="alert">
          <p className="font-bold">
            {alert.content}
          </p>
        </div>
      }
      {alert.status === "success" && 
        <div className="border-green-600 text-green-600 border-l-4 p-4 m-4 growDown" role="alert">
          <p className="font-bold">
            {alert.content}
          </p>
        </div>
      }
        
      <form onSubmit={ev => ev.preventDefault()} className="flex w-full max-w-sm space-x-3">
        <div className="max-w-2xl bg-gray-800 py-10 px-5 m-auto w-full shadow rounded-lg">

          <div className="text-3xl font-light text-white text-center">
            Contact Me !
          </div>

          <div className="flex mx-auto items-center justify-evenly my-6">
            <a href="https://github.com/Deteri0n" target="_blanck" rel="noopener noreferrer" className="text-gray-400 tilt">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="text-xl hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/etienne-le-coent/" target="_blanck" rel="noopener noreferrer" className="text-gray-400 tilt">
                <svg width="25" height="25" fill="currentColor" className="text-xl hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">

            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                  <input
                    value={name}
                    onChange={ev => setName(ev.target.value)}
                    type="text"
                    name="name"
                    placeholder="Name*"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  value={email}
                  onChange={ev => setEmail(ev.target.value)}
                  type="email"
                  name="email"
                  placeholder="ex@mple.com*"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="message">
                <textarea 
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={message}
                  onChange={ev => setMessage(ev.target.value)}
                  name="message"
                  type="text"
                  id="message"
                  placeholder="Enter your message*"
                  rows="5"
                  cols="40">
                </textarea>
              </label>
            </div>

            <div className="col-span-2 text-right">
              <button
                type="button"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                onClick={() => validate()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>   
    </div>
  )
}