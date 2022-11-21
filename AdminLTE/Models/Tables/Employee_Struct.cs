using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace AdminLTE.Models.Tables
{
    public class Employee_Struct
    {
        public int EmployeeId { get; set; }
        [Required]
        public string EmployeeName { get; set; }
        public string EmployeeEmail { get; set; }
        public string EmployeeAddress { get; set; }
        public string EmployeeNumber { get; set; }
    }
}