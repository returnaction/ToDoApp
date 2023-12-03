using backend.Data;
using backend.Models;

namespace backend.Repository
{
    public class TodoRepository : ITodoRepository
    {

        private readonly ApplicationDbContext _context;

        public TodoRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public void CreateTodo(Todo newTodo)
        {
            _context.Todos.Add(newTodo);
            _context.SaveChanges();
        }

        public void Delete(Todo todo)
        {
            _context.Remove(todo);
            _context.SaveChanges();
        }

        public IEnumerable<Todo> GetAllTodos()
        {
            IEnumerable<Todo> todos = _context.Todos.ToList();

            return todos;
        }

        public Todo GetTodo(int todoId)
        {
            Todo? todo = _context.Todos.FirstOrDefault(todo => todo.Id == todoId);

            return todo;
        }

        public void Update(int todoId, Todo newTodo)
        {
            Todo? todo = _context.Todos.FirstOrDefault(todo => todo.Id == todoId);

            todo.Name = newTodo.Name;
            todo.IsCompleted = newTodo.IsCompleted;
            todo.CreatedAt = newTodo.CreatedAt;
            todo.CompletedAt = newTodo.CompletedAt;

            _context.SaveChanges();
            
        } 
    }
}
