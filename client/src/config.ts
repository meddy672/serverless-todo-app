// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'uf8u9nudxe'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-pd-hb6s5.us.auth0.com',            // Auth0 domain
  clientId: 'D8FwNLoKOw4mmUPqvUZMy5Aajy1Vpj0S',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
