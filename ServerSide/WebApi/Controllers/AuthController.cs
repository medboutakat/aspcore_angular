using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi;
using Microsoft.AspNetCore.Cors;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [DisableCors]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BanksController(AppDbContext context)
        {
            _context = context;
        }


            // POST: api/Banks
        [HttpPost]
        public async Task<IActionResult> GetToken([FromBody] Bank Bank)
        {

// string securityKey
//             if (!ModelState.IsValid)
//             {
//                 return BadRequest(ModelState);
//             }

//             _context.Banks.Add(Bank);
//             await _context.SaveChangesAsync();

//             return CreatedAtAction("GetBanks", new { id = Bank.ID }, Bank);
        }

    }
}