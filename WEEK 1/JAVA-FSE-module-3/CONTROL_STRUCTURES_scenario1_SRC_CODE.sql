DECLARE
    CURSOR c_customer IS
        SELECT CustomerID, DOB
        FROM Customers;

    v_customerid Customers.CustomerID%TYPE;
    v_dob Customers.DOB%TYPE;
    v_age NUMBER;

BEGIN
    OPEN c_customer;

    LOOP
        FETCH c_customer INTO v_customerid, v_dob;

        EXIT WHEN c_customer%NOTFOUND;

        v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, v_dob) / 12);

        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = v_customerid;
        END IF;

    END LOOP;

    CLOSE c_customer;

    COMMIT;
END;
/
SELECT * FROM LOANS;