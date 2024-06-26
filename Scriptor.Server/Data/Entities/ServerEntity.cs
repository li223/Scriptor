namespace Scriptor.Server.Data.Entities
{
    public record ServerEntity
    {
        public int Id { get; init; }

        public string Name { get; init; }

        public string URL { get; init; }
    }
}
