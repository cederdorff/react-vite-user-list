# React Øvelser: Props, State, useState, useEffect & Komponenter

Her er en udvidet guide med opgaver, der træner alle centrale emner for denne undervisningsgang. Brug workspace-koden som udgangspunkt og byg videre på eksisterende komponenter.

---

## 1. Props: Vis alle data fra user-objektet

Du arbejder med en users-datastruktur, som allerede hentes fra API'et:

`https://race-rest-default-rtdb.firebaseio.com/users.json`

Når data er hentet og konverteret til et array, ser hvert user-objekt sådan ud:

```js
{
  id: "ZfPTVEMQKf9vhNiUh0bj",
  image: "https://...",
  mail: "...",
  name: "...",
  title: "..."
}
```

### Props og destructuring

Props er data, som en komponent modtager fra sin "parent". Du kan modtage props enkeltvis med destructuring:

```jsx
function User({ name, mail, title, image, id }) {
  // ...
}
```

eller som ét objekt:

```jsx
function User(props) {
  // props.name, props.mail osv.
}
```

Du kan også sende hele user-objektet som én prop:

```jsx
<User user={user} />
```

og bruge destructuring i komponenten:

```jsx
function User({ user }) {
  const { id, image, mail, name, title } = user;
  // ...
}
```

---

---

### Opgave 1: Vis alle props fra user-objektet

**Step 1:**  
Udvid `User`-komponenten, så den viser ALLE props fra user-objektet:

- id
- image
- mail
- name
- title

**Step 2:**  
Sørg for at alle felter vises tydeligt og med passende styling.

- Brug fx et billede-tag til `image`, og vis de andre felter som tekst.

**Step 3:**  
Lav en validering i `User`, så hvis en prop mangler, vises en default-værdi.

- Fx: Hvis `image` mangler, vis et placeholder-billede.

**Step 4:**  
Forklar med kommentarer i koden, hvad `{}` gør i funktionshovedet.

- Skriv en kort kommentar over funktionshovedet.

**Step 5:**  
Ændr `User`-komponenten, så den i stedet for at modtage alle props enkeltvis, modtager ét `user`-objekt som prop:

```jsx
<User user={user} />
```

Brug destructuring i komponenten:

```jsx
function User({ user }) {
  const { id, image, mail, name, title } = user;
  // ...
}
```

**Ekstra hjælp:**

- Start med at vise props enkeltvis, og refaktorér derefter til at bruge et user-objekt.
- Brug `console.log(props)` eller `console.log(user)` for at se data i konsollen.

---

---

### Opgave 2: State – Dynamiske data og interaktivitet

**Kort forklaring:**
Med useState kan du oprette og opdatere lokale data (state) i en komponent. State bruges til at gøre din komponent interaktiv og dynamisk.

Eksempel:

```jsx
const [likes, setLikes] = useState(0);
```

**Step 1:**  
Tilføj en “like”-knap til hver bruger, der tæller antal likes med `useState` i `User`-komponenten.  
_Hjælp: Opret en state-variabel i User:_

```jsx
const [likes, setLikes] = useState(0);
```

_Lav en knap:_

```jsx
<button onClick={() => setLikes(likes + 1)}>Like</button>
```

**Step 2:**  
Vis antal likes på kortet og opdater det, når man klikker på knappen.  
_Hjælp: Vis likes med fx `<p>Likes: {likes}</p>`_

**Step 3:**  
Tilføj en “reset likes”-knap, der nulstiller likes for en bruger.  
_Hjælp:_

```jsx
<button onClick={() => setLikes(0)}>Reset likes</button>
```

**Step 4:**  
Gør det muligt at skjule/vis brugerens detaljer med en toggle-knap (brug state).  
_Hjælp: Opret en state-variabel:_

```jsx
const [showDetails, setShowDetails] = useState(true);
```

_Lav en knap:_

```jsx
<button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Skjul" : "Vis"} detaljer</button>
```

_Brug showDetails til at styre om detaljerne vises:_

```jsx
{
  showDetails && <div>{/* detaljer her */}</div>;
}
```

---

---

### Opgave 3: useEffect – Sideeffekter og datahentning

**Kort forklaring:**
Med useEffect kan du udføre sideeffekter i din komponent, fx datahentning, logging eller opdatering af DOM. useEffect kører, når komponenten renderes eller når en bestemt state/prop ændres.

Eksempel:

```jsx
useEffect(() => {
  // kode her
}, [likes]);
```

**Step 1:**  
Brug `useEffect` til at logge til konsollen, hver gang en bruger får et like.  
_Hjælp:_

```jsx
useEffect(() => {
  console.log("Likes:", likes);
}, [likes]);
```

**Step 2:**  
Brug `useEffect` til at vise en besked, når likes når 10.  
_Hjælp:_

```jsx
useEffect(() => {
  if (likes === 10) alert("Du har nået 10 likes!");
}, [likes]);
```

**Step 3:**  
Tilføj en loader/spinner, der vises mens brugerdata hentes i `App` (brug state og useEffect).  
_Hjælp: Opret en state-variabel til loading:_

```jsx
const [loading, setLoading] = useState(true);
```

_Sæt loading til false når data er hentet, og vis fx `Loading...` mens loading er true._

**Step 4:**  
Tilføj en useEffect, der viser en alert, hvis der ikke er nogen brugere i listen.  
_Hjælp:_

```jsx
useEffect(() => {
  if (users.length === 0) alert("Ingen brugere!");
}, [users]);
```

---

---

### Opgave 4: Components – Struktur og genbrug

**Step 1:**  
Lav en ny komponent, fx `Header` eller `UserList`, og brug den i `App`.  
_Hjælp: Opret en ny fil fx `Header.jsx` og lav en simpel komponent:_

```jsx
function Header() {
  return <h1>Brugeroversigt</h1>;
}
export default Header;
```

_Importér og brug i App:_

```jsx
import Header from "./Header";
```

**Step 2:**  
Flyt brugerlisten til en separat `UserList`-komponent, der modtager `users` som prop.  
_Hjælp:_

```jsx
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
```

**Step 3:**  
Lav en `Footer`-komponent med copyright/info.  
_Hjælp: Opret en simpel Footer-komponent og brug den nederst i App._

**Step 4:**  
Lav en “UserCard”-komponent, som bruges af `UserList` til at vise hver bruger.  
_Hjælp: Opret en UserCard-komponent, og brug den i stedet for User i UserList._

---

---

### Opgave 5: Dataflow – Tilføj og fjern brugere

**Step 1:**  
Tilføj en formular i `App` til at oprette en ny bruger (navn, mail, titel, billede, alder).  
_Hjælp: Opret en state-variabel til formdata, fx:_

```jsx
const [formData, setFormData] = useState({ name: "", mail: "", title: "", image: "", age: "" });
```

_Lav inputs og en submit-knap. Brug onChange til at opdatere formData._

**Step 2:**  
Når formularen submitter, tilføjes brugeren til listen (brug `setUsers`).  
_Hjælp:_

```jsx
const handleAddUser = () => {
  setUsers([...users, { ...formData, id: crypto.randomUUID() }]);
};
```

**Step 3:**  
Tilføj en “slet bruger”-knap på hvert kort, der fjerner brugeren fra listen.  
_Hjælp:_

```jsx
const handleDeleteUser = id => {
  setUsers(users.filter(user => user.id !== id));
};
```

**Step 4:**  
Gør det muligt at redigere en brugers oplysninger via en formular.  
_Hjælp: Lav en form, der kan vise og opdatere en brugers data. Brug state til at holde styr på hvilken bruger der redigeres._

---

---

### Opgave 6: Ekstra – Filtrering og søgning

**Step 1:**  
Tilføj en søgefunktion, så man kan filtrere brugere efter navn.  
_Hjælp: Opret en state-variabel til søgetekst:_

```jsx
const [searchTerm, setSearchTerm] = useState("");
```

_Filtrér brugere:_

```jsx
const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
```

**Step 2:**  
Tilføj en dropdown, så man kan filtrere brugere efter titel.  
_Hjælp: Opret en state-variabel til valgt titel og filtrér listen på baggrund af den._

**Step 3:**  
Vis antal viste brugere ud fra filteret.  
_Hjælp: Brug fx `{filteredUsers.length}` til at vise antal._

---

## Ressourcer

- [React Components](https://www.w3schools.com/react/react_components.asp)
- [React Props](https://www.w3schools.com/react/react_props.asp)
- [React useState Hook](https://www.w3schools.com/react/react_usestate.asp)
- [React useEffect Hook](https://www.w3schools.com/react/react_useeffect.asp)
- [Scrimba: Learn React](https://scrimba.com/learn-react-c0e)

God arbejdslyst!
