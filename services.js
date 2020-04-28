const parseString = require('xml2js').parseString;
const soapRequest = require('easy-soap-request');
const axios = require('axios');

module.exports = {
  getPeople: (term) => {
  const URL = 'http://www.crcind.com/csp/samples/SOAP.Demo.CLS';
  const SOAP_HEADERS = {
    'Content-Type': 'text/xml',
    'soapAction': 'http://tempuri.org/SOAP.Demo.GetListByName',
  };
  const XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org">
                <soapenv:Header/>
                <soapenv:Body>
                    <tem:GetListByName>
                      <tem:name>${term}</tem:name>
                    </tem:GetListByName>
                </soapenv:Body>
              </soapenv:Envelope>`;

  return new Promise ((resolve, reject) => {
    soapRequest({ url: URL, headers: SOAP_HEADERS, xml: XML, timeout: 1000 }).then((res) => {
      parseString(res.response.body, {explicitArray: false}, (err, result) => {
        if (err) {
          reject(err)
        }
        return resolve(result)
      })
    }).catch(err => reject(err))
  })
  },
  getMusic: (term) => {
    let url = `https://itunes.apple.com/search?term=${term}&entity=song&limit=50`
    return new Promise ((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
    }).catch(err => reject(err))
    })
  },
  getMovies: (term) => {
    let url = `https://itunes.apple.com/search?term=${term}&entity=movie&limit=50`
    return new Promise ((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
    }).catch(err => reject(err))
    })
  },
  getShows: (term) => {
    let url = `http://api.tvmaze.com/search/shows?q=${term}`
    return new Promise ((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
    }).catch(err => reject(err))
    })
  }

}