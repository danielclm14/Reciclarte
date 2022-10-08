
import SoftBox from "components/SoftBox";


import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";




import pinus3 from "../../imagens/pinus3.jpg";

import Descricao from "../../examples/Cards/StatisticsCards/Descricao/Descricao";



function Itens() {
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
          <Descricao 
              imagem={pinus3} 
              titulo="Madereireira X"
              endereco="Endereço" 
              tipo="Pinus " 
              distancia=" 5 KM" 
              comprimento="3x4x2"/>
              
      </SoftBox>
      
    </DashboardLayout>
  );
}

export default Itens;
