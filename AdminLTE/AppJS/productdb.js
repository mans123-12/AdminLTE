$(document).ready(function () {
    GetTable();
});

function GetTable() {



    $.ajax({
        url: "../Product/GetDataTable",
        type: "POST",
        //data: {\"CustomerId\":1,\"CustomerName\":\"m\",\"CustomerEmail\":\"a@gmail.com\",\"CustomerAddress\":\"nag\",\"CustomerPan\":112,\"CustomerNumber\":\"1234567  \"},
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            debugger
            $('#tabledata').DataTable({
                //"responsive": true,
                //"lengthChange": false,
                //"autoWidth": true,
                //"dom": 'Bfrtip',

                data: data,




                columns: [

                    { "data": "ProductName", "title": "Name" },
                    {
                        "data": "ProductId", render: function (data) {
                            // return '<a class="btn btn-info btn-sm" onclick = "PopupForm('@Url.Action("CustomerForm","Home")">Edit</a> <a href="" class=" ml-4 btn btn-danger btn-sm">Danger </a>'
                            //return "<a class='btn btn-info btn-sm' onclick = 'PopupForm(@Url.Action("CustomerForm","Home")>Edit</a> <a class= 'ml-4 btn btn-danger btn-sm'>Danger </a>"
                            //var img = '<button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#imgModal" onclick="return ID(' + data + ')>Add New</button>'
                            //return img
                            var img = '<button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#imgModal" onclick="return ID(' + data + ')">Add New</button>'
                            return img
                        },
                        "width": "80px",
                        
                    },
                    {
                        "data": "ProductId", render: function (data) {
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




//Update Modal
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
                $("#prodId").val(response.ProductId);
                $("#prodName").val(response.ProductName);
            }

            else {
                return false;
            }
            debugger
            return console.log(response);


        },
    })
}

function Update() {




    var id = $("#prodId").val();
    var name = $("#prodName").val();
    debugger
    var obj = {
        ProductId: id,
        ProductName: name,

    }

    debugger

    SubmitForm(obj)
}

function SubmitForm(obj) {
    $.ajax(
        {
            url: "/Product/Update",
            method: "POST",
            data: obj,
            success: function (data) {
                debugger
                //console.log("data");
                alert(data);
            },
            error: function (err) {
                console.error(err);

            }



        }
    )
}

//Delete Modal
function ID(prodId) {
    var id = prodId;
    debugger
    $("#prodId").val(id);

}
function Delete() {
    var prod_id = $("#prodId").val();
    debugger
    $.ajax({
        url: "/Product/Delete",
        method: "POST",
        data: '{id:"' + prod_id + '"}',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            debugger
            //console.log("data");
            
        },
        error: function (err) {
            console.error(err);

        }
    })
}