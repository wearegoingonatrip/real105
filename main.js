Webcam.set({
width:200,
height:250,
image_format:"png",
png_quality:90

})
camera =document.getElementById("camera");
Webcam.attach( "#camera" );


function takesnapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log(ml5,"ml5");

classifier= ml5.classify("https://teachablemachine.withgoogle.com/models/z4G8s4ag-/modeljson" ,modelLoaded)






