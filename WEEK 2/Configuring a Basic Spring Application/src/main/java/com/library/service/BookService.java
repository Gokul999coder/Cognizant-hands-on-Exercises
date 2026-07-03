package com.library.service;
import com.library.repository.BookRepository;
public class BookService {
    
    public BookRepository bookrepo;

    public BookService( BookRepository bookrepo){ //constructor injection is implemented here
        this.bookrepo=bookrepo;
    }

    public void showBook(){
        bookrepo.displayBook();
    }
}
