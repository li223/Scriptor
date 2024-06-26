using Scriptor.Server.Data.Entities;

namespace Scriptor.Server.Data.Repositories
{
    public class ServerRepository : RepositoryBase<ServerEntity>
    {
        public ServerRepository(ScriptorContext ctx) : base(ctx) { }
    }
}
