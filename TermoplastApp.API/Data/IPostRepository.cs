using System.Collections.Generic;
using System.Threading.Tasks;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Data
{
    public interface IPostRepository
    {
        Task<Posts> Add(Posts posts);
        void Delete<T>(T entity) where T : class;
        Task<IEnumerable<Posts>> GetPosts();
        Task<Posts> GetPost(int id);
        Task<bool> SaveAll();
        Task<Photo> GetPhoto(int id);
        Task<Photo> GetMainPhotoForPost(int postId);
    }
}