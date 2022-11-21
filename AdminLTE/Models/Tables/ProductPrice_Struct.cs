using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdminLTE.Models.Tables
{
    public class ProductPrice_Struct
    {
        public int PriceId { get; set; }
        public int ProductId { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public decimal Rate { get; set; }
    }
}