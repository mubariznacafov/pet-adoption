using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace animal.adoption.api.Models
{  
        public class EmailRequest
        {
        [Column("email")]
        public string Email { get; set; }
        }
        

    }

