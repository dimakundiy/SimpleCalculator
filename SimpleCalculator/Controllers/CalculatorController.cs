using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SimpleCalculator.Core.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleCalculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly ICalculatorService _calculatorService;

        public CalculatorController(ICalculatorService calculatorService)
        {
            _calculatorService = calculatorService;

        }


        [AllowAnonymous]
        [HttpGet("[action]")]
        public async Task<IActionResult> Calculate(string exp)
        {
            var a = _calculatorService.Calculate(exp);
            return Ok(a);
        }
    }
}
