import { mc } from '../../lib/mailchimp'
import { CORS_HEADERS } from '../../lib/cors'

export function handler (event, context, callback) {
  console.log(event)
  main(JSON.parse(event.body))
    .then((resp) => {
      callback(null, resp)
    })
    .catch((err) => {
      callback(null, { statusCode: 500, headers: CORS_HEADERS, body: err })
    })
}

function main (body) {
  const email = body.email
  return addToMailchimp(email)
    .then((resp) => {
      const { status } = resp.body
      return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ email, status }) }
    })
}

function addToMailchimp (email, fields = {}) {
  const url = `3.0/lists/${process.env.MC_LIST}/members`
  const options = {
    method: 'POST',
    body: {
      email_address: email,
      status: 'pending',
      merge_fields: fields
    }
  }

  return mc(url, options)
}
