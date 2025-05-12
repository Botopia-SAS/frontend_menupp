// components/sidebar.config.ts
import {
  Home,
  BookOpen,
  ShoppingBag,
  CalendarDays,
  Megaphone,
  Users,
  LineChart,
  HelpCircle,
} from "lucide-react";

export const sidebarItems = [
  { label: "Tu Negocio", icon: Home, path: "/negocio" },
  { label: "Menús y Homepage", icon: BookOpen, path: "/menus" },
  { label: "Pedidos", icon: ShoppingBag, path: "/pedidos" },
  { label: "Reservas", icon: CalendarDays, path: "/reservas" },
  { label: "Marketing", icon: Megaphone, path: "/marketing" },
  { label: "Clientes", icon: Users, path: "/clientes" },
  { label: "Analítica", icon: LineChart, path: "/analitica" },
  { label: "Ayuda", icon: HelpCircle, path: "/ayuda", disabled: true },
];
