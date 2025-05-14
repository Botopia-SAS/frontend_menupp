import NegocioView from "./views/NegocioView";
import MenusView from "./views/MenusView";
import PedidosView from "./views/PedidosView";
import ReservasView from "./views/ReservasView";
import MarketingView from "./views/MarketingView";
import ClientesView from "./views/ClientesView";
import MenusCategoriasView from "./views/MenusCategoriaView";
import AnaliticaView from "./views/AnaliticaView"; // Updated to match the correct file name

export const topbarMap = [
  {
    path: "/negocio",
    title: "Tu negocio",
    view: NegocioView,
  },
  {
    path: "/menus",
    title: "Menús y Homepage",
    view: MenusView,
  },
  {
    path: "/pedidos",
    title: "Pedidos",
    view: PedidosView,
  },
  {
    path: "/reservas",
    title: "Reservas",
    view: ReservasView,
  },
  {
    path: "/marketing",
    title: "Marketing",
    view: MarketingView,
  },
  {
    path: "/clientes",
    title: "Clientes",
    view: ClientesView,
  },
  {
    path: "/analitica",
    title: "Analítica",
    view: AnaliticaView,
  },
  {
    path: "/categorias",
    title: "Menú",
    view: MenusCategoriasView,
  },
];
