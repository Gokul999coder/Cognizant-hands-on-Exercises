

public class BinarySearch {
    public boolean search(Product products[],int key){
        int l=0;
        int h=products.length-1;
        while(l<=h){
            int mid=(l+h)/2;
            if(key==products[mid].productId)
            {
                return true;
            }
            else if(products[mid].productId<key){
                l=mid+1;
            }
            else{
                h=mid-1;
            }
        
        }
        return false;
    }
    
}
