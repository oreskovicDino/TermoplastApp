using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TermoplastApp.API.Data;
using TermoplastApp.API.Dtos;

namespace TermoplastApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        private readonly IMapper _mapper;
        public AdminsController(IAdminRepository repo, IMapper mapper)
        {
            this._mapper = mapper;
            this._repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetAdmins()
        {
            var admins = await _repo.GetAdmins();
            var adminsToReturn = _mapper.Map<IEnumerable<AdminsForListDto>>(admins);

            return Ok(adminsToReturn);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAdmin(int id)
        {
            var admin = await _repo.GetAdmin(id);
            // var adminToReturn = _mapper.Map<AdminsForListDto>(admin);
            return Ok(admin);
        }
    }
}