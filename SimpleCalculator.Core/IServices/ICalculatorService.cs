using SimpleCalculator.Db.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleCalculator.Core.IServices
{
    public interface ICalculatorService
    {
        double Calculate(string exp);
        IEnumerable<History> History();
        void ClearHistory();
    }
}

