using System.Threading.Tasks;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Data
{
    public interface IAuthRepository
    {
         Task<Admin> Register(Admin admin, string password);
         Task<Admin> Login(string username, string password);

         Task<bool> UserExists(string username);
    }
}