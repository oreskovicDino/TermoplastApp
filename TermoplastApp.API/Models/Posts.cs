using System.Collections.Generic;

namespace TermoplastApp.API.Models
{
    public class Posts
    {
        
        public int Id { get; set; }
        public string Title { get; set; }
        public string Head { get; set; }
        public string Body { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}