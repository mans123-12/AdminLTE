$(document).ready(function () {
    GetTable();
});

function GetTable() {



    $.ajax({
        url: "../Employee/GetDataTable",
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

                    { "data": "EmployeeName", "title": "Name" },
                    { "data": "EmployeeEmail", "title": "Email" },
                    { "data": "EmployeeAddress", "title": "Address" },

                    { "data": "EmployeeNumber", "title": "Mobile no" },
                    {
                        "data": "EmployeeId", render: function (data) {
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
function PopupForm(EmpId) {
    debugger
    var Id = EmpId;
    debugger
    $.ajax({
        type: "GET",
        url: "../Employee/Record",
        //data: {\"CustomerId\":1,\"CustomerName\":\"m\",\"CustomerEmail\":\"a@gmail.com\",\"CustomerAddress\":\"nag\",\"CustomerPan\":112,\"CustomerNumber\":\"1234567  \"},
        // data: '{id:"'+ Id + '"}',
        data: { id: Id },
        //contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            debugger
            if (response != null) {
                $("#empId").val(response.EmployeeId);
                $("#empName").val(response.EmployeeName);
                $("#empEmail").val(response.EmployeeEmail);
                $("#empAddress").val(response.EmployeeAddress);
                $("#empNumber").val(response.EmployeeNumber);

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




    var id = $("#empId").val();
    var name = $("#empName").val();
    var email = $("#empEmail").val();
    var address = $("#empAddress").val();
    var number = $("#empNumber").val();
    

    debugger

    if (id) {
        var obj1 = {
            EmployeeId: id,
            EmployeeName: name,
            EmployeeEmail: email,
            EmployeeAddress: address,
            EmployeeNumber: number,
        }
        $.ajax(
            {
                url: "/Employee/Update",
                method: "POST",
                data: obj1,
                success: function (data) {
                    debugger
                    //console.log("data");
                    alert(data);
                    location.reload();
                },
                error: function (err) {
                    console.error(err);

                }



            }
        )
        debugger
    }
    else {
        var obj2 = {

            EmployeeName: name,
            EmployeeEmail: email,
            EmployeeAddress: address,
            EmployeeNumber: number,
        }
        debugger
        $.ajax(
            {
                url: "/Employee/Add",
                method: "POST",
                data: obj2,
                success: function (data) {
                    debugger
                    //console.log("data");
                    alert(data);
                    location.reload();
                },
                error: function (err) {
                    console.error(err);

                }



            }
        )
    }
}

//Delete Modal
function ID(EmpId) {
    var id = EmpId;
    debugger
    $("#empId").val(id);

}
function Delete() {
    var emp_id = $("#empId").val();
    debugger
    $.ajax({
        url: "/Employee/Delete",
        method: "POST",
        data: '{id:"' + emp_id + '"}',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            debugger
            //console.log("data");
            alert(data);
        },
        error: function (err) {
            console.error(err);

        }
    })
}