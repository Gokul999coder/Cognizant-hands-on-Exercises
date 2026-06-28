DECLARE
    CURSOR c_customer IS
        SELECT CustomerID, Balance
        FROM Customers;

    v_customerid Customers.CustomerID%TYPE;
    v_balance Customers.Balance%TYPE;

BEGIN
    OPEN c_customer;

    LOOP
        FETCH c_customer INTO v_customerid, v_balance;

        EXIT WHEN c_customer%NOTFOUND;

        IF v_balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = v_customerid;
        END IF;

    END LOOP;

    CLOSE c_customer;

    COMMIT;
END;
/
SELECT * FROM CUSTOMERS;