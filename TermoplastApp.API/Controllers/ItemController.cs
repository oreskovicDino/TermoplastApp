using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TermoplastApp.API.Data;
using TermoplastApp.API.Dtos;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Controllers
{
    [Route("api/user/{userId}/item")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        private readonly IUserRepository _repoUser;
        private readonly IMapper _mapper;
        public ItemController(IItemRepository repo, IUserRepository repoUser, IMapper mapper)
        {
            this._mapper = mapper;
            this._repoUser = repoUser;
            this._repo = repo;

        }
        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var items = await _repo.GetItems();
            return Ok(items);
        }
        [HttpGet("{id}", Name = "GetItem")]
        public async Task<IActionResult> GetItem(int id)
        {
            var itemFromRepo = await _repoUser.GetItem(id);
            var item = _mapper.Map<ItemForReturnDto>(itemFromRepo);
            return Ok();
        }
        [HttpPost]
        public async Task<IActionResult> AddItem(int userId, ItemForCreationDto itemForCreationDto)
        {
            var userFromRepo = await _repoUser.GetUser(userId);

            var item = _mapper.Map<Item>(itemForCreationDto);

            userFromRepo.Items.Add(item);

            if (await _repoUser.SaveAll())
            {
                var itemForReturn = _mapper.Map<ItemForReturnDto>(item);
                return CreatedAtRoute("GetItem", new { id = item.Id }, itemForReturn);
            }

            return BadRequest("could not add the Item");

            /* var createdItem = await _repo.Add(item);
            return StatusCode(201); */
        }
    }
}