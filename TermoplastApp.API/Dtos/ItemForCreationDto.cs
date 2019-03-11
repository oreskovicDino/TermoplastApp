using System.ComponentModel.DataAnnotations;

namespace TermoplastApp.API.Dtos
{
    public class ItemForCreationDto
    {
        [Required]
        public string Width { get; set; }
        [Required]
        public string height  { get; set; }
        [Required]
        public string Profil { get; set; }
        [Required]
        public string WindowType { get; set; }
        [Required]
        public string GlassType { get; set; }
        [Required]
        public bool Net { get; set; }
        [Required]
        public bool Blinds { get; set; }
        public string Note { get; set; }
    }
}