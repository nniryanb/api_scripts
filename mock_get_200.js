// NoName Security 2021 (C) Solution Architecture 
// k6 API traffic simulation script 
// Cloud Proof of Value 
// MockBin API GET custom http response status code Method Simulation Load Generator
// 1.0 9.3.2021  

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {

  stages: [
    { duration: '70s', target: 222 },
    { duration: '3d', target: 333 },
    { duration: '20s', target: 111 },
  ],
};

export default function () {
  //replace the subkey value with the API Subscription Key qp value authorized by this api gateway 
  const subkey = 'changethis'
  //replace the gwhost value with the hostname of the api gateway 
  const gwhost = 'sub.host.com'
  const email = `nn0${__VU}@changetoCUSTOMERname.net`;
  // const payload = JSON.stringify({ email: email, echo: 'Success' });
  // const params = { headers: { 'Content-Type': 'application/json' } };

  let res = http.get('https://'+gwhost+'/mockbin/status/200/'+email+'?subscription-key='+subkey);

  check(res, { 'status was 200': (r) => r.status == 200 });
  // console.log(JSON.stringify(res));
  sleep(1);
}
