using AdminLTE.Models;
using AdminLTE.Models.DbOperations;
using AdminLTE.Models.Tables;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace AdminLTE.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product

        //initializing & declaring a variable of dboperations
        
        ProductOp Op = new ProductOp(); //Crud Product,non sp
        ProductimgOp ProductimgOp = new ProductimgOp(); //Crud Image, non sp
        Sp Sp = new Sp();
        // GET: Employee Form
        public ActionResult Registeration()
        {
            return View();
        }

        //POST:  Form
        public ActionResult Add(Products_Struct product)
        {
            if (ModelState.IsValid)
            {

                int id = Op.Add(product);
                
                return Json(id, JsonRequestBehavior.AllowGet);

            }
            return Json("Please fill the necessary details", JsonRequestBehavior.AllowGet);
        }

        //GET  DataTable
        public ActionResult DataTable()
        {
            return View();
        }
        //POST  Datatable
        [HttpPost]
        public ActionResult GetDataTable()
        {
            
            var result = Op.Getlist();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //GET a single  record

        public ActionResult Record(int id)
        {
            var result = Op.Record(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //Post updated record
        [HttpPost]
        public JsonResult Update(Products_Struct product)
        {
            var result = Op.Update(product);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //Post deleted record
        [HttpPost]
        public ActionResult Delete(int id)
        {
            var result = Op.Delete(id);
            return Json("Deleted Product", JsonRequestBehavior.AllowGet);
        }

        //Get product image
        public ActionResult GetImg()
        {
            return View();
        }
        

        //Post product img
        [HttpPost]
        public JsonResult Addimg(Productimg_Struct image)
        {
            if (image.productid!=0)
            {
                if (HttpContext.Request.Files.Count > 0) //number of files
                {
                    
                    
                    for (int i = 0; i < Request.Files.Count; i++) //loop through files
                    {
                        image.file = Request.Files[i]; // get file
                        string filename = Path.GetFileName(image.file.FileName);
                        image.imgname = filename; // get image name from particular file                  
                        image.imgpath = Server.MapPath("~/Images/");
                        image.file.SaveAs(Path.Combine(Server.MapPath("~/Images/"), filename));
                        ProductimgOp.Add(image);
                    }
                    return Json("Uploaded Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    ProductimgOp.Add(image);
                    return Json("Uploaded Successfully", JsonRequestBehavior.AllowGet);
                }

            }           
            return Json("Please fill  details", JsonRequestBehavior.AllowGet);
        }

        //Get Product Image DataTable
        public ActionResult ImgDatatable()
        {
            return View();
        }

        //POST Img Datatable
        [HttpPost]
        public ActionResult GetImgDatatable()
        {
            var result = ProductimgOp.Getlist();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //Post Sp 1
        [HttpPost]
        public JsonResult GetSp(int id)
        {
            var result = Sp.Getlist(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        //Update image record
        [HttpPost]
        public JsonResult Updateimg(Productimg_Struct image)
        {
            if (HttpContext.Request.Files.Count > 0) //number of files
            {
                image.file = Request.Files[0]; // get file
                string filename = Path.GetFileName(image.file.FileName);
                image.imgname = filename; // get image name from particular file                  
                image.imgpath = Server.MapPath("~/Images/");
                image.file.SaveAs(Path.Combine(Server.MapPath("~/Images/"), filename));
                ProductimgOp.Update(image);

                return Json("Uploaded Successfully", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Please Add image", JsonRequestBehavior.AllowGet);

            }
        }

        //Delete 1 image record
        [HttpPost]
        public JsonResult Deleteimg(int id)
        {
            if (id>400)
            {
                var result = ProductimgOp.Delete1(id);
                if (result == true)
                {
                    return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("Deletion Failed, Record does not Exist", JsonRequestBehavior.AllowGet);
                }
            }
            else if(id>100)
            {
                var result = Sp.Delete(id);
                if (result == true) { 
                    return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("Deletion Failed, Record does not Exist", JsonRequestBehavior.AllowGet);
                }
               
            }
            else
            {
                return Json("Enter valid Id", JsonRequestBehavior.AllowGet);
            }
            
        }

        //Post imgname
        [HttpPost]
        public JsonResult Enlargeimg(int id)
        {
            var Result = ProductimgOp.Enlarge(id); 
            return Json(Result, JsonRequestBehavior.AllowGet);
        }

        
    }  
    public class PriceController: Controller
    {
        ProductpriceOp p = new ProductpriceOp();

        //Add price
        [HttpPost]
        public JsonResult Add(ProductPrice_Struct Price)
        {
            if (Price.ProductId != 0)
            {
                if (Price.StartDate != null && Price.EndDate != null && Price.Rate != 0)
                {
                    p.Add(Price);
                    return Json("Uploaded Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("Please fill details", JsonRequestBehavior.AllowGet);
                }
            }
            else if(Price.PriceId != 0)
            {
                p.Update(Price);
                return Json("Updated Successfully", JsonRequestBehavior.AllowGet);

            }
            else
            {
                return Json("Please fill  details", JsonRequestBehavior.AllowGet);

            }
           
        }

        //Price DataTable
        [HttpPost]
        public JsonResult PriceDatatable(int id)
        {
            var result = p.Getlist(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //Get record
        [HttpPost]
        public JsonResult Record(ProductPrice_Struct price)
        {
            var result = p.Record(price.PriceId);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //Update
        public JsonResult Update(ProductPrice_Struct instance)
        {
            var result = p.Update(instance);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //Delete price record
        [HttpPost]
        public JsonResult Delete(int id)
        {
            var result = p.Delete1(id);
            if (result == true)
            {
                return Json("Updated", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Failed", JsonRequestBehavior.AllowGet);
            }
        }

        //Get a single record for further manipulation of individual fields

        public JsonResult FieldVal(ProductPrice_Struct price)
        {
            if (price.PriceId!=0)
            {
                var results = p.EditDate(price.ProductId);
                foreach(var item in results)
                {
                    if (price.PriceId == item.PriceId)
                    {
                        if(item.Next_Price != null)
                        {
                            int id = (int)item.Next_Price;
                            var record = p.Record(id);
                            return Json(record, JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Any future Date works", JsonRequestBehavior.AllowGet);

                        }
                    } ;

                }

                return Json("false", JsonRequestBehavior.AllowGet);
            }
            else
            {
                var result = p.Val(price.ProductId);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            
        }
    }
}