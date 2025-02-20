import http from "k6/http";
const BASE_URL = "http://stress-app-service:8080";
export let options = {
    vus: 5,
    duration: '10s'
};
export default function(){
    http.get(`${BASE_URL}/`);
}