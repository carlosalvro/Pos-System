import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {useLocation, Link as RouterLink} from "react-router-dom"

const breadcrumbNameMap = {
  '/ajustes': 'Ajustes',
  '/ajustes/catalogos': 'Catalogos',
  '/ajustes/catalogos/grupos': 'Grupos',
  '/ajustes/catalogos/subgrupos': 'Subgrupos',
  '/ajustes/catalogos/productos': 'Productos',
  '/ajustes/catalogos/roles-meseros': 'Roles',
  '/ajustes/catalogos/meseros': 'Meseros',
  '/ajustes/catalogos/clientes': 'Clientes',
  '/ajustes/catalogos/cancelaciones': 'Cancelaciones',
};

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const Page = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {/* <LinkRouter underline="hover" color="inherit" to="/">
        Ajustes
      </LinkRouter> */}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
};



const NavigationAjustes = () => {
  return (
    <Page/>
  );
}

export default NavigationAjustes;