$(document).ready(function () {
    GetProdTable();
    



    $('#entrydate').change(function () {
        debugger
        startDate = $(this).datepicker('getDate');
        console.log(startDate);
        $("#enddate").datepicker("option", "minDate", startDate);
    })

    $('#enddate').change(function () {
        debugger
        endDate = $(this).datepicker('getDate');
        $("#entrydate").datepicker("option", "maxDate", endDate);
    })
});





// Get the template HTML and remove it from the doumenthe template HTML and remove it from the doument

//Dropzone-create
//var previewNode = document.querySelector("#template")
//previewNode.id = ""
////console.log("Drop(1) = ", previewNode)
//var previewTemplate = previewNode.parentNode.innerHTML
////console.log("temp(1) = ", previewtemplate)
//previewNode.parentNode.removeChild(previewNode)
debugger


///dropzone-modal
var previewnode = document.querySelector("#Hide")
//console.log("Drop(2) = ", previewnode)
previewnode.id = ""
var previewtemplate = previewnode.parentNode.innerHTML
//console.log("temp(2) = ", previewtemplate)
previewnode.parentNode.removeChild(previewnode)
debugger



//////Dropzone-create-initialization
//var myDropzone = new Dropzone("#create", { // Make the whole body a dropzone
//    url: "/Product/Addimg",
//    uploadMultiple: true,
//    maxFiles: 3,
//    maxFilesize: 3.0,
//    thumbnailWidth: 80,
//    thumbnailHeight: 80,
//    parallelUploads: 20,
//    previewTemplate: previewTemplate,
//    autoProcessQueue: false, // Make sure the files aren't queued until manually added
//    previewsContainer: "#previews", // Define the container to display the previews
//    clickable: ".fileinput-button" // Define the element that should be used as click trigger to select files.
//})
//debugger


//myDropzone.on("addedfile", function (file) {

//})

//// Update the total progress bar
//myDropzone.on("totaluploadprogress", function (progress) {
//    document.querySelector("#total-progress .progress-bar").style.width = progress + "%"
//})

//myDropzone.on("sending", function (file) {
//    // Show the total progress bar when upload starts
//    document.querySelector("#total-progress").style.opacity = "1"
//    // And disable the start button
//    file.previewElement.querySelector(".start").setAttribute("disabled", "disabled")
//})

//// Hide the total progress bar when nothing's uploading anymore
//myDropzone.on("queuecomplete", function (progress) {
//    document.querySelector("#total-progress").style.opacity = "0"
//})

//// Setup the buttons for all transfers
//// The "add files" button doesn't need to be setup because the config
//// `clickable` has already been specified.
////document.querySelector(".post .start").onclick = function () {
////    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED))
////}
//document.querySelector("#actions .cancel").onclick = function () {
//    myDropzone.removeAllFiles(true)
//}

//// submit button configuration
//debugger
////function getValues() {
////    debugger


////    debugger




////    return formData;
////}

//myDropzone.element.querySelector("#submit").addEventListener("click", function (e) {
//    debugger
//    // make sure that the form isn't actually being sent.
//    e.preventDefault();
//    e.stopPropagation();


//    debugger
//    debugger

//    var name = $("#prodName").val();



//    var obj = {

//        ProductName: name,

//    }
//    $.ajax(
//        {
//            url: "/Product/Add",
//            method: "POST",
//            data: obj,
//            success: function (data) {
//                debugger
//                //console.log("data");

//                return Img(data);
//            },
//            error: function (err) {
//                console.error(err);

//            }



//        }
//    )


//});
//function Img(id) {
//    productid = id;
//    var photo = myDropzone.files;
//    console.log(photo);
//    var formData = new FormData();
//    // these image appends are getting dropzones instances
//    formData.append("productid", productid); // regular text form attachment
//    if (photo.length > 0) {
//        for (var i = 0; i < photo.length; i++) {
//            formData.append("file" + i, photo[i]);
//        }
//    }
//    for (var pair of formData.entries()) {
//        console.log(pair[0] + ', ' + pair[1]);
//    }
//    //display formData

//    $.ajax({
//        type: 'POST',
//        url: "/Product/Addimg",
//        data: formData,
//        processData: false, // required for formdata with jquery
//        contentType: false, // required for formdata with jquery
//        success: function (response) {
//            alert(response);
//            location.reload();
//        }
//    });


//}

//////Dropzone-create-initialization

//////Dropzone-modal-initialization
var modalDropzone = new Dropzone("#imgdrag", { // Make the whole body a dropzone
    url: "/Product/Addimg",
    uploadMultiple: true,
    maxFiles: 3,
    maxFilesize: 3.0,
    thumbnailWidth: 80,
    thumbnailHeight: 80,
    parallelUploads: 20,
    previewTemplate: previewtemplate,
    autoProcessQueue: false, // Make sure the files aren't queued until manually added
    previewsContainer: "#gay", // Define the container to display the previews
    clickable: ".filemodal-button" // Define the element that should be used as click trigger to select files.
})
modalDropzone.on("addedfile", function (file) {

})

// Update the total progress bar
modalDropzone.on("totaluploadprogress", function (progress) {
    document.querySelector("#total-modal-progress .progress-bar").style.width = progress + "%"
})

modalDropzone.on("sending", function (file) {
    // Show the total progress bar when upload starts
    document.querySelector("#total-modal-progress").style.opacity = "1"
    // And disable the start button
    file.previewElement.querySelector(".start").setAttribute("disabled", "disabled")
})

// Hide the total progress bar when nothing's uploading anymore
modalDropzone.on("queuecomplete", function (progress) {
    document.querySelector("#total-modal-progress").style.opacity = "0"
})

// Setup the buttons for all transfers
// The "add files" button doesn't need to be setup because the config
// `clickable` has already been specified.
//document.querySelector(".post .start").onclick = function () {
//    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED))
//}
document.querySelector("#mercy .cancel").onclick = function () {
    modalDropzone.removeAllFiles(true)
}

modalDropzone.element.querySelector("#Addimg").addEventListener("click", function (e) {
    debugger
    // make sure that the form isn't actually being sent.
    e.preventDefault();
    e.stopPropagation();


    debugger
    debugger

    var id = $("#Addimg").attr("value");


    var photo = modalDropzone.files;
    console.log(photo);
    var formData = new FormData();
    // these image appends are getting dropzones instances
    formData.append("productid", id); // regular text form attachment
    if (photo.length > 0) {
        for (var i = 0; i < photo.length; i++) {
            formData.append("file" + i, photo[i]);
        }
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        $.ajax({
            type: 'POST',
            url: "/Product/Addimg",
            data: formData,
            processData: false, // required for formdata with jquery
            contentType: false, // required for formdata with jquery
            success: function (response) {
                alert(response);
                location.reload();
            }
        });
    }
    else {
        alert("Please Add images");
    }

    //display formData







});
//////Dropzone-modal-initialization


/////Dropzone EDIT Initialization
///Edit Dropzone
var editnode = document.querySelector("#Show")
editnode.id = ""
var template = editnode.parentNode.innerHTML
editnode.parentNode.removeChild(editnode)

var editDropzone = new Dropzone("#editmodal", { // Make the whole body a dropzone
    url: "/Product/Updateimg",
    uploadMultiple: false,
    maxFiles: 1,
    maxFilesize: 3.0,
    thumbnailWidth: 80,
    thumbnailHeight: 80,
    parallelUploads: 20,
    previewTemplate: template,
    autoProcessQueue: false, // Make sure the files aren't queued until manually added
    previewsContainer: "#edit", // Define the container to display the previews
    clickable: ".editmodal-button" // Define the element that should be used as click trigger to select files.
})

// Update the total progress bar
editDropzone.on("totaluploadprogress", function (progress) {
    document.querySelector("#edit-modal-progress .progress-bar").style.width = progress + "%"
})

editDropzone.on("sending", function (file) {
    // Show the total progress bar when upload starts
    document.querySelector("#edit-modal-progress").style.opacity = "1"
})

// Hide the total progress bar when nothing's uploading anymore
editDropzone.on("queuecomplete", function (progress) {
    document.querySelector("#edit-modal-progress").style.opacity = "0"
})

// Setup the buttons for all transfers
// The "add files" button doesn't need to be setup because the config
// `clickable` has already been specified.
//document.querySelector(".post .start").onclick = function () {
//    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED))
//}
document.querySelector("#editShow .cancel").onclick = function () {
    editDropzone.removeAllFiles(true)
}



/////Dropzone EDIT Initialization

/////////////////////Display



function GetProdTable() {



    $.ajax({
        url: "../Product/GetDataTable",
        type: "POST",
        //data: {\"CustomerId\":1,\"CustomerName\":\"m\",\"CustomerEmail\":\"a@gmail.com\",\"CustomerAddress\":\"nag\",\"CustomerPan\":112,\"CustomerNumber\":\"1234567  \"},
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            debugger
            $('#proddata').DataTable({
                //"responsive": true,
                //"lengthChange": false,
                //"autoWidth": true,
                //"dom": 'Bfrtip',

                data: data,




                columns: [

                    { "data": "ProductName", "title": "Name" },
                    { "data": "UOM", "title": "UOM" },
                    { "data": "Length", "title": "Length" }
                    { "data": "Breadth", "title": "Breadth" }
                    { "data": "Height", "title": "Height" }
                    {
                        "data": "ProductId", "title": "Price", render: function (data) {
                            debugger
                            
                            var obj = {
                                Productid : data,                                
                            };
                            var Rate
                            $.ajax({
                                async: false,
                                url: "/Price/FieldVal",
                                method: "POST",
                                data: obj,                                
                                dataType: "json",
                                success: function (response) {
                                    debugger                                   
                                    Rate = response.Rate;

                                },
                                error: function (err) {
                                    console.log(err);

                                }
                            });
                            debugger
                            var img = '<button type="button" class="btn btn-default"  onclick="return PriceForm(' + data + ')">' + Rate + ' <i class="fa fa-dollar-sign"></i></button>';
                            return img;




                        },
                        "width": "80px",

                    },
                    {
                        "data": "ProductId", "title": "Images", render: function (data) {
                            // return '<a class="btn btn-info btn-sm" onclick = "PopupForm('@Url.Action("CustomerForm","Home")">Edit</a> <a href="" class=" ml-4 btn btn-danger btn-sm">Danger </a>'
                            //return "<a class='btn btn-info btn-sm' onclick = 'PopupForm(@Url.Action("CustomerForm","Home")>Edit</a> <a class= 'ml-4 btn btn-danger btn-sm'>Danger </a>"
                            //var img = '<button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#imgModal" onclick="return ID(' + data + ')>Add New</button>'
                            //return img
                            var img = '<button type="button" class="btn "  onclick="return ImgForm(' + data + ')"><i class="fa fa-camera-retro fa-lg"></i></button>'
                            return img
                        },
                        "width": "80px",

                    },
                    {
                        "data": "ProductId", render: function (data) {
                            // return '<a class="btn btn-info btn-sm" onclick = "PopupForm('@Url.Action("CustomerForm","Home")">Edit</a> <a href="" class=" ml-4 btn btn-danger btn-sm">Danger </a>'
                            //return "<a class='btn btn-info btn-sm' onclick = 'PopupForm(@Url.Action("CustomerForm","Home")>Edit</a> <a class= 'ml-4 btn btn-danger btn-sm'>Danger </a>"
                            var but = '<button type="button" class="btn btn-info btn-sm"  onclick="return PopupForm(' + data + ')">Edit</button><button type="button" class="btn btn-danger btn-sm ml-4"   onclick="return deleteprodID(' + data + ')">Delete</button>'
                            return but
                        },
                        "width": "120px",
                    },
                ],
            })
        }
    });
};
function PopupForm(ProdId) {
    debugger
    var Id = ProdId;
    debugger
    $.ajax({
        type: "GET",
        url: "../Product/Record",
        //data: {\"CustomerId\":1,\"CustomerName\":\"m\",\"CustomerEmail\":\"a@gmail.com\",\"CustomerAddress\":\"nag\",\"CustomerPan\":112,\"CustomerNumber\":\"1234567  \"},
        // data: '{id:"'+ Id + '"}',
        data: { id: Id },
        //contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            debugger
            if (response != null) {
                $('#modal-default').modal('show');
                $("#Prodname").val(response.ProductName);
                $("#Prodid").val(response.ProductId);
                const attr = document.createAttribute("disabled");
                const node = document.getElementById("Prodid");
                node.setAttributeNode(attr);
            }

            else {
                return false;
            }
            debugger
            return console.log(response);


        },
    })
}

function ImgForm(prodId) {
    $('#imgdrag').modal('show');
    var id = prodId;
    $("#Addimg").val(id);
    debugger
    $.ajax({
        url: "/Product/GetSp",
        method: "POST",
        data: '{id:"' + id + '"}',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            debugger
            //console.log("data");

            $('#imgdata').DataTable({
                //"responsive": true,
                //"lengthChange": false,
                //"autoWidth": true,
                //"dom": 'Bfrtip',
                "destroy": true,
                data: data,

                columns: [

                    { "data": "productid", "title": "Productid" },
                    { "data": "imgname", "title": "Name" },
                    {
                        "data": "imgname", render: function (data) {
                            debugger
                            //var name = '"' + data + '"';
                            //console.log(name);
                            var img = '<button type="button" onclick = "enlarge(\'' + data + '\')"><img src = "/Images/' + data + '" alt = "enlarge"  style = "height:80px;width:80px;" /></button> '
                            return img

                        },
                    },
                    {
                        "data": "Itemid", render: function (data) {

                            var but = '<button type="button" class="btn btn-warning btn-sm ml-4"  onclick="return editID(' + data + ')" >Edit</button><button type="button" class="btn btn-danger btn-sm ml-4"   onclick="return deleteID(' + data + ')">Delete</button>'
                            return but
                        },
                        "width": "150px",
                    },



                ],
                //columnsDefs:[
                //    {
                //        target: [3],                    
                //        render: function (data, type, row) {
                //            return row['Itemid'];
                //            //var img = '<button type="button"id="' + row["Itemid"] + '"><img src = "/Images/' + data + '"  style = "height:80px;width:80px;" /></button> '
                //            //return img
                //        }
                //    }
                //],



            })

        },
        error: function (err) {
            console.error(err);

        }
    })


}


function editID(id) {
    $('#editmodal').modal('show');
    debugger
    $("#editimg").val(id);
}
// Jquery draggable


function deleteID(id) {
    debugger
    $('#deletemodal').modal('show');
    $("#id").val(id);
}

function Delete() {
    debugger
    var id = $("#id").val();

    $.ajax({
        url: "/Product/Deleteimg",
        method: "POST",
        data: '{id:"' + id + '"}',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (id > 400) {
                alert(data);
                location.reload();
            }
            else {
                DeleteProd(id);
            }

        }
    })
}
function DeleteProd(id) {

    debugger
    $.ajax({
        url: "/Product/Delete",
        method: "POST",
        data: '{id:"' + id + '"}',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            debugger
            //console.log("data");
            alert(data);
            location.reload();

        },
        error: function (err) {
            console.error(err);

        }
    })
}

editDropzone.element.querySelector("#editimg").addEventListener("click", function (e) {
    debugger
    // make sure that the form isn't actually being sent.
    e.preventDefault();
    e.stopPropagation();


    debugger
    debugger

    var id = $("#editimg").val();
    var productid = $("Addimg").val();

    var photo = editDropzone.files;
    console.log(photo);
    var formData = new FormData();
    // these image appends are getting dropzones instances
    formData.append("Itemid", id);// regular text form attachment
    formData.append("productid", productid); // regular text form attachment
    if (photo.length > 0) {
        for (var i = 0; i < photo.length; i++) {
            formData.append("file" + i, photo[i]);
        }
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        $.ajax({
            type: 'POST',
            url: "/Product/Updateimg",
            data: formData,
            processData: false, // required for formdata with jquery
            contentType: false, // required for formdata with jquery
            success: function (response) {
                alert(response);
                location.reload();
            }
        });
    }
    else {
        alert("Please Add images");
    }

    //display formData







});

function deleteprodID(id) {
    debugger
    $('#deletemodal').modal('show');
    $("#id").val(id);
}

document.getElementById("editprod").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();


    debugger
    debugger
    var id = $("#Prodid").val();
    var name = $("#Prodname").val();
    var obj = {
        ProductId: id,
        ProductName: name,

    }
    $.ajax(
        {
            url: "/Product/Update",
            method: "POST",
            data: obj,
            success: function (data) {
                debugger
                //console.log("data");
                if (data) {
                    alert("Edit Made");
                    location.reload();
                }

            },
            error: function (err) {
                console.error(err);

            }



        }
    )

})


function enlarge(name) {
    debugger
    var imgname = name;
    $('#modalenlarge').modal('show');
    var element = document.getElementById("inputsrc");
    element.setAttribute("src", '/Images/' + imgname + '');



    //var imgname = name;
    //$("#inputsrc").append(
    //    '<img src="/Images/' + imgname + '" style="height:80px;width:80px;" id="enlargeimg" />');

    //const node = document.getElementById("enlargeimg");
    //node.setAttribute('src', '/Images/' + imgname + '');

}


///////////////////////Price functions



function PriceForm(prodid) {
    debugger
    id = prodid;
    $('#product').val(id);
    $('#pricedrag').modal('show');

    debugger
    $.ajax({
        async: false,
        url: "/Price/FieldVal",
        method: "POST",
        data: '{id:"' + id + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            debugger
            var x = new Date(parseInt(response.EndDate.substr(6)));      
            $('#entrydate').datepicker({
                format: 'L',                
            });            
            $('#enddate').datepicker({
                format: 'L',               

            });
            $("#entrydate").datepicker("option", "minDate", x);
            $("#enddate").datepicker("option", "minDate", x);
        }
    })
    debugger
    $.ajax({
        url: "/Price/PriceDatatable",
        method: "POST",
        data: '{id:"' + id + '"}',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            debugger
            //console.log("data");

            $('#pricedata').DataTable({
                //"responsive": true,
                //"lengthChange": false,
                //"autoWidth": true,
                //"dom": 'Bfrtip',
                "destroy": true,
                data: data,

                columns: [

                    { "data": "PriceId", "title": "Price Id" },
                    {
                        "data": "StartDate", "title": "Start Date", render: function (data) {

                            var x = new Date(parseInt(data.substr(6)));
                            var year = x.getFullYear();
                            var month = (1 + x.getMonth()).toString();
                            month = month.length > 1 ? month : '0' + month;
                            var day = x.getDate().toString();
                            day = day.length > 1 ? day : '0' + day;
                            var date = month + '/' + day + '/' + year;
                            return '<span>' + date + '</span>'
                        }

                    },
                    {
                        "data": "EndDate", "title": "End Date", render: function (data) {

                            var y = new Date(parseInt(data.substr(6)));
                            var year = y.getFullYear();
                            var month = (1 + y.getMonth()).toString();
                            month = month.length > 1 ? month : '0' + month;
                            var day = y.getDate().toString();
                            day = day.length > 1 ? day : '0' + day;
                            var date = month + '/' + day + '/' + year;
                            return '<span>' + date + '</span>'
                        }
                    },
                    { "data": "Rate", "title": "Rate" },
                    {
                        "data": "PriceId", render: function (data) {

                            var but = '<button type="button" class="btn btn-warning btn-sm ml-4"  onclick="return editprice(' + data + ')" >Edit</button><button type="button" class="btn btn-danger btn-sm ml-4"   onclick="return deleteprice(' + data + ')">Delete</button>'
                            return but
                        },
                        "width": "150px",
                    },



                ],
                //columnsDefs:[
                //    {
                //        target: [3],                    
                //        render: function (data, type, row) {
                //            return row['Itemid'];
                //            //var img = '<button type="button"id="' + row["Itemid"] + '"><img src = "/Images/' + data + '"  style = "height:80px;width:80px;" /></button> '
                //            //return img
                //        }
                //    }
                //],



            })

        },
        error: function (err) {
            console.error(err);

        }
    })
}

function Addprice() {
    debugger
    var product = $('#product').val();
    var price = $('#price').val();
    var sdate = $('#entrydate').val();
    var edate = $("#enddate").val();
    var rate = $('#prodRate').val();
    debugger
    if (price) {
        debugger

        var obj = {
            PriceId: price,
            StartDate: sdate,
            EndDate: edate,
            Rate: rate
        }
        $.ajax(
            {
                url: "/Price/Update",
                method: "POST",
                data: obj,
                success: function (data) {
                    debugger
                    //console.log("data");
                    if (data) {
                        alert("Updated Successfully");
                        location.reload();
                    }

                },
                error: function (err) {
                    console.error(err);

                }



            }
        )

    }
    else {
        debugger
        if (sdate == "" || edate == "" || rate == "") {
            alert("Please Fill details");
        }
        else {
            var obj = {
                ProductId: product,
                StartDate: sdate,
                EndDate: edate,
                Rate: rate
            }

            $.ajax(
                {
                    url: "/Price/Add",
                    method: "POST",
                    data: obj,
                    success: function (data) {
                        debugger
                        //console.log("data");
                        if (data) {
                            alert("Added Successfully");
                            location.reload();
                        }

                    },
                    error: function (err) {
                        console.error(err);

                    }



                }
            )
        }
        
    }

}
function editprice(priceid) {
    debugger
    var ID = priceid;
    var product = $("#product").val();
    var obj = {
        PriceId: ID,
        ProductId: product
    }
    debugger
    //date validation
    $.ajax({
        url:"/Price/FieldVal",
        method:"POST",
        data: obj,
        success: function (response) {
            debugger
            if (response !="false") {
                debugger
                var x = new Date(parseInt(response.StartDate.substr(6)));
                $("#entrydate").datepicker("option", "maxDate", x);
                $("#enddate").datepicker("option", "maxDate", x);
            }
            else {
                alert(response);
            }            
            debugger
        },
        error: function (err) {
            console.log(err);
            alert("Check editprice function");
        }
    })
    //date validation
    
    debugger
    $('#price').val(ID);
    $.ajax(
        {
            url: "/Price/Record",
            method: "POST",
            data: obj,            
            success: function (data) {

                //console.log("data");
                if (data) {
                    debugger
                    var x = new Date(parseInt(data.StartDate.substr(6)));
                    var year = x.getFullYear();
                    var month = (1 + x.getMonth()).toString();
                    month = month.length > 1 ? month : '0' + month;
                    var day = x.getDate().toString();
                    day = day.length > 1 ? day : '0' + day;
                    var date1 = month + '/' + day + '/' + year;
                    //var element1 = document.getElementById('reservationdate');
                    //element1.setAttribute('value', date1);

                    $('#entrydate').val(date1);


                    var y = new Date(parseInt(data.EndDate.substr(6)));
                    var year = y.getFullYear();
                    var month = (1 + y.getMonth()).toString();
                    month = month.length > 1 ? month : '0' + month;
                    var day = y.getDate().toString();
                    day = day.length > 1 ? day : '0' + day;
                    var date2 = month + '/' + day + '/' + year;
                    //var element2 = document.getElementById('reservation');
                    //element2.setAttribute('value', date2);
                    $('#enddate').val(date2);

                    $('#prodRate').val(data.Rate);


                    //const node = document.getElementById("collapse");
                    //node.setAttribute("class", "card  card-outline card-primary");
                }
            },
            error: function (err) {
                console.error(err);

            }



        }
    )
}
function deleteprice(priceid) {
    var id = priceid;
    debugger
    $.ajax(
        {
            url: "/Price/Delete",
            method: "POST",
            data: '{id:"' + id + '"}',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                debugger
                //console.log("data");
                if (data) {
                    alert(data);
                    location.reload();
                }

            },
            error: function (err) {
                console.error(err);

            }



        }
    )
}
function Refresh() {
    debugger
    
    var datepickerObject1 = document.getElementById("entrydate");
   
    var datepickerObject2 = document.getElementById("enddate");
    debugger


    //Clear date 
    datepickerObject1.value = null;
    datepickerObject2.value = null;

    //clear text fields
    $("#prodRate").val("");
    
        
    }