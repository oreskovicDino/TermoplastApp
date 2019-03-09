using System.ComponentModel.DataAnnotations;

namespace TermoplastApp.API.Dtos
{
    public class AdminForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 characters")]
        public string Password { get; set; }
        
        [StringLength(12, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 12 characters")]
        public string Name { get; set; }

        [StringLength(18, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 18 characters")]
        public string Lastname { get; set; }
    }
}