export interface Categoria {
  id: string;
  nombre: string;
  estilo: string;
  visible: boolean;
  imgUrl?: string;
}

export interface Producto {
  id: string;
  categoriaId: string;
  nombre: string;
  visible: boolean;
  img1?: string;
}
