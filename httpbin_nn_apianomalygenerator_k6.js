// NoName Security 2021 (C) Solution Architecture 
// k6 API user simulation script 
// Cloud Proof of Value 
// httpbin nn API Anomaly Generator Simulation Load Generator
// 1.0 9.8.2021 

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '20s', target: 200 },
    { duration: '7h', target: 1000 },
    { duration: '20s', target: 100 },
  ],
};

export default function () {
 //replace the subkey value with the API Subscription Key qp value authorized by this api gateway 
 const subkey = 'changethis'
 //replace the gwhost value with the hostname of the api gateway 
 const gwhost = 'sub.host.com'

 const email = `nn0${__VU}@att.net`;	
 const params = { headers: { 'Authorization': 'Bearer faketokenforsimulateduser'+email } };
  let res = http.get('https://'+gwhost+'/httpbin/status/200:1,500:0.7,403:0.3,401?subscription-key='+subkey, params);

  check(res, { 'status was 200': (r) => r.status == 200 });
  // console.log(JSON.stringify(res));
  sleep(1);
}