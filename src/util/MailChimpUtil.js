import rp from 'request-promise';
import FormActions from '../actions/FormActions';

const hubUrl = 'https://e1raa2dpna.execute-api.us-east-1.amazonaws.com/production/hub';

export function getSubscriberStatus(email) {
  rp(`${hubUrl}/list?email=${email}`)
    .then((response) => {
        FormActions.APIResponse(response);
    })
    .catch(function (err) {
        // API call failed...
        console.log('Failed API Call'); 
    });
}

export function addSubscriber(email) {
  const options = {
    method: 'POST',
    uri: `${hubUrl}/list`,
    body: { email },
    json: true,
  };
  rp.post(options)
    .then((repos) => {
        console.log(repos);
    })
    .catch(function (err) {
        // API call failed...
        console.log('Failed API Call'); 
    });
}
