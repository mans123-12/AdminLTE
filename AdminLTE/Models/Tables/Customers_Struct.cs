using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace AdminLTE.Models.Tables
{
    public class Customers_Struct
    {
        
        public int CustomerId { get; set; }
        [Required]
        public string CustomerName { get; set; }
        [EmailAddress]
        public string CustomerEmail { get; set; }
        [Required]
        public string CustomerAddress { get; set; }
        [Required]
        public string CustomerPan { get; set; }
        [Required]
        public string CustomerNumber { get; set; }
    }
}