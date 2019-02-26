using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Data
{
    public class AdminRepository : IAdminRepository
    {
        private readonly DataContext _context;
        public AdminRepository(DataContext context)
        {
            this._context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entitiy) where T : class
        {
            _context.Remove(entitiy);
        }

        public async Task<IEnumerable<Admin>> GetAdmins()
        {
            var admins = await _context.Admins.ToListAsync();
            return admins;
        }

        public async Task<Admin> GetAdmin(int id)
        {
            var admin = await _context.Admins.FirstOrDefaultAsync(u => u.Id == id);
            return admin;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}