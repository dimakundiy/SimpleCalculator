using SimpleCalculator.Core.IServices;
using SimpleCalculator.Db.EF;
using SimpleCalculator.Db.Entities;
using System;
using System.Collections.Generic;
using System.Data;

namespace SimpleCalculator.Core.Services
{
    public class CalculatorService : ICalculatorService
    {
        private readonly AppDbContext _context;
        public CalculatorService(
            AppDbContext context
            )
        {
            _context = context;
        }
        public double Calculate(string exp)
        {

            string expression = exp;
            expression = expression.Replace(' ', '+');
            object res = new DataTable().Compute(expression, null);
         
            _context.Histories.Add(new History() { Id = new Guid(), Expression = expression, Result = Convert.ToDouble(res) });
            _context.SaveChanges();

            return Convert.ToDouble(res);
        }

        public void ClearHistory()
        {
            _context.Histories.RemoveRange(_context.Histories);
            _context.SaveChanges();

        }

        public IEnumerable<History> History() {
            return  _context.Histories;
        }
        
        
    }
}
