using AdminLTE.Models.DbOperations;
using AdminLTE.Models.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AdminLTE.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        //initializing & declaring a variable of dboperations
        EmployeeOp Op = new EmployeeOp();
        // GET: Employee Form
        public ActionResult Registeration()
        {
            return View();
        }

        //POST: Employee Form
        public ActionResult Add(Employee_Struct employee)
        {
            if (ModelState.IsValid)
            {

                int id = Op.Add(employee);
                if (id > 0)
                {
                    ModelState.Clear();

                }
                return Json("true", JsonRequestBehavior.AllowGet);

            }
            return Json("Please fill the necessary details", JsonRequestBehavior.AllowGet);
        }

        //GET Customer DataTable
        public ActionResult DataTable()
        {
            return View();
        }
        //POST Customer Datatable
        [HttpPost]
        public ActionResult GetDataTable()
        {
            var result = Op.Getlist();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //GET a single customer record

        public ActionResult Record(int id)
        {
            var result = Op.Record(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //Post updated record
        [HttpPost]
        public ActionResult Update(Employee_Struct employee)
        {
            var result = Op.Update(employee);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //Post deleted record
        [HttpPost]
        public ActionResult Delete(int id)
        {
            var result = Op.Delete(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}