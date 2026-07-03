public class TestClass {
    public static void main(String arg[])
    {
        DocumentFactory word=new WordDocumentFactory();
        Document worddoc=word.createDocument();
        worddoc.open();
        DocumentFactory excel=new ExcelDocumentFactory();
        Document Exceldoc=excel.createDocument();
        Exceldoc.open();
        DocumentFactory pdf=new PdfDocumentFactory();
        Document Pdfdoc=pdf.createDocument();
        Pdfdoc.open();
    }
}
