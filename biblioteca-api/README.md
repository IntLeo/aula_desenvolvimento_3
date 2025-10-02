# 📚 Biblioteca API

API RESTful para gerenciamento de livros em uma biblioteca.
Permite **cadastrar, listar, buscar, atualizar e remover livros**, seguindo boas práticas de desenvolvimento de APIs.

---

## 📂 Estrutura do Projeto

```
biblioteca-api/
├── index.js
├── config/
│   └── database.js
├── models/
│   └── Livro.js
├── controllers/
│   └── livrosController.js
├── routes/
│   └── livros.js
├── middlewares/
│   └── errorHandler.js
├── fotos/
│   └── diversasFotosDoInsomnia
└── package.json
```

---

## 🗂️ Modelo de Dados (Livro)

Cada livro possui os seguintes campos:

* **id** → gerado automaticamente pelo banco de dados
* **titulo** → string obrigatória
* **autor** → string obrigatória
* **anoPublicacao** → número inteiro obrigatório (> 0)
* **descricao** → string opcional

---

## 🔌 Endpoints RESTful

| Método | Rota          | Descrição                     |
| ------ | ------------- | ----------------------------- |
| GET    | `/livros`     | Lista todos os livros         |
| GET    | `/livros/:id` | Busca um livro pelo ID        |
| POST   | `/livros`     | Cadastra um novo livro        |
| PUT    | `/livros/:id` | Atualiza os dados de um livro |
| DELETE | `/livros/:id` | Remove um livro               |

---

## ⚙️ Regras de Negócio

* **Campos obrigatórios**: `titulo`, `autor`, `anoPublicacao`.
* `anoPublicacao` deve ser um **número inteiro maior que 0**.
* Retorno de erros no formato JSON.
* **Status codes utilizados:**

  * `200 OK` → Operação bem-sucedida (GET, PUT, DELETE)
  * `201 Created` → Recurso criado (POST)
  * `400 Bad Request` → Erro de validação
  * `404 Not Found` → Recurso não encontrado

---

## 📦 Dependências

O projeto utiliza as seguintes dependências:

* **express (^5.1.0)** → Framework web para Node.js usado para criar a API e gerenciar rotas.
* **sequelize (^6.37.7)** → ORM para interagir com bancos de dados relacionais de forma simples.
* **sqlite3 (^5.1.7)** → Banco de dados leve usado neste projeto em conjunto com o Sequelize.
* **cors (^2.8.5)** → Middleware que habilita o **Cross-Origin Resource Sharing**, permitindo que a API seja acessada de outros domínios.
* **morgan (^1.10.1)** → Middleware de logging que registra as requisições HTTP no console, útil para depuração.

---

## ▶️ Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/IntLeo/aula_desenvolvimento_3.git
   ```
2. Acesse a pasta biblioteca-api e instale as dependências:

   ```bash
   npm install
   ```
3. Inicie o servidor:

   ```bash
   npm start
   ```
4. A API estará disponível em:

   ```
   http://localhost:3000
   ```

---

## 📥 Exemplos de Requisições

### ➕ Criar um Livro (POST `/livros`)

**Request Body:**

```json
{
  "titulo": "O Pequeno Príncipe",
  "autor": "Antoine de Saint-Exupéry",
  "anoPublicacao": 1943,
  "descricao": "Uma grande historia sobre um principe e sua Rosa"
}
```

**Response (201 Created):**

```json
{
  "id": 1,
  "titulo": "O Pequeno Príncipe",
  "autor": "Antoine de Saint-Exupéry",
  "anoPublicacao": "1943",
  "descricao": "Uma grande historia sobre um principe e sua Rosa",
  "createdAt": "2025-10-02T01:18:01.372Z",
  "updatedAt": "2025-10-02T01:18:01.372Z"
}
```

---

### 📖 Listar Livros (GET `/livros`)

**Response (200 OK):**

```json
[
  {
    "id": 5,
    "titulo": "O Pequeno Príncipe",
    "autor": "Antoine de Saint-Exupéry",
    "anoPublicacao": "1943",
    "createdAt": "2025-10-02T01:15:59.378Z",
    "updatedAt": "2025-10-02T01:15:59.378Z"
  }
]
```

---

### 🔎 Buscar Livro por ID (GET `/livros/:id`)

**Response (200 OK):**

```json
{
  "id": 1,
  "titulo": "O Pequeno Príncipe",
  "autor": "Antoine de Saint-Exupéry",
  "anoPublicacao": "1943",
  "createdAt": "2025-10-02T01:15:59.378Z",
  "updatedAt": "2025-10-02T01:15:59.378Z"
}
```

---

### ✏️ Atualizar Livro (PUT `/livros/:id`)

**Request Body:**

```json
{
  "titulo": "O Príncipe Pequeno",
  "autor": "Antoine dela França",
  "anoPublicacao": 2000
}
```

**Response (200 OK):**

```json
{
  "id": 1,
  "titulo": "O Príncipe Pequeno",
  "autor": "Antoine dela França",
  "anoPublicacao": 2000,
  "descricao": null,
  "createdAt": "2025-10-02T01:17:24.238Z",
  "updatedAt": "2025-10-02T01:28:53.993Z"
}
```

---

### 🗑️ Remover Livro (DELETE `/livros/:id`)

**Response (200 OK):**

```json
{
  "mensagem": "Livro apagado com sucesso"
}
```

---

## 📌 Observações

* O endpoint **PUT** exige todos os campos obrigatórios no corpo da requisição (`titulo`, `autor`, `anoPublicacao`).
* O campo `descricao` é opcional e pode ser nulo.
* O endpoint **DELETE** retorna `200 OK` com uma mensagem em JSON, em vez de `204 No Content`.

---