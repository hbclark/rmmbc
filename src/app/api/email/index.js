
import axios from "axios";
import {z} from "zod";
require('dotenv').config();



// 1. Email validation schema
    const EmailSchema = z.string().email({message:"Please enter a valid email address"})
    
    // Subscription handle function
    const subscribeHandler = async (prevState,formData)=>{
        
        const subscribedEmail = formData.get('subscribeEmail');
        
        const emailValidation = EmailSchema.safeParse(subscribedEmail);
        if(!emailValidation) {
            return ({error:"Please enter a valid email address"})
        }
        //2 Retrieve Mailchimp credentials from environment variables
        const API_KEY = "d457b41b3ad9d941e7dfa1e6df53fe0a-us22";
        const API_SERVER ="us22";
        const AUDIENCE_ID = "b0a82d9748";
        console.log(API_KEY);
        console.log(API_SERVER);
        console.log(AUDIENCE_ID);

        // 3. COnstruct Mailchimp API request URL
        const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/b0a82d9748/members`;

        // 4. Prepare request data
        const data = {
            email_address: emailValidation.data,
            status: "subscribed",
          };
        //   5. Set request headers
        const options = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `api_key ${API_KEY}`,
              "Access-Control-Allow-Origin": "*",
            },
          };

        //   6.Send POST requests to Mailchimp API
        try {
            const response = await axios.post(url, data, options);
            if (response.status == 200) {
              return ({ message: "Awesome! You have successfully subscribed!" });
            }
          } catch (error) {
            
            if (axios.isAxiosError(error)) {
              console.error(
                `${error.response?.status}`,
                `${error.response?.data.title}`,
                `${error.response?.data.detail}`
              );
        
              if (error.response?.data.title == "Member Exists") {
                return ({
                  error: "Uh oh, it looks like this email's already subscribed🧐",
                });
              }
            }
        
            return ({
              error:
                "Oops! There was an error subscribing you to the newsletter. Please email me at skla2003@hotmail.com and I'll add you to the list.",
            });
    }
}


export default subscribeHandler;