var myfunc = function () {
    $.ajax({
        xhr: function()
        {
            var xhr = new window.XMLHttpRequest();
            //Upload progress
            xhr.upload.addEventListener("progress", function(evt){
                if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;
                    //Do something with upload progress
                    console.log()
                    $("#translate")[0].value = percentComplete
                }
            }, false);
            //Download progress
            xhr.addEventListener("progress", function(evt){
                if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;
                    //Do something with download progress
                    $("#translate")[0].value = percentComplete
                }
            }, false);
            return xhr;
        },
        type: "POST",
        url: "http://api.mathpix.com/v3/latex",
        data: JSON.stringify({src: document.getElementById("preview").src}),
        headers: {
            app_id: 'chenmr9769_gmail_com', app_key: '9edc5e2b092ccc490f3a',
            "Content-type": "application/json"
        },
    }).done(function (o) {
        if (o.latex !== undefined)
            $("#latex")[0].value = o.latex

    })
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // };
    // xhttp.open("POST", "http://api.mathpix.com/v3/latex?url="+document.getElementById("preview").src, true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.setRequestHeader("app_id", "chenmr9769_gmail_com");
    // xhttp.setRequestHeader("app_key", "9edc5e2b092ccc490f3a");
    // xhttp.send();
}