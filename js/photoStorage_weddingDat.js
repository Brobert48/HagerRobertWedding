var pageIndex = 1;
var storageRef = firebase.storage().ref();
var listRef = storageRef.child('Wedding Day');
var urlList = [];
var photosPerPage = 10;
var numPages = 1;

function previousPage() {
    pageChange(pageIndex - 1);
}
function nextPage() {
    console.log('click')
    pageChange(pageIndex + 1);
}

function createPaginationLinks() {
    $('#wedPhotoPagination').empty();
    if (pageIndex > 1) {
        var prevArrow = $('<a id="previousPagew" href="#photosw">&laquo;</a>').appendTo('#wedPhotoPagination');
        $("#previousPagew").click(() => previousPage());
    }

    for (let i = 0; i < numPages; i++) {
        var a = $('<a id="pagew' + (i + 1) + '" href="#photosw">' + (i + 1) + '</a>').appendTo('#wedPhotoPagination');
        if (i + 1 == pageIndex) {
            $("#pagew" + (i + 1)).addClass("active");
        }
        $("#pagew" + (i + 1)).click(() => pageChange(i + 1));
    }
    if (pageIndex != numPages) {
        var nextArrow = $('<a id="nextPagew" href="#photosw">&raquo;</a>').appendTo('#wedPhotoPagination');
        $("#nextPagew").click(() => nextPage());
    }

}

function pageChange(_pageIndex) {
    pageIndex = _pageIndex;
    processItems();
}

function processItems() {
    let startingIndex = (pageIndex * photosPerPage) - photosPerPage;
    let endingIndex = (pageIndex * photosPerPage);

    listRef.listAll().then(function (result) {
        console.log(result);
        numPages = Math.ceil(result.items.length / photosPerPage);
        console.log(numPages);
        $('#img-areaw').empty();
        var itemsToDisplay = result.items.slice(startingIndex, endingIndex);
        itemsToDisplay.forEach(function (imgRef) {
            imgRef.getDownloadURL().then(function (url) {
                console.log(imgRef);
                var col = $('<div class="col-xs-12 col-sm-6 col-md-3" style="margin-bottom: 1rem;"> <div class="img-thumbnail"> <img id="'+ imgRef.name +'" src="'+ url +'" alt="image" class="img-responsive"></div></div>').click(()=>{
                    console.log(url);
                    openModal2();
                    showSlide(url);
                }).appendTo('#img-areaw');

            });

        })
        createPaginationLinks();
    }).catch(function (error) {
        console.log(error);
    });
}


processItems();

