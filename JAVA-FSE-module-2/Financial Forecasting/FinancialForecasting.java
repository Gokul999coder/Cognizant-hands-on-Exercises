

public class FinancialForecasting {
    public static String growth(double currentValue,double growthRate,int years)
    {
        if(years==0)
        {
            return String.format("%.2f", currentValue);
        }
        return growth(currentValue*(1+growthRate),growthRate,years-1);
    }
    public static void main(String args[])
    {
        double currentValue=1000;
        double growthRate=0.10;//10% growth rate for example
        int years=3;
        System.out.println("Future Value: " + growth(currentValue,growthRate,years));
    }
}

// {Analysis of the code:

// Time Complexity:

// The recursive algorithm makes one recursive call for each year.
// Therefore, the time complexity is O(n), where n is the number of years.

// Optimization:

// The recursive solution can be optimized by using an iterative (loop-based) approach, 
// which avoids the overhead of recursive function calls and reduces stack memory usage.
// For problems with repeated recursive calculations (like Fibonacci), Memoization or
// Dynamic Programming can be used to avoid excessive computation.}