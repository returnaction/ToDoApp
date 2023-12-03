using backend.Models;

namespace backend.Repository
{
    public interface ITodoRepository
    {
        IEnumerable<Todo> GetAllTodos();
        Todo GetTodo(int todoId);
        void CreateTodo(Todo newTodo);
        void Update(int todoId, Todo newTodo);
        void Delete(Todo todo);
        

    }
}
