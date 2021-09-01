// var pageIndex = 1;
// var storageRef = firebase.storage().ref();
// var listRef = storageRef.child('Engagement Photos');
// var urlList = [];
// var photosPerPage = 10;
// var numPages = 1;

// function previousPage() {
//     pageChange(pageIndex - 1);
// }
// function nextPage() {
//     console.log('click')
//     pageChange(pageIndex + 1);
// }

// function createPaginationLinks() {
//     $('#engPhotoPagination').empty();
//     if (pageIndex > 1) {
//         var prevArrow = $('<a id="previousPage" href="#photos">&laquo;</a>').appendTo('#engPhotoPagination');
//         $("#previousPage").click(() => previousPage());
//     }

//     for (let i = 0; i < numPages; i++) {
//         var a = $('<a id="page' + (i + 1) + '" href="#photos">' + (i + 1) + '</a>').appendTo('#engPhotoPagination');
//         if (i + 1 == pageIndex) {
//             $("#page" + (i + 1)).addClass("active");
//         }
//         $("#page" + (i + 1)).click(() => pageChange(i + 1));
//     }
//     if (pageIndex != numPages) {
//         var nextArrow = $('<a id="nextPage" href="#photos">&raquo;</a>').appendTo('#engPhotoPagination');
//         $("#nextPage").click(() => nextPage());
//     }

// }

// function pageChange(_pageIndex) {
//     pageIndex = _pageIndex;
//     processItems();
// }

// function processItems() {
//     let startingIndex = (pageIndex * photosPerPage) - photosPerPage;
//     let endingIndex = (pageIndex * photosPerPage);

//     listRef.listAll().then(function (result) {
//         console.log(result);
//         numPages = Math.ceil(result.items.length / photosPerPage);
//         console.log(numPages);
//         $('#img-area').empty();
//         var itemsToDisplay = result.items.slice(startingIndex, endingIndex);
//         itemsToDisplay.forEach(function (imgRef) {
//             imgRef.getDownloadURL().then(function (url) {
//                 console.log(imgRef);
//                 var col = $('<div class="col-xs-12 col-sm-6 col-md-3" style="margin-bottom: 1rem;"> <div class="img-thumbnail"> <img id="'+ imgRef.name +'" src="'+ url +'" alt="image" class="img-responsive"></div></div>').click(()=>{
//                     console.log(url);
//                     openModal();
//                     showSlide(url);
//                 }).appendTo('#img-area');

//             });

//         })
//         createPaginationLinks();
//     }).catch(function (error) {
//         console.log(error);
//     });
// }


// processItems();

