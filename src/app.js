var UI = require('ui');

var base = "system://images/";

var notification_items = [], generic_items = [], weather_items = [], timeline_items = [], sports_items = [], action_results_items = [], miscellaneous_items = [];

notification_items.push({ title : "Generic", subtitle : "NOTIFICATION_GENERIC" });
notification_items.push({ title : "Reminder", subtitle : "NOTIFICATION_REMINDER"  });
notification_items.push({ title : "Flag", subtitle : "NOTIFICATION_FLAG"  });
notification_items.push({ title : "Facebook Messenger", subtitle : "NOTIFICATION_FACEBOOK_MESSENGER"  });
notification_items.push({ title : "WhatsApp", subtitle : "NOTIFICATION_WHATSAPP"  });
notification_items.push({ title : "Gmail", subtitle : "NOTIFICATION_GMAIL"  });
notification_items.push({ title : "Facebook", subtitle : "NOTIFICATION_FACEBOOK"  });
notification_items.push({ title : "Google Hangouts", subtitle : "NOTIFICATION_GOOGLE_HANGOUTS"  });
notification_items.push({ title : "Telegram", subtitle : "NOTIFICATION_TELEGRAM"  });
notification_items.push({ title : "Twitter", subtitle : "NOTIFICATION_TWITTER"  });
notification_items.push({ title : "Google Inbox", subtitle : "NOTIFICATION_GOOGLE_INBOX"  });
notification_items.push({ title : "Mailbox", subtitle : "NOTIFICATION_MAILBOX"  });
notification_items.push({ title : "Outlook", subtitle : "NOTIFICATION_OUTLOOK"  });
notification_items.push({ title : "Instagram", subtitle : "NOTIFICATION_INSTAGRAM"  });
notification_items.push({ title : "Blackberry Messenger", subtitle : "NOTIFICATION_BLACKBERRY_MESSENGER"  });
notification_items.push({ title : "Line", subtitle : "NOTIFICATION_LINE"  });
notification_items.push({ title : "Snapchat", subtitle : "NOTIFICATION_SNAPCHAT"  });
notification_items.push({ title : "WeChat", subtitle : "NOTIFICATION_WECHAT"  });
notification_items.push({ title : "Viber", subtitle : "NOTIFICATION_VIBER"  });
notification_items.push({ title : "Skype", subtitle : "NOTIFICATION_SKYPE"  });
notification_items.push({ title : "Yahoo Mail", subtitle : "NOTIFICATION_YAHOO_MAIL"  });

generic_items.push({ title : "Email", subtitle : "GENERIC_EMAIL" });
generic_items.push({ title : "SMS", subtitle : "GENERIC_SMS" });
generic_items.push({ title : "Warning", subtitle : "GENERIC_WARNING" });
generic_items.push({ title : "Confirmation", subtitle : "GENERIC_CONFIRMATION" });
generic_items.push({ title : "Question", subtitle : "GENERIC_QUESTION" });

weather_items.push({ title : "Partly Cloudy", subtitle : "PARTLY_CLOUDY" });
weather_items.push({ title : "Cloudy Day", subtitle : "CLOUDY_DAY"});
weather_items.push({ title : "Light Snow", subtitle : "LIGHT_SNOW"});
weather_items.push({ title : "Light Rain", subtitle : "LIGHT_RAIN"});
weather_items.push({ title : "Heavy Rain", subtitle : "HEAVY_RAIN"});
weather_items.push({ title : "Heavy Snow", subtitle : "HEAVY_SNOW"});
weather_items.push({ title : "Weather", subtitle : "TIMELINE_WEATHER"});
weather_items.push({ title : "Sun", subtitle : "TIMELINE_SUN"});
weather_items.push({ title : "Rain and Snow", subtitle : "RAINING_AND_SNOWING"});

timeline_items.push({ title : "Missed Call", subtitle : "TIMELINE_MISSED_CALL"});
timeline_items.push({ title : "Calendar", subtitle : "TIMELINE_CALENDAR"});
timeline_items.push({ title : "Sports", subtitle : "TIMELINE_SPORTS"});

sports_items.push({ title : "Baseball", subtitle : "TIMELINE_BASEBALL"});
sports_items.push({ title : "Football", subtitle : "AMERICAN_FOOTBALL"});
sports_items.push({ title : "Basketball", subtitle : "BASKETBALL"});
sports_items.push({ title : "Cricket", subtitle : "CRICKET_GAME"});
sports_items.push({ title : "Soccer", subtitle : "SOCCER_GAME"});
sports_items.push({ title : "Hockey", subtitle : "HOCKEY_GAME"});

action_results_items.push({ title : "Dismissed", subtitle : "RESULT_DISMISSED"});
action_results_items.push({ title : "Deleted", subtitle : "RESULT_DELETED"});
action_results_items.push({ title : "Mute", subtitle : "RESULT_MUTE"});
action_results_items.push({ title : "Sent", subtitle : "RESULT_SENT"});
action_results_items.push({ title : "Failed", subtitle : "RESULT_FAILED"});

miscellaneous_items.push({ title : "Stocks", subtitle : "STOCKS_EVENT" });
miscellaneous_items.push({ title : "Music", subtitle : "MUSIC_EVENT" });
miscellaneous_items.push({ title : "Birthday", subtitle : "BIRTHDAY_EVENT" });
miscellaneous_items.push({ title : "Pay Bill", subtitle : "PAY_BILL" });
miscellaneous_items.push({ title : "Hotel Reservation", subtitle : "HOTEL_RESERVATION" });
miscellaneous_items.push({ title : "High Tide", subtitle : "TIDE_IS_HIGH" });
miscellaneous_items.push({ title : "News", subtitle : "NEWS_EVENT" });
miscellaneous_items.push({ title : "Event", subtitle : "SCHEDULED_EVENT" });
miscellaneous_items.push({ title : "During Phone Call", subtitle : "DURING_PHONE_CALL" });
miscellaneous_items.push({ title : "No Internet", subtitle : "CHECK_INTERNET_CONNECTION" });
miscellaneous_items.push({ title : "Movie", subtitle : "MOVIE_EVENT" });
miscellaneous_items.push({ title : "Glucose Monitor", subtitle : "GLUCOSE_MONITOR" });
miscellaneous_items.push({ title : "Alarm", subtitle : "ALARM_CLOCK" });
miscellaneous_items.push({ title : "Car Rental", subtitle : "CAR_RENTAL" });
miscellaneous_items.push({ title : "Dinner Reservation", subtitle : "DINNER_RESERVATION" });
miscellaneous_items.push({ title : "Radio", subtitle : "RADIO_SHOW" });
miscellaneous_items.push({ title : "Audio Cassette", subtitle : "AUDIO_CASSETTE" });
miscellaneous_items.push({ title : "Flight", subtitle : "SCHEDULED_FLIGHT" });
miscellaneous_items.push({ title : "No Events", subtitle : "NO_EVENTS" });
miscellaneous_items.push({ title : "Fitness Goal", subtitle : "REACHED_FITNESS_GOAL" });
miscellaneous_items.push({ title : "Day Seperator", subtitle : "DAY_SEPERATOR" });
miscellaneous_items.push({ title : "Watch Disconnected", subtitle : "WATCH_DISCONNECTED" });
miscellaneous_items.push({ title : "TV Show", subtitle : "TV_SHOW" });

var menu = new UI.Menu({
	sections: [
		{ title : "Notifications", items : notification_items },
		{ title : "Generic", items : generic_items },
		{ title : "Weather", items : weather_items },
		{ title : "Timeline", items : timeline_items },
		{ title : "Sports", items : sports_items },
		{ title : "Action Results", items : action_results_items },
		{ title : "Miscellaneous", items : miscellaneous_items }
	]
});

menu.on('select', function(e){

	var future = new Date();
	
	var pin = {
		"id" : "pinhole_test",
		"time" : future.toISOString(),
		"layout" : {
			"title" : "Pin Test",
			"type" : "genericPin"
		},
		"createNotification" : {
			"layout" : {
				"type" : "genericNotification",
				"title" : "Pin Test",
				"tinyIcon" : base + getItems(e.sectionIndex)[e.itemIndex].subtitle,
				"largeIcon": base + getItems(e.sectionIndex)[e.itemIndex].subtitle
			}
		},
		"updateNotification" : {
			"time" : future.toISOString(),
			"layout" : {
				"type" : "genericNotification",
				"title" : "Pin Test",
				"tinyIcon" : base + getItems(e.sectionIndex)[e.itemIndex].subtitle,
				"largeIcon": base + getItems(e.sectionIndex)[e.itemIndex].subtitle
			}
		}
	};
	insertUserPin(pin, null);
});

menu.show();

	
function getItems(section){
	if(section === 0) return notification_items;
	else if(section === 1) return generic_items;
	else if(section === 2) return weather_items;
	else if(section === 3) return timeline_items;
	else if(section === 4) return sports_items;
	else if(section === 5) return action_results_items;
	else if(section === 6) return miscellaneous_items;
}

var API_URL_ROOT = 'https://timeline-api.getpebble.com/';

function timelineRequest(pin, type, callback) {
  var url = API_URL_ROOT + 'v1/user/pins/' + pin.id;

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
	console.log("Timeline: " + this.responseText);
  };
  xhr.open(type, url);

  Pebble.getTimelineToken(function(token) {
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-User-Token', '' + token);

    xhr.send(JSON.stringify(pin));
 
  }, function(error) { console.error('Timeline: Error getting timeline token: ' + error); });
}

function insertUserPin(pin, callback) {
  timelineRequest(pin, 'PUT', callback);
}