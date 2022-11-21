using AdminLTE.Models.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
namespace AdminLTE.Models.DbOperations
{
    public class CustomerOp
    {
        public int AddCustomer(Customers_Struct customer)
        {
            using (var context = new Quotations2Entities1())
            {
                Customers cus = new Customers()
                {
                    CustomerId = customer.CustomerId,
                    CustomerName = customer.CustomerName,
                    CustomerEmail = customer.CustomerEmail,
                    CustomerAddress = customer.CustomerAddress,
                    CustomerNumber = customer.CustomerNumber,
                    CustomerPan = customer.CustomerPan,

                };
                var ensureDLLIsCopied = System.Data.Entity.SqlServer.SqlProviderServices.Instance;
                context.Customers.Add(cus);
                context.SaveChanges();
                return cus.CustomerId;

            }

        }

        //get customer data
        public Customers_Struct Record(int id)
        {
            using (var context = new Quotations2Entities1())
            {
                var cus = context.Customers
                    .Where(c => c.CustomerId == id)
                    .Select(x => new Customers_Struct()
                    {
                        CustomerId = x.CustomerId,
                        CustomerName = x.CustomerName,
                        CustomerEmail = x.CustomerEmail,
                        CustomerAddress = x.CustomerAddress,
                        CustomerNumber = x.CustomerNumber,
                        CustomerPan = x.CustomerPan,
                    }).FirstOrDefault();
                return cus;
            };




        }

        /* Get Customers  data*/
        public List<Customers_Struct> GetCustomer_Structs()
        {
            using (var context = new Quotations2Entities1())
            {
                var results = context.Customers.Select(x => new Customers_Struct()
                {
                    CustomerId = x.CustomerId,
                    CustomerName = x.CustomerName,
                    CustomerEmail = x.CustomerEmail,
                    CustomerAddress = x.CustomerAddress,
                    CustomerNumber = x.CustomerNumber,
                    CustomerPan = x.CustomerPan,
                }).ToList();
                return results;
            }
        }

        /*update customer*/
        public bool UpdateCustomer( Customers_Struct customer)
        {
            using (var context = new Quotations2Entities1())
            {
                var cus = context.Customers.FirstOrDefault(x => x.CustomerId == customer.CustomerId);
                
                
                    cus.CustomerName = customer.CustomerName;
                    cus.CustomerEmail = customer.CustomerEmail;
                    cus.CustomerAddress = customer.CustomerAddress;
                    cus.CustomerNumber = customer.CustomerNumber;
                    cus.CustomerPan = customer.CustomerPan;
                    context.SaveChanges();
                    return true;
                
                
            }


        }

        /*delete customer*/
        public bool DeleteCustomer(int id)
        {
            using (var context = new Quotations2Entities1())
            {
                var cus = context.Customers.FirstOrDefault(x => x.CustomerId == id);
                if (cus != null)
                {
                    context.Customers.Remove(cus);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }


    }
}
