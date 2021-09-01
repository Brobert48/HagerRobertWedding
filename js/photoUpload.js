var files = [];

document.getElementById("files").addEventListener("change", function (e) {

    files = e.target.files;

    for (let i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
    //checks if files are selected
    if (files.length != 0) {
        document.getElementById("progressHolder").style.display = "block";
        //Loops through all the selected files
        for (let i = 0; i < files.length; i++) {
            //create a storage reference
            var storage = firebase.storage().ref('Wedding Day/' + files[i].name);

            //upload file
            var upload = storage.put(files[i]);

            //update progress bar
            upload.on(
                "state_changed",
                function progress(snapshot) {
                    var percentage =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                    document.getElementById("progress").ariaValueNow = percentage;
                    document.getElementById("progress").style.width = percentage + "%";

                },

                function error() {
                    alert("error uploading file");
                },

                function complete() {
                    document.getElementById(
                        "uploading"
                    ).innerHTML += `${files[i].name} uploaded <br />`;
                    document.getElementById("progressHolder").style.display = "none";

                    processItems();
                }
            );
        }
    } else {
        alert("No file chosen");
    }
});

function getFileUrl(filename) {
    //create a storage reference
    var storage = firebase.storage().ref(filename);

    //get file url
    storage
        .getDownloadURL()
        .then(function (url) {
            console.log(url);
        })
        .catch(function (error) {
            console.log("error encountered");
        });
}