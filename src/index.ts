import '../css/main.css'
import {FillCovidData} from "./FillCovidData";
import {FillCountries} from "./FillCountries";
import { sorttable1 } from './sortTable';


onload = ()=>{

    FillCovidData();
    FillCountries();
    sorttable1();
    
    
}
          
          
        



// fetch("https://covid-193.p.rapidapi.com/statistics", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "118862b4f4msh3a56a781567c828p1e17c2jsn63511dd948e6",
// 		"x-rapidapi-host": "covid-193.p.rapidapi.com"
// 	}
// }).then(response => response.json())
//    .then(data => console.log(data));