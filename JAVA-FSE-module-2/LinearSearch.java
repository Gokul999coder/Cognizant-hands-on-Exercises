

public class LinearSearch {

public boolean search(Product products[],int key){
    
    for(int i=0;i<products.length;i++){
        if(key==products[i].productId)
        {
            return true;
            
        }
    }
    return false;
}   
}
