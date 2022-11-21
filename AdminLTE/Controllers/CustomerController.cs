using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AdminLTE.Models.Tables;
using System.Web.Mvc;
using AdminLTE.Models.DbOperations;


namespace AdminLTE.Controllers
{
    public class CustomerController : Controller
    {

        //initializing & declaring a variable of dboperations
        CustomerOp CustomerOp =new CustomerOp();
        
       
        //POST: Customer Form
        public ActionResult AddCustomer(Customers_Struct customer)
        {
            if (ModelState.IsValid)
            {

                int id = CustomerOp.AddCustomer(customer);
                if (id > 0)
                {
                    ModelState.Clear();

                }
                return Json("true", JsonRequestBehavior.AllowGet);
                
            }
            return Json("Please fill the necessary details", JsonRequestBehavior.AllowGet);
        }

        //GET Customer DataTable
        public ActionResult CustomerDataTable()
        {
            return View();
        }
        //POST Customer Datatable
        [HttpPost]
        public ActionResult GetCustomerDataTable()
        {
            var result = CustomerOp.GetCustomer_Structs();           
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //GET a single customer record
        
        public ActionResult CustomerRecord(int id)
        {
            var result = CustomerOp.Record(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //Post updated record
        [HttpPost]
        public ActionResult UpdateCustomer(Customers_Struct customer)
        {
           var result =  CustomerOp.UpdateCustomer(customer);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //Post deleted record
        [HttpPost]
        public ActionResult DeleteCustomer(int id)
        {
            var result = CustomerOp.DeleteCustomer(id);
            return Json(result, JsonRequestBehavior.AllowGet);                  
        }
    }
}