using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleCalculator.Db.Entities
{
    public class History
    {
        public Guid Id { get; set; }
        public string Expression { get; set; }
        public double Result { get; set; }
    }
}
