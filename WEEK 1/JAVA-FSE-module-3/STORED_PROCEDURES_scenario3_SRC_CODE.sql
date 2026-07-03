CREATE OR REPLACE PROCEDURE TransferFunds(
    p_sourceAccount IN Accounts.AccountID%TYPE,
    p_destinationAccount IN Accounts.AccountID%TYPE,
    p_amount IN NUMBER
)
AS
    v_balance Accounts.Balance%TYPE;
BEGIN

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_sourceAccount;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_sourceAccount;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_destinationAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

    END IF;

END;
/
EXEC TransferFunds(1,2,500);

SELECT * FROM Accounts;