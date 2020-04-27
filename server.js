require('dotenv').config()
const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser')
const soapRequest = require('easy-soap-request');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

function consumeSoap (term) {
  console.log('TERM', term)
  const url = "http://www.crcind.com/csp/samples/SOAP.Demo.CLS";
  const soapHeaders = {
    'Content-Type': 'text/xml',
    'soapAction': 'http://tempuri.org/SOAP.Demo.GetListByName',
  };
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org">
                <soapenv:Header/>
                <soapenv:Body>
                    <tem:GetListByName>
                      <!--Optional:-->
                      <tem:name>${term}</tem:name>
                    </tem:GetListByName>
                </soapenv:Body>
              </soapenv:Envelope>`;

  (async () => {
  const { response } = await soapRequest({ url, headers: soapHeaders, xml, timeout: 1000 }); // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response;
  console.log(body);
})()
}

app.get('/search', (req, res, next) => {
  console.log('REQ QUERY', req.query)
  consumeSoap(req.query.term)
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT)
})