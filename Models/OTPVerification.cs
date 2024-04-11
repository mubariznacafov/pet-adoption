using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace animal.adoption.api.Models
{
        public class OTPVerification
        {
        [Column("email")]
        public string Email { get; set; }
  
        [Column("otp")]
        public string OTP { get; set; }
        }
    }

