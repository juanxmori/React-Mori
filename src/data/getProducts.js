const productos = [
  {
    id: "1",
    nombre: "Alimento Premium Perros 15kg",
    categoria: "alimentos",
    precio: 24999,
    descripcion:
      "Alimento balanceado para perros adultos de razas medianas y grandes.",
    imagen: "https://via.placeholder.com/300x200?text=Alimento+Perros",
  },
  {
    id: "2",
    nombre: "Vacuna Antirrábica",
    categoria: "vacunas",
    precio: 7999,
    descripcion:
      "Vacuna obligatoria para la prevención de la rabia en mascotas.",
    imagen: "https://via.placeholder.com/300x200?text=Vacuna+Antirrabica",
  },
  {
    id: "3",
    nombre: "Pipeta Antipulgas Gatos",
    categoria: "medicamentos",
    precio: 3999,
    descripcion: "Solución tópica para eliminar pulgas y garrapatas.",
    imagen: "https://via.placeholder.com/300x200?text=Pipeta+Gatos",
  },
  {
    id: "4",
    nombre: "Collar con GPS para Perros",
    categoria: "accesorios",
    precio: 18999,
    descripcion: "Collar inteligente para rastrear la ubicación de tu mascota.",
    imagen: "https://via.placeholder.com/300x200?text=Collar+GPS",
  },
  {
    id: "5",
    nombre: "Consulta Clínica Integral",
    categoria: "servicios",
    precio: 5999,
    descripcion: "Consulta veterinaria completa para control de salud.",
    imagen: "https://via.placeholder.com/300x200?text=Consulta+Veterinaria",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1500);
  });
};

export const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === id));
    }, 1500);
  });
};

export const getProductosPorCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.categoria === categoriaId));
    }, 1500);
  });
};
