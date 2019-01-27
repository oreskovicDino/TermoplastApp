using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using TermoplastApp.API.Data;
using TermoplastApp.API.Dtos;
using TermoplastApp.API.Models;




namespace TermoplastApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            this._repo = repo;
            this._config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(AdminForRegisterDto adminForRegisterDto)
        {
            adminForRegisterDto.Username = adminForRegisterDto.Username.ToLower();
            if (await _repo.UserExists(adminForRegisterDto.Username))
            {
                return BadRequest("Username already exists");
            }

            var adminToCreate = new Admin
            {
                Username = adminForRegisterDto.Username
            };

            var createdAdmin = await _repo.Register(adminToCreate, adminForRegisterDto.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(AdminForLoginDto adminForLoginDto)
        {

            var adminFromRepo = await _repo.Login(adminForLoginDto.Username.ToLower(), adminForLoginDto.Password);
            if (adminFromRepo == null)
            {
                return Unauthorized();
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, adminFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, adminFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandeler = new JwtSecurityTokenHandler();

            var token = tokenHandeler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandeler.WriteToken(token)
            });

        }
    }
}