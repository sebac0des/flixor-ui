import fs from 'fs';
import path from 'path';

// Mock data (asumiendo que 'components' ahora contiene rutas a los archivos de componentes)
import { components } from '@/data/components';

export const copyComponent = (directory: string, component: string) => {
  const fileRoute = path.join(process.cwd(), directory, 'DondeEstamos.tsx');

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  fs.copyFileSync('components/demo.tsx',fileRoute);
  console.log('Componente DondeEstamos creado en app/DondeEstamos.tsx');
};

