function streamVideo() {
    const video = document.querySelector("video");
    const options = { video : true };
    navigator.mediaDevices.getUserMedia(options)
        .then( stream => video.srcObject = stream )
        .catch( error => console.log(error) );
}
console.log("Hello World!!!");