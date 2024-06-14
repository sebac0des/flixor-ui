import fs from 'fs';
import path from 'path';

export const createComponent = (folder: string, component: string) => {
    const fileRoute = path.join(process.cwd(), folder, 'DondeEstamos.tsx');
  
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
  
    fs.writeFileSync(fileRoute, component);
    console.log('Componente DondeEstamos creado en app/DondeEstamos.tsx');
  };