using System.Collections.Generic;
using System.Threading.Tasks;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Data
{
    public interface IAdminRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entitiy) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Admin>> GetAdmins();
        Task<Admin> GetAdmin(int id);
    }
}