import { defineConfig } from 'orval';

export default defineConfig({
    api: {
        input: 'http://localhost:3333/docs/json', //URL onde está a documentação do Swaggerr (url/json)
        output: {
            target: './src/http/api.ts', //Diretório onde será gerado o arquivo de tipos
            client: 'fetch', //Tipo de cliente que será utilizado
            httpClient: 'fetch', //Tipo de cliente que será utilizado
            clean: true, //Limpar o conteúdo do diretório antes de gerar o arquivo
            baseUrl: 'http://localhost:3333', //URL base da API
            override: {
                fetch: {
                    includeHttpResponseReturnType: false, //Não incluir o status code na resposta da API
                }
            }
        }
    }
});