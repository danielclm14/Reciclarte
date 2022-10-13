/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Router properties
import {Link, useParams, useLocation} from 'react-router-dom'

// Data
import Grid from "@mui/material/Grid";
import Descricao from "../../examples/Cards/StatisticsCards/Descricao/Descricao";
import madeiras from '../../dados_itens'



function Itens() {
  var id = useLocation().state;
  //window.alert(id);

  if(id == null)
    id = 0;

  var temp = madeiras[id];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
          <Descricao 
              imagem={temp.img} 
              titulo={temp.name}
              endereco={temp.src}
              tipo={temp.tipo}
              distancia=" 5 KM"
              comprimento={temp.descr}
              quantidade={temp.qntd}/>
              
      </SoftBox>
      
    </DashboardLayout>
  );
}

export default Itens;
