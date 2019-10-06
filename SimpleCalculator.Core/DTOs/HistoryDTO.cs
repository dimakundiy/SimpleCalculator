using SimpleCalculator.Db.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleCalculator.Core.DTOs
{
    public class HistoryDTO
    {
       public  double Result { get; set; }
       public IEnumerable<History> history = new List<History>();
    }
}
