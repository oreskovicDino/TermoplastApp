using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TermoplastApp.API.Data;
using TermoplastApp.API.Dtos;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _repo;
        private readonly IMapper _mapper;
        public PostController(IPostRepository repo, IMapper mapper)
        {
            this._mapper = mapper;
            this._repo = repo;

        }
        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            var posts = await _repo.GetPosts();
            var postsToReturn = _mapper.Map<IEnumerable<PostForListDto>>(posts);
            return Ok(postsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id)
        {
            var post = await _repo.GetPost(id);
            var postToReturn = _mapper.Map<PostForDetailedDto>(post);
            return Ok(postToReturn);
        }
        [HttpPost("add")]
        public async Task<IActionResult> AddPost(Posts posts)
        {
            var createdPost = await _repo.Add(posts);
            return StatusCode(201);
        }
    }
}