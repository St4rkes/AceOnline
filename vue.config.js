
module.exports = {
    // Configurações específicas do Vue CLI
    // Consulte a documentação para mais opções: https://cli.vuejs.org/config/#vue-config-js
  
    // Define o caminho relativo para os assets quando a aplicação é construída
    publicPath: process.env.NODE_ENV === 'production' ? '/AceOnline/' : '/',
    outputDir: 'docs',
  
    // Configuração do servidor de desenvolvimento
    devServer: {
      // Configuração do host e da porta
      host: 'localhost',
      port: 8080,
  
      // Configuração de proxy para lidar com CORS (se necessário)
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
  
    // Configuração de título da página
    pages: {
      index: {
        entry: 'src/main.js',
        title: 'Meu Aplicativo Vue.js',
      },
    },
  
    // Configuração do ESLint
    lintOnSave: true,
  
    // Outras configurações conforme necessário
  };
  