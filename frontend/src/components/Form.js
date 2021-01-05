
import { useState } from "react";
import axios from "axios";


export default function MyForm(props) {
  
  const { url } = props;

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const validate = () => {
    if (!email) {
      setStatus("Email cannot be blank");
      return;
    } else if (!message) {
      setStatus("message cannot be blank");
      return;
    } else {
      setStatus("");
      sendForm(email, message)
        .then(res => {
          setStatus("Email sent, I will contact you ASAP!")
        })
        .catch(err => setStatus("Ooops! Something went wrong."));
    }
  }

  const sendForm = (email, message) => {
    return axios
      .post(url, {
        header: {Accept: 'application/json'},
        data : {'email': email,
                'message': message
                }
      })
  }

  return(

    <div className="min-h-screen mx-auto py-8 px-8 flex justify-center items-center">
      {status && 
        <div>
          {status}
        </div>}
        
        <form
          onSubmit={ev => ev.preventDefault()}
          action="https://formspree.io/f/xbjpqlyb"
          method="POST"
        >
        <div className="flex flex-col items-center content-center">
          <label>Email:</label>
          <input
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            type="email"
            name="email"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 dark:bg-white bg-gray-700 text-white dark:text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
        </div>

        <div className="flex flex-column items-center content-center">
          <label>Message:</label>
          <input 
            value={message}
            onChange={ev => setMessage(ev.target.value)}
            type="text"
            name="message"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 dark:bg-white bg-gray-700 text-white dark:text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <div className="flex items-center content-center">
          <button onClick={() => validate()}>Submit</button>
        </div>
        </form>
    </div>
  )
}
// {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
// {status === "ERROR" && <p>Ooops! There was an error.</p>}