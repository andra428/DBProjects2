drop table comenzi_details;
drop table produs_details;
drop table produs;
drop table comenzi;
drop table clienti;

SET SERVEROUTPUT ON;


DECLARE
    v_produse SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(1,2);
    v_cantitati SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(4,3);
    v_produse2 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(3,4);
    v_cantitati2 SYS.ODCINUMBERLIST := SYS.ODCINUMBERLIST(1,1);
    
    v_clienti1 VARCHAR2(32767);
    v_produse1 VARCHAR2(32767);
   
BEGIN
   
  v_produse1 := vizualizare_pachet.vizualizare_produse;
    dbms_output.put_line(v_produse1);
  
   produs_pachet.adauga_produs('La rascruce de vanturi', 'Fictiune', 46, 200, 'Emily Bronte', TO_DATE('01-OCT-1847', 'DD-MON-YYYY'));
    produs_pachet.adauga_produs('Micutele doamne', 'Fictiune', 55, 220, 'Louisa May Alcott', TO_DATE('01-SEP-1868', 'DD-MON-YYYY'));
    -- produs_pachet.adauga_produs('La rascruce de vanturi', 'Fictiune', 46, 200, 'Emily Bronte', TO_DATE('01-OCT-1847', 'DD-MON-YYYY'));
   produs_pachet.update_produs_pret(3,80);
    produs_pachet.update_produs_cantitate(3,180);  
    produs_pachet.sterge_produs(9);
    
   v_produse1 := vizualizare_pachet.vizualizare_produse;
    dbms_output.put_line(v_produse1);
    
    vizualizare_pachet.vizualizare_toate_comenzile_si_detaliile;
    comenzi_pachet.adauga_comanda('1-MAY-2024', 5,v_produse2, v_cantitati2);
    comenzi_pachet.update_comanda_data(1, '20-JAN-2024');
    comenzi_pachet.sterge_comanda(5);
    vizualizare_pachet.vizualizare_toate_comenzile_si_detaliile;
  
     v_clienti1 := vizualizare_pachet.vizualizare_clienti;
     dbms_output.put_line(v_clienti1);

     
     clienti_pachet.adauga_client('Martin','Maria','CUG','martin.maria@gmail.com');
    clienti_pachet.adauga_client('Cojocaru','Georgiana','Podu de fier','geo.cojo@gmail.com');
     clienti_pachet.update_client_adresa(2,'Aleea Profesor Vasile Petrescu');
     clienti_pachet.update_client_email(2,'popescu.ion@outlook.com');    
     clienti_pachet.sterge_client(6);
     ---clienti_pachet.sterge_client(2);
     ---clienti_pachet.sterge_client(6);
  
   v_clienti1 := vizualizare_pachet.vizualizare_clienti;
    dbms_output.put_line(v_clienti1);

    
    ----comanda 1 cu clientul 1
   v_produse1 := vizualizare_pachet.vizualizare_produse;
    dbms_output.put_line(v_produse1);
    
    
   vizualizare_pachet.vizualizare_toate_comenzile_si_detaliile();
   --vizualizare_pachet.vizualizare_comanda_si_detalii(2);
   modificari_cantitati_comanda.update_comanda_cantitate_inplus(1, v_produse, v_cantitati);
    --modificari_cantitati_comanda.update_comanda_cantitate_retur(1, v_produse, v_cantitati);
    vizualizare_pachet.vizualizare_toate_comenzile_si_detaliile;
    
    v_produse1 := vizualizare_pachet.vizualizare_produse;
    dbms_output.put_line(v_produse1);
        
END;
/

select * from comenzi;
