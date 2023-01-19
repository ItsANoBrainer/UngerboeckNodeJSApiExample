const connections = require('./connections.json');
const config = require('./config.json');
const KJUR = require('jsrsasign');
const axios = require('axios');
const dayjs = require('dayjs')

main()
async function main() {
	const now = dayjs().format('YYYY-MM-DD') // Today
	const end = dayjs().add(1, 'day').format('YYYY-MM-DD') // Tomorrow
	const bookings = await GetBookings(`StartDate ge DateTime'${now}' and StartDate lt DateTime'${end}'`)
	if(!bookings) return;

	console.log(`We found ${bookings.length} bookings.`)
	if(bookings.length>0) {
		console.log('Here is one:')
		console.log(bookings[0])
	}
}

function constructJWT(id, key, secret) {
	const header = { "alg": "HS256", "typ": "JWT" };

	const claimSet = {
		"iss": id,
		"key": key,
		"exp": (KJUR.jws.IntDate.get("now") + 60).toString(),
		"iat": KJUR.jws.IntDate.get("now").toString()
	}
	DebugLog(`Generated Claim Set: ${JSON.stringify(claimSet)}`)

	const jwt = KJUR.jws.JWS.sign(null, header, claimSet, secret);
	DebugLog(`Signed JWT: ${JSON.stringify(jwt)}`)

	return jwt;
}

function GetBookings(searchString) {
	return new Promise(async resolve => {
		const jwt = constructJWT(connections.id, connections.key, connections.secret);

		const options = {
			url: `https://${connections.domain}/api/v1/Bookings/10?search=${searchString}`,
			method: 'get',
			headers: {
				'Authorization': 'Bearer ' + jwt,
				'Content-Type': 'application/json'
			},
		}

		console.log(`Requesting Bookings with Search String: ${searchString}`)
		axios.request(options).then((resp) => {
			DebugLog(`Get Bookings Success`)
			resolve(resp.data)
		}).catch((err) => {
			DebugLog(`Get Bookings Error`)
			console.error(err);
			resolve()
		});
	});
}

function DebugLog(text) {
	if(config.debug) console.log(text)
}