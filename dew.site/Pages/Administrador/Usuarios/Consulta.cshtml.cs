﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace dew.site.Pages.Administrador.Usuarios
{
    public class ConsultaModel : PageModel
    {
        public void OnGet()
        {

        }

        public IActionResult OnPost()
        {
            return Page();
        }
    }
}