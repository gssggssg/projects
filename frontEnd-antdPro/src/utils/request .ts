import { extend } from 'umi-request';

const request = extend({
    // prefix: 'http://gssg.top:8080',
    //   suffix: ".json",
    timeout: 3000,
    headers: {
        "Authorization": "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZW1haWwiOiI0OTAxMDQ3MjJAcXEuY29tIiwiaWF0IjoxNjUxNjc5MTUyfQ.dypENtlf95H2qZJQyf7KfRSedkEpm0Nm2KZImnEF6fU"
    },
    //   errorHandler: function(error) {
    //     /* 异常处理 */
    //   }
});


export default request;

