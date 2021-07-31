export function sorttable1() : void {
    let table:HTMLTableElement, rows:any, switching:boolean, i:any, x:HTMLElement, y:HTMLElement, shouldSwitch:any;
    table = document.getElementById("data") as HTMLTableElement;
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          
          shouldSwitch = false;
          
          x = rows[i].getElementsByTagName("TD")[0];
          y = rows[i + 1].getElementsByTagName("TD")[0];
          
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
    }
      
      
    