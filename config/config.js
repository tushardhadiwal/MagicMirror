/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	serv:null,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			"module": "MMM-Voice-Control",
			"position": "top_right",
			"config": {}
		},
		{
			"module": "MMM-iFrame",
			"position": "middle_center",
			"config": {
				"url": [
					//  "https://10.91.48.168/axis-cgi/mjpg/video.cgi?&resolution=704x480" 
				],
				"updateInterval": 300000,
				"width": "60%",
				"height": "480px",
				"scrolling":false,
				"camAddress":{
					"bathroom":"https://10.91.48.145/axis-cgi/mjpg/video.cgi?&resolution=704x480",
					"concessions":"https://10.91.50.88/axis-cgi/mjpg/video.cgi?&resolution=704x480",
					"stadium":"https://10.91.50.85/axis-cgi/mjpg/video.cgi?&resolution=704x480",
					"elevator":"https://10.91.48.160/axis-cgi/mjpg/video.cgi?&resolution=704x480",
					"kitchen":"https://10.91.48.166/axis-cgi/mjpg/video.cgi?&resolution=704x480",
					"hallway":"https://10.91.48.167/axis-cgi/mjpg/video.cgi?&resolution=704x480",
					"lounge":"https://10.91.48.168/axis-cgi/mjpg/video.cgi?&resolution=704x480"

				}
			}
		},
		// {
		// 	module: "MMM-RTSPStream",
		// 	position: "middle_center",
		// 	header: "ThunderDome",
		// 		config: {
		// 		autoStart: true,
		// 		rotateStreams: false,
		// 		rotateStreamTimeout: 10,
		// 		moduleWidth: 400,
		// 		moduleHeight: 300,
		// 		localPlayer: 'ffmpeg',
		// 		remotePlayer: 'ffmpeg',
		// 		// showSnapWhenPaused: true,
		// 		// remoteSnaps: true,
		// 		shutdownDelay: 1,
		// 			stream1: {
		// 			name: 'Cam1',
		// 			url: 'rtsp://admin:AzBet#123456@10.91.48.145/axis-media/media.amp',
		// 			frameRate: '30',
		// 			// snapshotType: 'url',
		// 			// snapshotRefresh: 10,
		// 			// width: undefined,
		// 			// height: undefined,
		// 			ffmpegPort: 8081,
		// 			},
				// stream2: {
				// 	name: 'Cam2',
				// 	url: 'rtsp://admin:AzBet#123456@10.91.50.88/axis-media/media.amp',
				// 	frameRate: '30',
				// 	snapshotType: 'url',
				// 	snapshotRefresh: 10,
				// 	width: undefined,
				// 	height: undefined,
				// 	ffmpegPort: 8082,
				// 	},
				// stream3: {
				// 	name: 'Cam3',
				// 	url: 'rtsp://admin:AzBet#123456@10.91.50.85/axis-media/media.amp',
				// 	frameRate: '30',
				// 	snapshotType: 'url',
				// 	snapshotRefresh: 10,
				// 	width: undefined,
				// 	height: undefined,
				// 	ffmpegPort: 10001,
				// 	},
				// stream4: {
				// 	name: 'Cam4',
				// 	url: 'rtsp://admin:AzBet#123456@10.91.48.160/axis-media/media.amp',
				// 	frameRate: '30',
				// 	snapshotType: 'url',
				// 	snapshotRefresh: 10,
				// 	width: undefined,
				// 	height: undefined,
				// 	ffmpegPort: 10002,
				// 	},
		// 		}
		// },
		
		{
			module: "clock",
			position: "top_left"
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
