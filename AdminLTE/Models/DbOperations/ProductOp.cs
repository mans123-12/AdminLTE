using AdminLTE.Models.Tables;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AdminLTE.Models.DbOperations
{
    public class ProductOp
    {
       
        
            public int Add(Products_Struct product)
            {
                using (var context = new Quotations2Entities1())
                {
                    Products prod = new Products()
                    {
                        ProductId = product.ProductId,
                        ProductName = product.ProductName,
                        
                    };
                    var ensureDLLIsCopied = System.Data.Entity.SqlServer.SqlProviderServices.Instance;
                    context.Products.Add(prod);
                    context.SaveChanges();
                    return prod.ProductId;

                }

            }

            //get customer data
            public Products_Struct Record(int id)
            {
                using (var context = new Quotations2Entities1())
                {
                    var prod = context.Products
                        .Where(c => c.ProductId == id)
                        .Select(x => new Products_Struct()
                        {
                            ProductId = x.ProductId,
                            ProductName = x.ProductName,
                        }).FirstOrDefault();
                    return prod;
                };




            }

            /* Get Customers  data*/
            public List<Products_Struct> Getlist()
            {
                using (var context = new Quotations2Entities1())
                {
                    var results = context.Products.Select(x => new Products_Struct()
                    {
                        ProductId = x.ProductId,
                        ProductName = x.ProductName,
                    }).ToList();
                    return results;
                }
            }

            /*update customer*/
            public bool Update(Products_Struct product)
            {
                using (var context = new Quotations2Entities1())
                {
                    var prod = context.Products.FirstOrDefault(x => x.ProductId == product.ProductId);


                prod.ProductId = product.ProductId;
                prod.ProductName = product.ProductName;

                context.SaveChanges();
                    return true;


                }


            }

            /*delete customer*/
            public bool Delete(int id)
            {
                using (var context = new Quotations2Entities1())
                {
                    var prod = context.Products.FirstOrDefault(x => x.ProductId == id);
                    if (prod != null)
                    {
                        context.Products.Remove(prod);
                        context.SaveChanges();
                        return true;
                    }
                    return false;
                }
            }


        
    }
    
}