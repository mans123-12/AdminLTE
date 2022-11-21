using AdminLTE.Models.Tables;
using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Deployment.Internal;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AdminLTE.Models.DbOperations
{
    public class ProductimgOp
    {
        public void Add(Productimg_Struct productimg)
        {
            using (var context = new Quotations2Entities1())
            {
                itemimg img = new itemimg()
                {
                    Itemid = productimg.Itemid,
                    productid = productimg.productid,
                    imgname = productimg.imgname,
                    imgpath = productimg.imgpath,
                    

                };
                var ensureDLLIsCopied = System.Data.Entity.SqlServer.SqlProviderServices.Instance;
                context.itemimg.Add(img);
                context.SaveChanges();
               

            }

        }

        //get customer data
        //public Products_Struct Record(int id)
        //{
        //    using (var context = new Quotations2Entities())
        //    {
        //        var prod = context.Products
        //            .Where(c => c.ProductId == id)
        //            .Select(x => new Products_Struct()
        //            {
        //                ProductId = x.ProductId,
        //                ProductName = x.ProductName,
        //            }).FirstOrDefault();
        //        return prod;
        //    };




        //}

        /* Get img  data*/
        public List<Productimg_Struct> Getlist()
        {
            using (var context = new Quotations2Entities1())
            {
                var results = context.itemimg.Select(x => new Productimg_Struct()
                {
                    Itemid=x.Itemid,
                    productid = x.productid,
                    imgname= x.imgname,
                    imgpath= x.imgpath,                     
                }).ToList();
                return results;
            }
        }

        /*update customer*/
        public bool Update(Productimg_Struct image)
        {
            using (var context = new Quotations2Entities1())
            {
                var img = context.itemimg.FirstOrDefault(x => x.Itemid == image.Itemid);


                
                
                img.imgname = image.imgname;    
                img.imgpath = image.imgpath;    
                context.SaveChanges();
                return true;


            }


        }

        /*delete single img record*/
        public bool Delete1(int id)
        {
            using (var context = new Quotations2Entities1())
            {
                var img = context.itemimg.FirstOrDefault(x => x.Itemid == id);
                if (img != null)
                {
                    context.itemimg.Remove(img);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        
        public Productimg_Struct Enlarge(int id)
        {
            using (var context = new Quotations2Entities1())
            {
                
                var img = context.itemimg
                    .Where(c => c.Itemid == id)
                    .Select(x => new Productimg_Struct()
                    {
                        
                        imgname = x.imgname,
                    }).FirstOrDefault();
                return img;
            };

        }
    }

    public class ProductpriceOp
    {
        public void Add(ProductPrice_Struct price)
        {
            using (var context = new Quotations2Entities1())
            {
                ProductPrice p = new ProductPrice()
                {
                    PriceId = price.PriceId,
                    ProductId = price.ProductId,
                    StartDate = price.StartDate,
                    EndDate = price.EndDate,
                    Rate = price.Rate,
                    
                    


                };
                var ensureDLLIsCopied = System.Data.Entity.SqlServer.SqlProviderServices.Instance;
                context.ProductPrice.Add(p);
                context.SaveChanges();


            }

        }

        //get customer data
        public ProductPrice_Struct Record(int id)
        {
            using (var context = new Quotations2Entities1())
            {
                var p = context.ProductPrice
                    .Where(c => c.PriceId == id)
                    .Select(x => new ProductPrice_Struct()
                    {
                       StartDate = x.StartDate,
                       EndDate= x.EndDate,
                       Rate= x.Rate,
                         
                    }).FirstOrDefault();
                return p;
            };




        }

        /* Get price data*/
        public List<ProductPrice_Struct> Getlist(int id)
        {
            using (var context = new Quotations2Entities1())
            {
                var results = context.ProductPrice.Where(x=>x.ProductId==id).Select(x => new ProductPrice_Struct()
                {
                    PriceId=x.PriceId,
                    ProductId = x.ProductId,
                    StartDate = x.StartDate,
                    EndDate = x.EndDate,
                    Rate = x.Rate,
                    
                }).ToList();
                return results;
            }
        }

        /*update price*/
        public bool Update(ProductPrice_Struct price)
        {
            using (var context = new Quotations2Entities1())
            {
                var p = context.ProductPrice.FirstOrDefault(x => x.PriceId == price.PriceId);
                if (p != null)
                {
                    p.StartDate = price.StartDate;
                    p.EndDate = price.EndDate;
                    p.Rate = price.Rate;
                    context.SaveChanges();
                    return true;
                }
                
                return false;


            }


        }

        /*delete single price record*/
        public bool Delete1(int id)
        {
            using (var context = new Quotations2Entities1())
            {
                var price = context.ProductPrice.FirstOrDefault(x => x.PriceId == id);
                if (price != null)
                {
                    context.ProductPrice.Remove(price);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }

        /*date based operations*/
          //for latest record according to product id
          public ProductPrice_Struct Val(int id)
        {
            using(var context = new Quotations2Entities1())
            {
                ProductPrice_Struct val = new ProductPrice_Struct();
                var result = context.Item_Rec_Mod(id);
                foreach (var item in result)
                {
                    ProductPrice_Struct p = new ProductPrice_Struct();
                    p.ProductId = item.ProductId;
                    p.PriceId = item.PriceId;
                    p.StartDate = item.StartDate;
                    p.EndDate = item.EndDate;
                    p.Rate = item.Rate;
                    val = p;


                }
                return val;


            }
        }

         //for record after the chosen
         public List<StartDate_Lead_Struct> EditDate(int id)
        {
            using( var context = new Quotations2Entities1())
            {
                List<StartDate_Lead_Struct> list = new List<StartDate_Lead_Struct>();
                var results = context.StartDate_Lead(id);
                foreach(var item in results.ToList())
                {
                    StartDate_Lead_Struct p = new StartDate_Lead_Struct();
                    p.PriceId = item.PriceId;
                    p.Next_Price = item.Next_Price;
                    list.Add(p);
                }
                return list;

            }
        }

    }
    public class Sp
    {
        //image table for selected product id
        public List<Sp_Product> Getlist(int id)
        {
            using (var context = new Quotations2Entities1())
            {
                List<Sp_Product> sp_Products = new List<Sp_Product>();
                var results = context.Product_cRud(id);                
                foreach(var item in results)
                {
                    Sp_Product sp = new Sp_Product();
                    sp.Itemid = item.Itemid;
                    sp.productid = item.productid;
                    sp.imgname = item.imgname;
                    sp.imgpath = item.imgpath;
                    sp_Products.Add(sp);
                }
                return sp_Products;
            };
        }
        //Delete multiple images with product as parameter
        public bool Delete(int id)
        {
            using(var context = new Quotations2Entities1())
            {
                var results = context.Deletemul_images(id);
                if (results == -1)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            
            
        }
    }
}