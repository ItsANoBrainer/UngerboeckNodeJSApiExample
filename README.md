# ItsANoBrainer

If you like or use this application, please consider supporting by starring the repo and checking out my other resources.

## _Ungerboeck NodeJS Api Example_

[![N|Solid](https://i.imgur.com/sfDPQf9.png)](https://nodejs.org/)

This is an example of how to use the Ungerboeck API with a NodeJS application and JWT signing/creation. You can find these in the API User window within Ungerboeck (after making an API User).

## Installation
FiveM Artifact Updater requires [Node.js](https://nodejs.org/) to run.

1. Install Node.JS. May require a computer restart.
2. Run `npm install` in the install directory

## Usage
After installing the dependencies you can use the application.

1. Navigate to the `connections.json` and verify the `id`, `key`, `secret`, and `domain` value matches the account created in Ungerboeck. Account requires `GetBooking` and `GetBookingList` in the allowed enpoints.

### Where to Find
- `id` | This is the short 10 character or less ID you created for the account. It is in all capitals.
- `key` | This is found under the `Keys` tab while viewing a user with `API USER KEY ID`
- `secret` | Located on the created account next to `Secret - API User - User`

### Default `connections.json`
```
{
	"id": "",
	"key": "",
	"secret": "",
	"domain": ""
}
```

## Tech
- [Node.JS](https://nodejs.org/en/) - evented I/O for the backend

## Development
Want to contribute? Great!

This is an application for competant people who can follow directions. If you know what you're doing and are encountering issues, use the Issues and Pull Request section appropriately.

## Change Log
### v1.0.0
* Initial Release

## License
[GNU GPL v3](http://www.gnu.org/licenses/gpl-3.0.html)