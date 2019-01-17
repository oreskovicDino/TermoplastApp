using Microsoft.EntityFrameworkCore;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Value> Values { get; set; }

        public DbSet<Admin> Admins { get; set; }
    }
}