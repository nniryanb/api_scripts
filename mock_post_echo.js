// NoName Security 2021 (C) Solution Architecture 
// k6 API traffic simulation script 
// Cloud Proof of Value 
// MockBin API Post Echo Method Simulation Load Generator
// 1.0 9.3.2021  

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {

  stages: [

    { duration: '30s', target: 200 },

    { duration: '3d', target: 400 },

    { duration: '20s', target: 100 },

  ],

};

export default function () {
  //replace the subkey value with the API Subscription Key qp value authorized by this api gateway 
  const subkey = 'changethis'
  //replace the gwhost value with the hostname of the api gateway 
  const gwhost = 'sub.host.com'
  //the next line will change the email address id to the number of the current k6 simulated mobile app user request 
  const email = `nn0${__VU}@changetoCUSTOMERname.net`;
  const payload = JSON.stringify({ email: email, echo: 'Success' });
  const params = { headers: { 'Content-Type': 'application/json' } };

  let res = http.post('https://'+gwhost+'/mockbin/echo?subscription-key='+subkey, payload, params);

  check(res, { 'status was 200': (r) => r.status == 200 });
  console.log(email);
  sleep(1);
}