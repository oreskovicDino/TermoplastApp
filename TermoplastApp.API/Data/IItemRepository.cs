using System.Collections.Generic;
using System.Threading.Tasks;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Data
{
    public interface IItemRepository
    {
         Task<Item> Add(Item item);
         void Delete<T>(T entity) where  T : class;
         Task<bool> saveAll();
         Task<IEnumerable<Item>> GetItems();
         Task<Item> GetItem(int id);
    }
}