var result 
 var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
	var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
	var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
	
	var options = [ 'play the song' , 'pause the song' , 'shuffle the song' ];
	var grammar = '#JSGF V1.0; grammar options; public <options> = ' + options.join(' | ') + ' ;'

	var recognition = new SpeechRecognition();
	var speechRecognitionList = new SpeechGrammarList();

	recognition.grammars = speechRecognitionList;
	//recognition.continuous = false;
	recognition.lang = 'en-US';
	recognition.interimResults = false;
	recognition.maxAlternatives = 1;
	
	$('.fa-microphone').on('click', function() {
  recognition.start();
  console.log('Ready to receive a options command.');
	});

	recognition.onresult = function(event) {
	var last = event.results.length - 1;
	 var color = event.results[last][0].transcript;
	 if(result=="play"){
		 $('.fa-microphone').addclass("class");
		 var song = document.querySelector('audio');
			console.log('Playing');
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');
			song.play();
	 }
	 
	 
	 
	 
	 
	}

	//recognition.onspeechend = function() {
	//  recognition.stop();
	//}
	
	