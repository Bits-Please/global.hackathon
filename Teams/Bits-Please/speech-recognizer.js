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
        
        $('.instructions').click(function(){
            sweetAlert("Instructions","1. Click on the image\n2. Say what the image is");
        });


        $(eval("'." + data_Hash.getText(currPic) +"-mic'")).click(function(){  //data_Hash is the object created form the Hasmap class
            startRecognition();
        });

   

        var startRecognition = function() {
     
            recognition.start();
        };

        

       recognition.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            
<<<<<<< HEAD
          if(event.results[i][0].transcript == data_Hash.getText(currPic) || event.results[i][0].transcript == (data_Hash.getText(currPic) + " ") || event.results[i][0].transcript == (" " + data_Hash.getText(currPic))){
                insertAtCaret(textAreaID, "  CORRECT ");
               
           }else{
               insertAtCaret(textAreaID, "  FALSE ");
                 var msg = new SpeechSynthesisUtterance(data_Hash.getText(currPic));
=======
          if(event.results[i][0].transcript == "dog" || event.results[i][0].transcript == "dog " || event.results[i][0].transcript == " dog"){
               
                sweetAlert("Good job!", "That was correct", "success");
                }else{
               
              
                sweetAlert("Oops!", "That was wrong", "error");
                 var msg = new SpeechSynthesisUtterance('dog');
                
>>>>>>> 6c07b5958819deeeeca1798e3e9ea5ee27041b83
                 window.speechSynthesis.speak(msg);
              
               
           }
        }
    }
};

       
    });
})(jQuery);