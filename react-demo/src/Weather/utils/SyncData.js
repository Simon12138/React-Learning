var cheerio = require('cheerio');
var superagent = require('superagent');
var sleep = require('system-sleep');

var baseURL = 'http://www.weather.com.cn/weather';

var cities = [
	{
		label: 'CHUZHOU',
		page: '101221101.shtml#input',
		description: "滁州"
	},
	{
		label: 'PUDONG',
		page: '101020600.shtml#input',
		description: "浦东新区"
	}
];

var data = {
	now: {
		time: 'time',
		warn: 'sk_alarm',
		temperature: 'tem',
		humidity: 'zs h',
		wind: 'zs w'
	},
	day: {
		weather: 'wea',
		temperature: 'tem',
		wind: 'win',
		sun: 'sunUp'
	},
	night: {
		weather: 'wea',
		temperature: 'tem',
		wind: 'win',
		sun: 'sunDown'
	},
	days: [
		{
			weather: 'wea',
			wind: 'win'
		}
	]
};

module.exports = {
	syncWeather: function(city) {
		var cityUrl = '';
		for(var i = 0; i < cities.length; i++) {
			if(cities[i].label === city) {
				cityUrl = cities[i].page;
				break;
			}
		}

		var oneDayUrl = baseURL + '1d/' + cityUrl;

		superagent.get(oneDayUrl).end(function(err, res) {
			if(err) {
				console.log("ERROR: " + err);
				return;
			}

			var $ = cheerio.load(sres.text);

			// now weather
			var currentWeather = $('div.t:not(.clearfix)');
			data.now.time = currentWeather.find('.time').text();
			data.now.warn = currentWeather.find('.sk_alarm').text();
			data.now.temperature = currentWeather.find('div.tem').text();
			data.now.humidity = currentWeather.find('.zs.h').text();
			data.now.humidity = currentWeather.find('.zs.w').text();

			// day weather
			var dayWeather = $('div.t:not(.clearfix)').find('.clearfix > li').eq(0);
			data.day.weather = dayWeather.find('.wea').text();
			data.day.temperature = dayWeather.find('.tem').text();
			data.day.wind = dayWeather.find('.win').text();
			data.day.sun = dayWeather.find('.sunUp').text();

			// night weather
			var nightWeather = $('div.t:not(.clearfix)').find('.clearfix > li').eq(1);
			data.night.weather = nightWeather.find('.wea').text();
			data.night.temperature = nightWeather.find('.tem').text();
			data.night.wind = nightWeather.find('.win').text();
			data.night.sun = nightWeather.find('.sunDown').text();


			return data;
		});
	}
}