// NoName Security 2021 (C) Solution Architecture 
// k6 API user simulation script 
// Cloud Proof of Value 
// Conference API Method BOLA path param enumerator Simulation Load Generator
// 1.0 9.7.2021  

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 400 },
    { duration: '39h', target: 400 },
    { duration: '1m', target: 100 },
  ],
};
export default function () {
  //replace the subkey value with the API Subscription Key qp value authorized by this api gateway 
  const subkey = 'changethis'
  //replace the gwhost value with the hostname of the api gateway 
  const gwhost = 'sub.host.com'
for (var id = 1; id <= 100; id++) {
  const email = 'nn0${__VU}@custname.net';
  const params = { headers: { 'Authorization': 'Bearer faketokenforsimulateduser'+email } };
  let response = http.get('https://'+gwhost+'/conference/speaker/${id}/topics?subscription-key='+subkey, params);
  check(response, { 'status was 200': (r) => r.status == 200 });
  // console.log(JSON.stringify(response));
}
  sleep(1);
}
