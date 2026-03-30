
# NestJS com Kafka

Este é um projeto de exemplo que demonstra a integração do NestJS com o Apache Kafka para a troca de mensagens entre um produtor e um consumidor.

## Descrição

O projeto consiste em uma aplicação NestJS com dois módulos principais:

*   **Producer:** Responsável por enviar mensagens para um tópico do Kafka.
*   **Consumer:** Responsável por receber mensagens de um tópico do Kafka.

## Tecnologias Utilizadas

*   [NestJS](https://nestjs.com/)
*   [Apache Kafka](https://kafka.apache.org/)
*   [TypeScript](https://www.typescriptlang.org/)

## Estrutura do Projeto

```
.
├── src
│   ├── app.module.ts
│   ├── main.ts
│   ├── consumer
│   │   ├── consumer.controller.ts
│   │   └── consumer.module.ts
│   ├── kafka
│   │   └── kafka.module.ts
│   └── producer
│       ├── dto
│       │   └── create-message.dto.ts
│       ├── producer.controller.ts
│       ├── producer.module.ts
│       └── producer.service.ts
├── test
└── ...
```

## Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/nestjs-kafka.git
    ```

2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Inicie os containers do Kafka e Zookeeper via Docker Compose:

    ```bash
    docker-compose up -d
    ```

## Executando a Aplicação

1.  Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:3000`.

## API

### Producer

#### `POST /producer`

Envia uma mensagem para o tópico `message-topic` do Kafka.

**Request Body:**

```json
{
  "content": "Sua mensagem aqui",
  "author": "Seu nome"
}
```

**Response:**

Aguardando confirmação do Kafka.

### Consumer

O consumidor escuta o tópico `message-topic` e imprime as mensagens recebidas no console.

## Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test
```
