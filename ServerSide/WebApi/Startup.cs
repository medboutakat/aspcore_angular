using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options; 
using Swashbuckle.AspNetCore.Swagger;
using WebApi.Models;
using WebApi.Controllers;

namespace WebApi
{
    public class Startup
    {
        private readonly ILogger _logger;

        public Startup(IConfiguration configuration, ILogger<Startup> logger)
        {
            Configuration = configuration;
            _logger = logger;
        }

        // public Startup(IConfiguration configuration)
        // {
        //     Configuration = configuration;
        // }

        public Startup(IConfiguration configuration) 
        {
            this.Configuration = configuration;
               
        }
                public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        { 
            services.AddCors();
            // services.AddDbContext<AppDbContext>(opt => opt.UseSqlServer(@"Data Source=MANGESH\SQL2016;Initial Catalog=Angular7Demo;User ID=sa;Password=sa"));
            services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(Configuration["Data:ConnectionStrings:DefaultConnection"]
            ));

             // Enable middleware to serve generated Swagger as a JSON endpoint.
            
            services.AddMvc().AddControllersAsServices();

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
            });
            
            //.SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            //services.AddSingleton<EmployeesController, EmployeesController>();
            // tell framework to obtain Controller instances from ServiceProvider.
            // services.AddMvc()

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseMiddleware();
            app.UseCors();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseAuthentication();
            
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();
            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });
            app.UseMvc();


         
        }
    }
}
