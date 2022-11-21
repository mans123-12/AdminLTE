$(document).ready(function () {
    GetCustomersTable();
});

function GetCustomersTable() {



    $.ajax({
        url: "../Customer/GetCustomerDataTable",
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

                    { "data": "CustomerName", "title": "Name" },
                    { "data": "CustomerEmail", "title": "Email" },
                    { "data": "CustomerAddress", "title": "Address" },
                    { "data": "CustomerPan", "title": "Pan" },
                    { "data": "CustomerNumber", "title": "Mobile no" },
                    {
                        "data": "CustomerId", render: function (data) {
                            // return '<a class="btn btn-info btn-sm" onclick = "PopupForm('@Url.Action("CustomerForm","Home")">Edit</a> <a href="" class=" ml-4 btn btn-danger btn-sm">Danger </a>'
                            //return "<a class='btn btn-info btn-sm' onclick = 'PopupForm(@Url.Action("CustomerForm","Home")>Edit</a> <a class= 'ml-4 btn btn-danger btn-sm'>Danger </a>"
                            var but = '<button type="button" class="btn btn-info btn-sm"  onclick="return PopupForm(' + data + ')">Edit</button><button type="button" class="btn btn-danger btn-sm ml-4" data-toggle="modal" data-target="#deletemodal"  onclick="return ID(' + data + ')">Delete</button>'                            
                            return but
                        },
                        "width":"120px",
                    },
                ],
            })
        }
    });
};




//Update Modal
function PopupForm(CusId) {
    debugger
    var Id = CusId;
    debugger
    $.ajax({
        type: "GET",
        url: "../Customer/CustomerRecord",
        //data: {\"CustomerId\":1,\"CustomerName\":\"m\",\"CustomerEmail\":\"a@gmail.com\",\"CustomerAddress\":\"nag\",\"CustomerPan\":112,\"CustomerNumber\":\"1234567  \"},
        // data: '{id:"'+ Id + '"}',
        data: { id: Id },
        //contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            debugger
            if (response != null) {
                $("#cusId").val(response.CustomerId);
                $("#cusName").val(response.CustomerName);
                $("#cusEmail").val(response.CustomerEmail);
                $("#cusAddress").val(response.CustomerAddress);
                $("#cusPan").val(response.CustomerPan);
                $("#cusNumber").val(response.CustomerNumber);

            }
            else {
                return false;
            }
            return console.log(response);


        },
    })
}









//Delete Modal
function ID(CusId) {
    var id = CusId;
    debugger
    $("#cusId").val(id);
   
}
function Delete() {
    var cus_id = $("#cusId").val();
    debugger
    $.ajax({
        url: "/Customer/DeleteCustomer",
        method: "POST",
        data: '{id:"' + cus_id + '"}',
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