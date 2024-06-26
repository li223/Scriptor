using Microsoft.EntityFrameworkCore;

namespace Scriptor.Server.Data.Repositories
{
    public abstract class RepositoryBase<T> where T : class
    {
        public DbSet<T> Set => _context.Set<T>();

        private ScriptorContext _context { get; set; }

        public RepositoryBase(ScriptorContext ctx) => _context = ctx;
        
        public async Task InsertAsync(T entity)
        {
            await this.Set.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(T entity)
        {
            this.Set.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            this.Set.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<T?> GetByIdAsync(int id) => await this.Set.FindAsync(id);

        public IEnumerable<T> GetAll() => this.Set;
    }
}
