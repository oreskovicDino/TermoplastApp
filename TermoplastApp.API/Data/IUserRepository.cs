using System.Collections.Generic;
using System.Threading.Tasks;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Data
{
    public interface IUserRepository
    {
        Task<User> Add(User user);
    
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<Item> GetItem(int id);
    }
}