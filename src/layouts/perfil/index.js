
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/perfil/components/Header";
import madeiras from '../../dados_itens'
import perfis from '../../dados_artesaos'
import CardReserva from 'layouts/perfil/card_reservado.js'



// Data

// Images
import pinus3 from "imagens/pinus3.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="Meu Perfil"
              description="A madeira do lixo é a mais bonita. "
              info={{
                fullName: "Lindomar",
                mobile: "(81) 99616-1403",
                email: "lindomar@gmail.com",
                location: "Rua da Moeda, 232",
              }}
              social={[
                {
                  link: "https://www.facebook.com/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Editar Perfil" }}
            />
          </Grid>
   
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Suas Reservas
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Aqui estão suas reservas de madeira:
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <div style={{width: '100%', }}>
            {[...perfis[0].itens].map((e, i) => <CardReserva
                  id={madeiras[perfis[0].itens[i].id].id}
                  img={madeiras[perfis[0].itens[i].id].img}
                  name= {madeiras[perfis[0].itens[i].id].name}
                  descr= {madeiras[perfis[0].itens[i].id].descr}
                  qntd= {perfis[0].itens[i].qntd}
                  reserva= {perfis[0].itens[i].reserva}/>
            )}
              
          </div>
        </Card>
      </SoftBox>

      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Overview;
