
public class TestLogger {
    public static void main(String[] args){
        Logger log1=Logger.getInstance();
        Logger log2=Logger.getInstance();
        log1.log("APP STARTED");
        log2.log("USER LOGGED IN");
        System.out.println(log1==log2);
      
    }
    
}
