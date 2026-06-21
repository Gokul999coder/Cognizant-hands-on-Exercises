

public class TestClass {
    public static void main(String args[])
    {
        Product products[]={
            new Product(1,"laptop","electronics"),
            new Product(2,"mobile","electronics"),
            new Product(3,"shirt","clothing"),
            new Product(4,"jeans","clothing"),
        };
        int key=2;
        LinearSearch linsrch=new LinearSearch();
        BinarySearch binsrch=new BinarySearch();
        System.out.println("Linear Search: " + linsrch.search(products,key));
        System.out.println("Binary Search: " + binsrch.search(products,key));
    }
}
