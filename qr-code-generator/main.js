 
 let qrText = document.getElementById("qrText");
 let imgBox = document.getElementById("imgBox");
 let qrImage = document.getElementById("qrImage");
 let button = document.getElementById("button");
//  const query = (event) => {
//     if(event.key=="Enter") {
//         generateQR();
//     }
//  }
 

 const generateQR = () =>
 {
    if(qrText.value.length>0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add("show-img");
    }
    else {
        qrText.classList.add("error");
    }
   
}