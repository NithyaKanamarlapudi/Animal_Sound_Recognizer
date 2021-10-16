function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AZ6W0MAHQ/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, result){
    console.log("model Ready");
    if (error){
        console.error(error);
    } else {
        console.log(result);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ result[0].label;
        document.getElementById("result_accuracy").innerHTML = 'Accuracy - ' + (result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+", "+random_number_b+")";
        document.getElementById("result_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+", "+random_number_b+")";
        
        img = document.getElementById('animal_1');
        img1 = document.getElementById('animal_2');
        img2 = document.getElementById('animal_3');
        if(result[0].label == "Dog Barking"){
            img.src = 'dog.gif'
            img1.src = 'Cat.png'
            img2.src = 'Horse.png'
        } else if(result[0].label == "Cat Meowing"){
            img.src = 'Dog.jpeg'
            img1.src = 'cat.gif'
            img2.src = 'Horse.png'
        }
        else if(result[0].label == "Horse Neighing"){
            img.src = 'Dog.jpeg'
            img1.src = 'Cat.png'
            img2.src = 'horse.gif'
        }
        else {
            img.src = 'Dog.jpeg'
            img1.src = 'Cat.png'
            img2.src = 'Horse.png'
        }
    }
}