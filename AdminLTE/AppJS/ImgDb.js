debugger
//$(document).ready(function () {
//    GetImgTable();
//});

function GetImgTable() {


    debugger
    $.ajax({
        url: "../Product/GetImgDatatable",
        type: "POST",
        //data: {\"CustomerId\":1,\"CustomerName\":\"m\",\"CustomerEmail\":\"a@gmail.com\",\"CustomerAddress\":\"nag\",\"CustomerPan\":112,\"CustomerNumber\":\"1234567  \"},
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            console.log("data")
            debugger
            $('#imgtabledata').DataTable({
                //"responsive": true,
                //"lengthChange": false,
                //"autoWidth": true,
                //"dom": 'Bfrtip',

                data: data,




                columns: [

                    { "data": "productid", "title": "Productid" },
                    { "data": "imgname", "title": "Name" },
                    { "data": "imgpath", "title": "Path" },
                    {
                        "data": "Itemid", render: function (data) {
                            // return '<a class="btn btn-info btn-sm" onclick = "PopupForm('@Url.Action("CustomerForm","Home")">Edit</a> <a href="" class=" ml-4 btn btn-danger btn-sm">Danger </a>'
                            //return "<a class='btn btn-info btn-sm' onclick = 'PopupForm(@Url.Action("CustomerForm","Home")>Edit</a> <a class= 'ml-4 btn btn-danger btn-sm'>Danger </a>"
                            var img = '<button type="button" class="btn " data-toggle="modal" data-target="#myModal" onclick="return PopupForm(' + data + ')"><i class="fa fa-camera-retro fa-lg"></i></button>'
                            return img
                        },

                    },
                    {
                        "data": "Itemid", render: function (data) {
                            // return '<a class="btn btn-info btn-sm" onclick = "PopupForm('@Url.Action("CustomerForm","Home")">Edit</a> <a href="" class=" ml-4 btn btn-danger btn-sm">Danger </a>'
                            //return "<a class='btn btn-info btn-sm' onclick = 'PopupForm(@Url.Action("CustomerForm","Home")>Edit</a> <a class= 'ml-4 btn btn-danger btn-sm'>Danger </a>"
                            var but = '<button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal" onclick="return PopupForm(' + data + ')">Edit</button><button type="button" class="btn btn-danger btn-sm ml-4" data-toggle="modal" data-target="#deletemodal"  onclick="return ID(' + data + ')">Delete</button>'
                            return but
                        },
                        "width": "120px",
                    },
                    
                    
                    
                ],
            })
        }
    });
};
