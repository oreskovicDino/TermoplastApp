using System;
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
            var adminToReturn = _mapper.Map<AdminsForListDto>(admin);
            return Ok(adminToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdmin(int id, AdminsForUpdateDto adminForUpdateDto)
        {
            
            var adminFromRepo = await _repo.GetAdmin(id);
            _mapper.Map(adminForUpdateDto, adminFromRepo);
            if (await _repo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception($"Updatig admin {id} faild on save");
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteAdmin(int id)
        {
            var admin = await _repo.GetAdmin(id);
            _repo.Delete(admin);
            if(await _repo.SaveAll())
                return Ok();

            return BadRequest("Faild to delete admin");
        }
    }
}