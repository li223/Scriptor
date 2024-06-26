using Microsoft.AspNetCore.Mvc;
using Scriptor.Server.Data.Repositories;

namespace Scriptor.Server.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class ServerController : Controller
    {
        private ServerRepository repository;
        public ServerController(ServerRepository repository) => this.repository = repository;

        [HttpGet]
        public IActionResult GetServersAsync() => this.Json(this.repository.GetAll());

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id) => this.Json(await this.repository.GetByIdAsync(id));
    }
}
