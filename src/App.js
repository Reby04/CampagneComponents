import React, { useState, useEffect } from "react";
import { Home } from "./Home";
import { Steps, Divider } from "antd";
import { Router } from "@reach/router";
import { NuovaCampagna } from "./NuovaCampagna";
import { StepTempo } from "./StepTempo";
import { StepLocation } from "./StepLocation";
import { StepUtente } from "./StepUtente";
import { StepActions } from "./StepActions";
import moment from "moment";

function App() {
  const { Step } = Steps;
  const [current, setCurrent] = useState(0);
  const data = [
    {
      NomeCampagna: "Coap",
      Autore: "hjk",
      profilo: "hjk"
    }
  ];

  const [dataFormApp, setDataFormApp] = useState({
    nuovaCampagna: {
      nomeCampagna: "",
      dataInizio: moment().valueOf(),
      dataFine: moment().valueOf(),
      profiloCampagna: "Global Campain",
      note: "",
      Campagna: ""
    },

    StepTempo: {
      Condizione: "Condizione Temporale",
      Checkbox: "Lun",
      Festivo: "Festivo",
      TuttiGG: "TuttiGG",
      Time1: moment().valueOf(),
      Time2: moment().valueOf(),
      Time3: moment().valueOf(),
      Time4: moment().valueOf(),
      Stagioni: "autunno",
      Temp: "10",
      TempAttuale: "10",
      TempMax: "10",
      Meteo: "Nuvoloso"
    },

    StepLocation: {
      Country: "it-IT",
      TipologiaPOS: "Boutique",
      POS: "sanGiovanni",
      DistanzaEntrata: "a30m",
      DistanzaUscita: "a30m",
      Distanza: "a30m",
      Merce: "Abbigliamento",
      Zona: "Camerino",
      Classe: "Abito",
      Sottoclasse: "Mini"
    },

    StepUtente: {
      sesso: "M",
      data: moment().valueOf(),
      fascia: "35-45",
      stato: "Nubile",
      indirizzo: "Domicilio",
      Nazione: "Italia",
      Città: "Firenze",
      Livello: "Alta",
      Attività: "Alta",
      Punti: "meno di",
      PuntiMancanti: "meno di",
      Attenzione: "Alta",
      DataPassaggio: moment().valueOf(),
      DataAttivazione: moment().valueOf(),
      Tipologia: "ComboBox",
      Classe: "ComboBox",
      Sottoclasse: "ComboBox",
      Prodotto: "ComboBox",
      LivelloInteresse: "l1",
      FrequenzaAcquisto: "ComboBox",
      FrequenzaOnline: "ComboBox",
      FrequenzaNegozio: "ComboBox",
      UltimoAcquisto: "ComboBox",
      AccessoNegozio: "ComboBox",
      AccessoOnline: "ComboBox",
      FasciaImporto: "ComboBox",
      Negozio: "NegozioFavorito",
      NazioneNegozio: "Italia",
      TipologiaPOS: "Boutique",
      POS: "sanGiovanni",
      CondizioneTemp: "ComboBox",
      Tipo: "Camerino"
    },

    StepActions: {
      Tipo: "VideoWall",
      Zona: "Camerino",
      Scelta: "VideoBorse"
    }
  });

  const onChange = current => {
    console.log("onChange:", current);
    setCurrent(current);
    localStorage.setItem("dataFormApp", JSON.stringify(dataFormApp));
    console.log(JSON.stringify(dataFormApp));
  };

  const handleNextPage = () => {
    setCurrent(current + 1);
  };

  const handlePreviuosPage = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    console.log("use Effect");
    var local = localStorage.getItem("dataFormApp");
    console.log(JSON.parse(local));
    setDataFormApp(JSON.parse(local) || dataFormApp);
  }, []);

  return (
    <div>
      <div style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
        <h1 style={{ textAlign: "center" }}>Nuova Campagna</h1>
        <Divider></Divider>
        <Steps current={current} onChange={onChange}>
          <Step title="Step 1" description="Nuova Campagna." />
          <Step title="Step 2" description="Tempo." />
          <Step title="Step 3" description="Location." />
          <Step title="Step 4" description="Utente." />
          <Step title="Step 5" description="Actions." />
        </Steps>
        <Divider />
      </div>
      <Router>
        <Home path="/" dataVar={data}></Home>
        <NuovaCampagna
          path="/NuovaCampagna"
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviuosPage}
          dataForm={dataFormApp}
          setDataForm={setDataFormApp}
        ></NuovaCampagna>
        <StepTempo
          path="/StepTempo"
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviuosPage}
          dataForm={dataFormApp}
          setDataForm={setDataFormApp}
        ></StepTempo>
        <StepLocation
          path="/StepLocation"
          onPreviousPage={handlePreviuosPage}
          onNextPage={handleNextPage}
          dataForm={dataFormApp}
          setDataForm={setDataFormApp}
        ></StepLocation>
        <StepUtente
          path="/StepUtente"
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviuosPage}
          dataForm={dataFormApp}
          setDataForm={setDataFormApp}
        ></StepUtente>
        <StepActions
          path="/StepActions"
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviuosPage}
          dataForm={dataFormApp}
          setDataForm={setDataFormApp}
        ></StepActions>
      </Router>
    </div>
  );
}

export default App;
