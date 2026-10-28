
# Flashcards App

Aplikacija za učenje pomoću kartica, napravljena u Next.js-u.
Omogućava pregled špilova, pretragu i filtriranje po predmetima.

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Aplikacija je dostupna na http://localhost:3000.

## Pokretanje preko Dockera

```bash
docker build -t flashcards-app .
docker run -p 3000:3000 flashcards-app
```

Aplikacija je dostupna na http://localhost:3000.