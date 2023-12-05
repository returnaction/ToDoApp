using backend.Data;
using backend.Models;
using backend.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;

namespace backend.Controllers
{
    [Route("api/todo")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private ITodoRepository _repository;

        public TodoController(ITodoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetTodos()
        {
            try
            {
                IEnumerable<Todo> todos = _repository.GetAllTodos();

                return Ok(todos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
                throw;
            }
        }

        [HttpGet("{todoId}")]
        public IActionResult GetTodo(int todoId)
        {
            try
            {
                Todo? todo = _repository.GetTodo(todoId);

                if (todo is null)
                    return NotFound();

                return Ok(todo);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
                throw;
            }
        }

        [HttpPost]
        public IActionResult CreateTodo(Todo newTodo)
        {
            try
            {
                if (newTodo is null)
                    return BadRequest();

                _repository.CreateTodo(newTodo);
                return Ok("Successfully added");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
                throw;
            }
        }

        [HttpDelete("{todoId}")]
        public IActionResult DeleteTodo(int todoId)
        {
            try
            {
                Todo? todo = _repository.GetTodo(todoId);

                if (todo is null)
                    return BadRequest();

                _repository.Delete(todo);

                return Ok("Successfully Deleted");

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
                throw;
            }
        }

        [HttpPut("{todoId}")]
        public IActionResult UpdateTodo(int todoId, Todo newTodo)
        {
            try
            {
                Todo? todo = _repository.GetTodo(todoId);
                if (todo is null)
                    return NotFound();

                if (newTodo is null)
                    return BadRequest();

                _repository.Update(todoId, newTodo);

                return Ok("Updated Successfully");

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
                throw;
            }
        }

    }
}
