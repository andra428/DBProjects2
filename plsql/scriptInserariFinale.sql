select * from clienti;
select * from produs;
select * from produs_details;
select * from comenzi;
select * from comenzi_details;
SET SERVEROUTPUT ON;


DECLARE
    v_produse SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(1,2);
    v_cantitati SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(2,1);
    v_produse2 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(3,4);
    v_cantitati2 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(1,1);
    v_produse3 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(5);
    v_cantitati3 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(11);
    v_produse4 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(8,10);
    v_cantitati4 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(2,1);
    v_produse5 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(9,10);
    v_cantitati5 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(1,1);
    v_produse6 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(7);
    v_cantitati6 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(15);
    
    v_clienti7 VARCHAR2(32767);
    v_produse7 VARCHAR2(32767);
BEGIN
    
   -- produs_pachet.adauga_produs('Contele de Monte Cristo', 'Fictiune', 50, 150, 'Alexandre Dumas', TO_DATE('28-AUG-1844', 'DD-MON-YYYY'));
   --produs_pachet.adauga_produs('Razboi si Pace', 'Fictiune', 45, 200, 'Lev Tolstoi', TO_DATE('01-JAN-1869', 'DD-MON-YYYY'));
   --produs_pachet.adauga_produs('1984', 'Fictiune', 35, 300, 'George Orwell', TO_DATE('08-JUN-1949', 'DD-MON-YYYY'));
   --produs_pachet.adauga_produs('Mizerabilii', 'Fictiune', 55, 120, 'Victor Hugo', TO_DATE('03-APR-1862', 'DD-MON-YYYY'));
   --produs_pachet.adauga_produs('Don Quijote', 'Fictiune', 40, 250, 'Miguel de Cervantes', TO_DATE('16-JAN-1605', 'DD-MON-YYYY'));
   --produs_pachet.adauga_produs('Jane Eyre', 'Fictiune', 60, 180, 'Charlotte Bronte', TO_DATE('16-OCT-1847', 'DD-MON-YYYY'));
   --produs_pachet.adauga_produs('Fratii Karamazov', 'Fictiune', 70, 90, 'Fyodor Dostoevsky', TO_DATE('26-NOV-1880', 'DD-MON-YYYY'));
   --produs_pachet.adauga_produs('Madame Bovary', 'Fictiune', 30, 130, 'Gustave Flaubert', TO_DATE('01-APR-1857', 'DD-MON-YYYY'));
   --produs_pachet.adauga_produs('Ulise', 'Fictiune', 80, 75, 'James Joyce', TO_DATE('02-FEB-1922', 'DD-MON-YYYY'));
   --produs_pachet.adauga_produs('Procesul', 'Fictiune', 50, 100, 'Franz Kafka', TO_DATE('26-JUN-1925', 'DD-MON-YYYY'));

  v_produse7 := vizualizare_pachet.vizualizare_produse;
    dbms_output.put_line(v_produse7);
    
    --clienti_pachet.adauga_client('Lupu', 'Maria', 'Bld, Tudor Vladimirescu', 'lupu.andra12@yahoo.com');
    --clienti_pachet.adauga_client('Popescu', 'Ion', 'Strada Mihai Eminescu', 'popescu.ion@gmail.com');
    --clienti_pachet.adauga_client('Ionescu', 'Maria', 'Calea Victoriei', 'ionescu.maria@yahoo.com');
    --clienti_pachet.adauga_client('Georgescu', 'Vlad', 'Strada Alexandru Ioan Cuza', 'georgescu.vlad@hotmail.com');
   --clienti_pachet.adauga_client('Dumitrescu', 'Ana', 'Strada Stefan cel Mare', 'dumitrescu.ana@gmail.com');
    --clienti_pachet.adauga_client('Popa', 'Mihai', 'Bulevardul Carol I', 'popa.mihai@yahoo.com');
    
    v_clienti7 := vizualizare_pachet.vizualizare_clienti;
    dbms_output.put_line(v_clienti7);
   
    --comenzi_pachet.adauga_comanda(SYSDATE - 11, 6,v_produse, v_cantitati);
   ---comenzi_pachet.adauga_comanda(SYSDATE - 2, 2,v_produse2, v_cantitati2);
    --comenzi_pachet.adauga_comanda(SYSDATE - 1, 3,v_produse3, v_cantitati3);
    --comenzi_pachet.adauga_comanda(SYSDATE , 4,v_produse4, v_cantitati4);
    --comenzi_pachet.adauga_comanda(TO_DATE('10-APR-2024', 'DD-MON-YYYY') , 5,v_produse5, v_cantitati5);
    --comenzi_pachet.adauga_comanda(SYSDATE, 1,v_produse6, v_cantitati6);
    vizualizare_pachet.vizualizare_toate_comenzile_si_detaliile;
    --vizualizare_pachet.vizualizare_comanda_si_detalii(2);
    --vizualizare_pachet.vizualizare_comenzi_si_detalii_client(1);
        
END;