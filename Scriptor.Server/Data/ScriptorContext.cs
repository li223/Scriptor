using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using Scriptor.Server.Data.Entities;

namespace Scriptor.Server.Data
{
    public class ScriptorContext : DbContext
    {
        public ScriptorContext()
        {
#if DEBUG
            this.Database.EnsureDeleted();
            this.Database.EnsureCreated();
            AddTestData();
#else
            this.Database.EnsureCreated();
#endif
        }

        public DbSet<ServerEntity> Servers { get; private set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlite("Data Source=ScriptorDB.db");

        private void AddTestData()
        {
            this.Servers.Add(new ServerEntity()
            {
                Id = 1,
                Name = "Test",
                URL = "Test.Com"
            });

            this.SaveChanges();
        }
    }
}
