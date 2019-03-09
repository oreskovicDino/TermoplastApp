using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Data
{
    public class PostRepository : IPostRepository
    {
        private readonly DataContext _context;
        public PostRepository(DataContext context)
        {
            this._context = context;

        }
        public async Task<Posts> Add(Posts posts)
        {
            await _context.Posts.AddAsync(posts);
            await _context.SaveChangesAsync();
            return posts;
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<IEnumerable<Posts>> GetPosts()
        {
            var posts = await _context.Posts.Include(p => p.Photos).ToListAsync();
            return posts;
        }

        public async Task<Posts> GetPost(int id)
        {
            var post = await _context.Posts.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);
            return post;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Photo> GetPhoto(int id)
        {
            var photo = await _context.Photos.FirstOrDefaultAsync(p => p.Id == id);
            return photo;
        }

        public async Task<Photo> GetMainPhotoForPost(int postId)
        {
            return await  _context.Photos.Where(u => u.PostsId == postId).FirstOrDefaultAsync(p => p.IsMain);
        }
    }
}