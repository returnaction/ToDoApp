namespace backend.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsCompleted { get; set; } = false;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime CompletedAt { get; set; }

    }
}
