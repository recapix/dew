using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace dew.site.Pages.Administrador.Usuarios
{
    public class CadastroModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; }


        public class InputModel
        {
            [Required]
            [Display(Name = "E-mail")]
            [EmailAddress]
            public string Email { get; set; }

            [Required]
            [Display(Name = "Nome")]
            public string Nome { get; set; }

            [Required]
            [Display(Name = "Sobrenome")]
            public string Sobrenome { get; set; }

            [Required]
            [Display(Name = "Data de nascimento")]
            public string DataNascimento { get; set; }


        }

        public void OnGet()
        {

        }

        public IActionResult OnPost()
        {
            ViewData["ErrorMessage"] = "Erro generico por enquanto";
            return Page();
        }
    }
}