using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Data
{
    public class ItemRepository : IItemRepository
    {
        private readonly DataContext _context;
        public ItemRepository(DataContext context)
        {
            this._context = context;

        }
        public async Task<Item> Add(Item item)
        {
            await _context.Items.AddAsync(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Item> GetItem(int id)
        {
            var item = await _context.Items.FirstOrDefaultAsync(u => u.Id == id);
            return item;
        }

        public async Task<IEnumerable<Item>> GetItems()
        {
            var items = await _context.Items.ToListAsync();
            return items;
        }

        public async Task<bool> saveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}