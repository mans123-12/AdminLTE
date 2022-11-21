using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AdminLTE.Models.Tables
{
    public class Productimg_Struct
    {
        public int Itemid { get; set; }
        [Required]
        public int productid { get; set; }
        [Required]
        public string imgname { get; set; }
        [Required]
        public string imgpath { get; set; }

        [NotMapped]
        public HttpPostedFileBase file { get; set; }
        

    }
}