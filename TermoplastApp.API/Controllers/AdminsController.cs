using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TermoplastApp.API.Data;

namespace TermoplastApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly ITermoplastRepository _repo;
        public AdminsController(ITermoplastRepository repo)
        {
            this._repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetAdmins()
        {
            var admins = await _repo.GetAdmins();
            return Ok(admins);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAdmin(int id)
        {
            var admin = await _repo.GetAdmin(id);
            return Ok(admin);
        }
    }
}