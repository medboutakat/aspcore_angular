using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 

namespace WebApi.Models
{
    public class AppDbContext : DbContext
    {


        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<Segment> Segments { get; set; }
        public DbSet<Vat> Vats { get; set; }
        public DbSet<InvoiceHeader> InvoiceHeaders { get; set; }
        public DbSet<InvoiceDetail> InvoiceDetails { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<Employee>().HasData(
            //    new Employee() { Fname = "Mangesh", Lname = "G", email = "Mangesh.g@outlook.com", gender = "1" },
            //    new Employee() { Fname = "Ramnath", Lname = "Bodke", email = "Ramnagh.g@outlook.com", gender = "1" },
            //    new Employee() { Fname = "Suraj", Lname = "G", email = "suraj.g@gmail.com", gender = "1" },
            //    new Employee() { Fname = "Jaffar", Lname = "K", email = "Jaffar.g@outlook.com", gender = "1" }
            //  );
            //  modelBuilder.Entity<Trip>().HasData(
            //      new Trip {Id = 1,  Name = "MVP Summit",StartDate = new DateTime(2018, 3, 5),EndDate = new DateTime(2018, 3, 8)},
			//  	new Trip {Id = 2,  Name = "DevIntersection Orlando 2018",StartDate = new DateTime(2018, 3, 25),EndDate = new DateTime(2018, 3, 27)},
            //      new Trip {Id = 3,  Name = "Build 2018",StartDate = new DateTime(2018, 5, 7),EndDate = new DateTime(2018, 5, 9)}   
            //  );

                modelBuilder.Entity<User>().HasData(
                 new User {ID = 1,  firstName = "mohamed",lastName ="boutakat",password="justme", email="boutakatmohamed@gmail.com"}
             );
        }
    }
}
