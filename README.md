# Sistema de Login

No back-end fornecido abaixo, todo o processo de cadastro já está implementado, porém o login ainda não retorna nenhum token pro front-end, impossibilitando o envio de requests para rotas privadas.

Implemente o fluxo de login para que um token seja cadastrado ao fazer retornado e, em seguida, implemente a rota `/meus-dados` como descrito no código.

1. Na rota POST /sign-in, você deve:
- criar um token com a biblioteca uuid
- criar uma sessão para o seu usuário na collection "sessions"
- enviar o token como resposta em caso de sucesso
- em caso de erro, enviar o status 401

2. Implementar a rota GET /meus-dados
- pegar o token de authorization, que vem no formato Bearer token
- caso não eista token, retornar status 401
- caso o token tenha sido recebido, verificar se há uma sessão ativa com esse token. Se não houver, retornar status 401
- buscar o usuário que esteja com essa sessão ativa
- se não encotrar o usuario, enviar status 401
- se encontrar o usuário, retornar todos os seus dados com exceção da senha
