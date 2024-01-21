


Webcam.set({
    width:300,
    height:300,
    image_format:'jpg',
    jpg_quality:90
})

camera=document.getElementById("camera")
Webcam.attach("#camera")

function capture_img(){
    Webcam.snap(function(data_url){
        document.getElementById("showimg").innerHTML="<img id='Result1' src='"+data_url+"'/>"

    })
}
console.log('ML5-version',ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/80ZDce5KK/model.json",modelLoaded)

function modelLoaded(){
    console.log("Model Loaded Successfully")
}

function identify_img(){
    image=document.getElementById("Result1")
    classifier.classify(image,GotResult)
}
function GotResult(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("displayfm").innerHTML=result[0].label
        document.getElementById("displaya").innerHTML=result[0].confidence.toFixed(2)*100+" %"
    }
}

