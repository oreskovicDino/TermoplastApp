using System.Collections.Generic;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Dtos
{
    public class PostForDetailedDto
    {
         public int Id { get; set; }
        public string Title { get; set; }
        public string Head { get; set; }
        public string Body { get; set; }
        public string PhotoUrl  { get; set; }
        public ICollection<PhotosForDetailedDto> Photos { get; set; }
    }
}