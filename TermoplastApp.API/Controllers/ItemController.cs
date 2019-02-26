using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TermoplastApp.API.Data;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
        {
            this._repo = repo;

        }
        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var items = await _repo.GetItems();
            return Ok(items);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var item = await _repo.GetItem(id);
            return Ok(item);
        }
        [HttpPost("add")]
        public async Task<IActionResult> AddItem(Item item)
        {
            var createdItem  = await _repo.Add(item);
            return StatusCode(201);
        }
    }
}