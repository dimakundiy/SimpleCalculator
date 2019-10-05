using Microsoft.EntityFrameworkCore;
using SimpleCalculator.Db.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleCalculator.Db.EF
{
    public class AppDbContext : DbContext
    {
        public DbSet<History> Histories { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            Database.Migrate();
        }
    }
}
