DECLARE
    CURSOR c_loan IS
        SELECT c.Name, l.EndDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID;

    v_name Customers.Name%TYPE;
    v_enddate Loans.EndDate%TYPE;

BEGIN
    OPEN c_loan;

    LOOP
        FETCH c_loan INTO v_name, v_enddate;

        EXIT WHEN c_loan%NOTFOUND;

        IF v_enddate BETWEEN SYSDATE AND SYSDATE + 30 THEN
            DBMS_OUTPUT.PUT_LINE(
                'Reminder: Dear ' || v_name ||
                ', your loan is due on ' ||
                TO_CHAR(v_enddate, 'DD-MON-YYYY')
            );
        END IF;

    END LOOP;

    CLOSE c_loan;
END;
/
SELECT * FROM LOANS;