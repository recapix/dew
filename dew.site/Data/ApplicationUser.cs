﻿using Microsoft.AspNetCore.Identity;

namespace dew.site.Data
{
    public class ApplicationUser : IdentityUser
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
    }
}
