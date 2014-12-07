(function($) {

    $(document).ready(function() {

        try {
            var recognition = new webkitSpeechRecognition();
        } catch(e) {
            var recognition = Object;
        }
        data_Hash = new HashData({1:"dog", 2:"cat"});
        recognition.continuous = true;
        recognition.interimResults = true;
        var currPic = 2; //@TODO: generate random number here for a random animal
        var interimResult = '';
        var textArea = $('#speech-page-content');
        var textAreaID = 'speech-page-content';

        $(eval("'." + data_Hash.getText(currPic) +"-mic'")).click(function(){  //data_Hash is the object created form the Hasmap class
            startRecognition();
        });

       /* $('.dog-mic').click(function(){
            recognition.stop();
        });*/

        var startRecognition = function() {
            textArea.focus();
            recognition.start();
        };

        

       recognition.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            
          if(event.results[i][0].transcript == data_Hash.getText(currPic) || event.results[i][0].transcript == (data_Hash.getText(currPic) + " ") || event.results[i][0].transcript == (" " + data_Hash.getText(currPic))){
                insertAtCaret(textAreaID, "  CORRECT ");
               
           }else{
               insertAtCaret(textAreaID, "  FALSE ");
                 var msg = new SpeechSynthesisUtterance(data_Hash.getText(currPic));
                 window.speechSynthesis.speak(msg);
           }
        }
    }
};

        recognition.onend = function() {
            /*$('.speech-content-mic').removeClass('speech-mic-works').addClass('speech-mic');*/
        };
    });
})(jQuery);