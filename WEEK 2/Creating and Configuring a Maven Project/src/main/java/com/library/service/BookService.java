package com.library.service;
import com.library.repository.BookRepository;
public class BookService {

    public BookRepository bookRepo;

    public void setBookRepo( BookRepository bookRepo){ //setter injection is implemented here
        this.bookRepo=bookRepo;
    }

    public void showBook(){
        bookRepo.displayBook();
    }
}
