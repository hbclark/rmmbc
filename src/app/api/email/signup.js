import mailchimp from '@mailchimp/mailchimp_marketing';

export default async function singUp(prevState, formData) {
  
    const subscribedEmail = formData.get('subscribeEmail');

  mailchimp.setConfig({
    apiKey: "d457b41b3ad9d941e7dfa1e6df53fe0a-us22",
    server:"us22",
  });

  try {
    await mailchimp.lists.addListMember(
        "b0a82d9748",{
        email_address: subscribedEmail,
        status: "subscribed",
        }
      
    );
  } catch (err) {
    return ({ error: true })
  }


  return ({ message:"You have subscribed newsLetter" });
}