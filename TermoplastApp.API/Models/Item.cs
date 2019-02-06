namespace TermoplastApp.API.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Width { get; set; }
        public string height  { get; set; }
        public string Profil { get; set; }
        public string WindowType { get; set; }
        public string GlassType { get; set; }
        public bool Net { get; set; }
        public bool Blinds { get; set; }
        public string Note { get; set; }
        public User user { get; set; }
        public int UserId { get; set; }
    }
}