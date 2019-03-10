using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _contex;
        public UserRepository(DataContext contex)
        {
            this._contex = contex;

        }
        public async Task<User> Add(User user)
        {
            await _contex.Users.AddAsync(user);
            await _contex.SaveChangesAsync();

            return user;
        }

        public void Delete<T>(T entity) where T : class
        {
            _contex.Remove(entity);
        }

        public async Task<Item> GetItem(int id)
        {
            var item = await _contex.Items.FirstOrDefaultAsync(p => p.Id == id);
            return item;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _contex.Users.Include(p => p.Items).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _contex.Users.ToListAsync();
            return users;
        }

        public async Task<bool> SaveAll()
        {
            return await _contex.SaveChangesAsync() > 0;
        }
    }
}