using AdminLTE.Models.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdminLTE.Models.DbOperations
{
    public class EmployeeOp
    {
        public int Add(Employee_Struct employee)
        {
            using (var context = new Quotations2Entities1())
            {
                Employee emp = new Employee()
                {
                    EmployeeId = employee.EmployeeId,
                    EmployeeName = employee.EmployeeName,
                    EmployeeEmail = employee.EmployeeEmail,
                    EmployeeAddress = employee.EmployeeAddress,
                    EmployeeNumber = employee.EmployeeNumber,
                };
                var ensureDLLIsCopied = System.Data.Entity.SqlServer.SqlProviderServices.Instance;
                context.Employee.Add(emp);
                context.SaveChanges();
                return emp.EmployeeId;

            }

        }

        //get customer data
        public Employee_Struct Record(int id)
        {
            using (var context = new Quotations2Entities1())
            {
                var emp = context.Employee
                    .Where(c => c.EmployeeId == id)
                    .Select(x => new Employee_Struct()
                    {
                        EmployeeId = x.EmployeeId,
                        EmployeeName = x.EmployeeName,
                        EmployeeEmail = x.EmployeeEmail,
                        EmployeeAddress = x.EmployeeAddress,
                        EmployeeNumber = x.EmployeeNumber,
                    }).FirstOrDefault();
                return emp;
            };




        }

        /* Get Customers  data*/
        public List<Employee_Struct> Getlist()
        {
            using (var context = new Quotations2Entities1())
            {
                var results = context.Employee.Select(x => new Employee_Struct()
                {
                    EmployeeId = x.EmployeeId,
                    EmployeeName = x.EmployeeName,
                    EmployeeEmail = x.EmployeeEmail,
                    EmployeeAddress = x.EmployeeAddress,
                    EmployeeNumber = x.EmployeeNumber,
                }).ToList();
                return results;
            }
        }

        /*update customer*/
        public bool Update(Employee_Struct employee)
        {
            using (var context = new Quotations2Entities1())
            {
                var emp = context.Employee.FirstOrDefault(x => x.EmployeeId == employee.EmployeeId);


                emp.EmployeeId = employee.EmployeeId;
                emp.EmployeeName = employee.EmployeeName;
                emp.EmployeeEmail = employee.EmployeeEmail;
                emp.EmployeeAddress = employee.EmployeeAddress;
                emp.EmployeeNumber = employee.EmployeeNumber;
                context.SaveChanges();
                return true;


            }


        }

        /*delete customer*/
        public bool Delete(int id)
        {
            using (var context = new Quotations2Entities1())
            {
                var emp = context.Employee.FirstOrDefault(x => x.EmployeeId == id);
                if (emp != null)
                {
                    context.Employee.Remove(emp);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
    }
}