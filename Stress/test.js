import http from "k6/http";
const BASE_URL = process.env.SVC_DOMAIN;
const VUS = __ENV.TEST_VUS || 10;
export let options = {
    vus: VUS,
    duration: '10s'
};
export default function(){
    http.get(`${BASE_URL}/`);
}