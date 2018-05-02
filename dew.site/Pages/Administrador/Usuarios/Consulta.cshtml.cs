using System.Collections.Generic;
using System.Linq;
using dew.site.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace dew.site.Pages.Administrador.Usuarios {
    public class ConsultaModel : PageModel {

        private readonly ApplicationDbContext applicationDbContext;

        public ConsultaModel (ApplicationDbContext _applicationDbContext) {
            applicationDbContext = _applicationDbContext;
            Consulta = new SearchModel();
        }
        
        public SearchModel Consulta { get; set; }
        
        public void OnGet () {
            Consulta.Users = applicationDbContext.Users.ToList();
        }
        
        public IActionResult OnPost () {
            return Page ();
        }
        
        public class SearchModel
        {
            public List<ApplicationUser> Users { get; set; }
        }
    }
}