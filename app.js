

var UploadController = function ($scope, fileReader) {
    $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };
 
    $scope.$on("fileProgress", function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });
 
};
//
// var TranslateController = function ($scope, $http) {
//     // $scope.translate = function (uri) {
//     //     $http({method: "POST",
//     //             url: "https://api.mathpix.com/v3/latex",
//     //             params: {'url': uri},
//     //             headers: {app_id:'chenmr9769_gmail_com', app_key:'9edc5e2b092ccc490f3a',
//     //                 "Content-type": "application/json"}
//     //         }).then(function (value) { console.log(value) })
//     // }
//
//     $scope.translate = function (url) {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 console.log(this.responseText);
//             }
//         };
//         xhttp.open("POST", "http://api.mathpix.com/v3/latex?url="+url, true);
//         xhttp.setRequestHeader("Content-type", "application/json");
//         xhttp.setRequestHeader("app_id", "chenmr9769_gmail_com");
//         xhttp.setRequestHeader("app_key", "9edc5e2b092ccc490f3a");
//         xhttp.send();
//         // console.log(url)
//         // $.ajax({
//         //     type: "POST",
//         //     url: "http://api.mathpix.com/v3/latex",
//         //     data: {'url':url},
//         //     headers: {app_id:'chenmr9769_gmail_com', app_key:'9edc5e2b092ccc490f3a',
//         //                         "Content-type": "application/json"}
//         // }).done(function( o ) {
//         //     console.log(o)
//         // });
//
//     }
//
//
// };

app.directive("ngClick", function () {
    return {
        link: function ($scope, el) {
            el.bind("click", function () {
                $scope.result = 123
                $scope.translate(document.getElementById("preview").src)
            })
        }
    }
})

app.directive("ngFileSelect",function(){
  return {
    link: function($scope,el){
      el.bind("change", function(e){
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      })
    }
  }
})

