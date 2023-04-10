import { useEffect, useState } from "react";

export default function App() {
  const [shown, setShown] = useState(true);

  function handleToggle() {
    setShown(!shown);
  }

  useEffect(() => {
    // Get Dashboard Data:
    fetch("http://localhost:8080/api/dashboard")
      .then((res) => res.json())
      .then((res) => console.log({ res }));
  });

  return (
    <div>
      <h1>Halo! Selamat Datang di Website As'ad</h1>
      <Sapa name="Laksman" />
      <Sapa name="Kurnia" />
      <Sapa name="Mirza" />
      <Sapa name="Vincent" />

      <button
        onClick={() => setShown(true)}
        style={{ backgroundColor: "green" }}
      >
        Buka
      </button>
      <button
        onClick={() => setShown(false)}
        style={{ backgroundColor: "red" }}
      >
        Tutup
      </button>
      <button onClick={handleToggle}>Toggle Buka / Tutup</button>

      {shown ? (
        <div style={{ backgroundColor: "greenyellow" }}>
          <h4>Informasi Rahasia</h4>
          <p>Akun Bank: 123456</p>
          <p>PIN: 000111</p>
        </div>
      ) : null}

      <hr />
      <FaqAccordion />
    </div>
  );
}

function Sapa(props) {
  return (
    <div style={{ backgroundColor: "gray", padding: "10px", marginBottom: 1 }}>
      Halo {props.name}
    </div>
  );
}

function FaqAccordion() {
  const [state, setState] = useState("1");

  console.log("apa sih statenya: ", state);

  const faqs = [
    {
      id: "1",
      question: "Kenapa dinamakan ayam?",
      answer: "Karena dina lapar",
    },
    {
      id: "2",
      question: "Ayam apa yang paling gede?",
      answer: "Ayam semesta",
    },
    {
      id: "3",
      question: "Ikan yang bisa terbang?",
      answer: "Lelelawar",
    },
    {
      id: "4",
      question: "Bahasa arabnya batere?",
      answer: "Al-kaline",
    },
  ];

  return (
    <>
      <h1>FAQs</h1>

      {faqs.map((faq) => (
        <div style={{ backgroundColor: "blueviolet" }}>
          <h4 onClick={() => setState(faq.id)}>{faq.question}</h4>
          {state === faq.id ? <p>{faq.answer}</p> : null}
        </div>
      ))}

      {/* <h4 onClick={() => setState("Kenapa dinamakan ayam?")}>
        Kenapa dinamakan ayam?
      </h4>
      {state === "Kenapa dinamakan ayam?" ? <p>Karena dina lapar</p> : null}

      <h4 onClick={() => setState("Ayam apa yang paling gede?")}>
        Ayam apa yang paling gede?
      </h4>
      {state === "Ayam apa yang paling gede?" ? <p>Ayam semesta</p> : null}

      <h4 onClick={() => setState("Ikan yang bisa terbang?")}>
        Ikan yang bisa terbang?
      </h4>
      {state === "Ikan yang bisa terbang?" ? <p>Lelelawar</p> : null} */}
    </>
  );
}
