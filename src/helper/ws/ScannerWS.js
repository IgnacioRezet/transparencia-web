export const StartProcessScanner = async () => {
    try {
        
        const apiUrl = 'https://api.example.com/data';
       
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
      
        console.error('Error al realizar el fetch:', error);
        throw error; 
    }
};

export const TestProgressBar = async () => {
    let estado = false;
    try {
        for (let index = 0; index < 100; index++) {
            const element = array[index];
            
        }
    } catch (error) {
        
    }
}
