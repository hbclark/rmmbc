"use server"
import mailchimp from '@mailchimp/mailchimp_marketing';

export default async function singUp(prevState, formData) {
  
    const subscribedEmail = formData.get('subscribeEmail');

  mailchimp.setConfig({
    apiKey: "b1caa725d50e6e5d809060c07b38c303-us22",
    server:"us22",
  });
  

  try {
    await mailchimp.lists.addListMember("b0a82d9748", {
        email_address: subscribedEmail,
        status: 'subscribed'
      });
    console.log("success")
  } catch (err) {
    console.log(err);
    return ({ error: true })
  }
// async function callPing(){
//     const response = await mailchimp.ping.get();
//     console.log(response);
// }
// callPing();
  return ({ message:`${subscribedEmail} You have subscribed newsLetter` });
}