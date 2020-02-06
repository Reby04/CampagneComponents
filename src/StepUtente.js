import React from "react";
import { Row, Col, DatePicker, Button, Card, Select, Radio } from "antd";
import moment from "moment";
import { Link } from "@reach/router";

// const defaultValue = {
//   sesso: "M",
//   data: moment().valueOf(),
//   fascia: "35-45",
//   stato: "Nubile",
//   indirizzo: "Domicilio",
//   Nazione: "Italia",
//   Città: "Firenze",
//   Livello: "Alta",
//   Attività: "Alta",
//   Punti: "meno di",
//   PuntiMancanti: "meno di",
//   Attenzione: "Alta",
//   DataPassaggio: moment().valueOf(),
//   DataAttivazione: moment().valueOf(),
//   Tipologia: "ComboBox",
//   Classe: "ComboBox",
//   Sottoclasse: "ComboBox",
//   Prodotto: "ComboBox",
//   LivelloInteresse: "l1",
//   FrequenzaAcquisto: "ComboBox",
//   FrequenzaOnline: "ComboBox",
//   FrequenzaNegozio: "ComboBox",
//   UltimoAcquisto: "ComboBox",
//   AccessoNegozio: "ComboBox",
//   AccessoOnline: "ComboBox",
//   FasciaImporto: "ComboBox",
//   Negozio: "NegozioFavorito",
//   NazioneNegozio: "Italia",
//   TipologiaPOS: "Boutique",
//   POS: "sanGiovanni",
//   CondizioneTemp: "ComboBox",
//   Tipo: "Camerino"
// };

export const StepUtente = ({
  onNextPage,
  onPreviuosPage,
  dataForm,
  setDataForm
}) => {
  const dateFormat = "DD/MM/YYYY";
  const { Option } = Select;
  const option = [
    { label: "Negozio Favorito", value: "negozioFavorito" },
    { label: "Negozio Frequentato", value: "negozioFrequentato" }
  ];

  const onChange = () => {
    localStorage.setItem("Step Utente", JSON.stringify(dataForm.StepUtente));
    onNextPage();
    console.log(JSON.stringify(dataForm.StepUtente));
  };

  return (
    <div>
      <div style={{ paddingLeft: 100 }}>
        <Card title="Dettaglio Utente" style={{ width: 1600 }}>
          <Row>
            <Col span={6}>Sessio</Col>
            <Col span={6}>Compleanno</Col>
            <Col span={6}>Fascia d'età</Col>
            <Col span={6}>Stato civile</Col>
          </Row>
          <div>
            <br></br>
            <Row>
              <Col span={6}>
                <Select
                  value={dataForm.StepUtente.sesso}
                  name="sesso"
                  defaultValue="M"
                  style={{ width: 160 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        sesso: value
                      }
                    });
                  }}
                >
                  <Option value="M">M</Option>
                  <Option value="F">F</Option>
                </Select>
              </Col>
              <Col span={6}>
                <DatePicker
                  value={moment(dataForm.StepUtente.data)}
                  name="data"
                  format={dateFormat}
                  onChange={(date, dateString) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        data: date.valueOf()
                      }
                    });
                  }}
                />
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.StepUtente.fascia}
                  name="fascia"
                  defaultValue="25-35"
                  style={{ width: 160 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        fascia: value
                      }
                    });
                  }}
                >
                  <Option value="25-35">25-35</Option>
                  <Option value="36-46">36-46</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.StepUtente.stato}
                  name="stato"
                  defaultValue="Nubile"
                  style={{ width: 160 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        stato: value
                      }
                    });
                  }}
                >
                  <Option value="Nubile">Nubile</Option>
                  <Option value="Celice">Celibe</Option>
                  <Option value="Sposato">Sposato</Option>
                  <Option value="Vedovo">Vedovo</Option>
                </Select>
              </Col>
            </Row>
          </div>
          <br></br>
          <p></p>
          <div>
            <Row>
              <Col span={6}>Tipologia Indirizzo</Col>
              <Col span={6}>Nazione</Col>
              <Col span={6}>Città</Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>
                <Select
                  value={dataForm.StepUtente.indirizzo}
                  name="indirizzo"
                  defaultValue="Domicilio"
                  style={{ width: 160 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        indirizzo: value
                      }
                    });
                  }}
                >
                  <Option value="Domicilio">Domicilio</Option>
                  <Option value="Residenza">Residenza</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.StepUtente.Domicilio}
                  name="Nazione"
                  defaultValue="Italia"
                  style={{ width: 160 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        Domicilio: value
                      }
                    });
                  }}
                >
                  <Option value="Italia">Italia</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.StepUtente.Residenza}
                  name="Città"
                  defaultValue="Firenze"
                  style={{ width: 160 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        Residenza: value
                      }
                    });
                  }}
                >
                  <Option value="Firenze">Firenze</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </Card>
        <br></br> <p></p>
        <div>
          <Card title="Fidelity" style={{ width: 1600 }}>
            <Row>
              <Col span={6}>Livello di Fidelity</Col>
              <Col span={6}>Attività Fidelity recente</Col>
            </Row>
            <div>
              <br></br>
              <Row>
                <Col span={6}>
                  <Select
                    value={dataForm.StepUtente.Livello}
                    name="Livello"
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Livello: value
                        }
                      });
                    }}
                  >
                    <Option value="Alta">Alta</Option>
                    <Option value="Bassa">Bassa</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.StepUtente.Attività}
                    name="Attività"
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Attività: value
                        }
                      });
                    }}
                  >
                    <Option value="Alta">Alta</Option>
                    <Option value="Bassa">Bassa</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <br></br>
            <p></p>
            <div>
              <Row>
                <Col span={6}>Fidelity Card Points</Col>
                <Col span={6}>Punti mancanti al livello successivo</Col>
                <Col span={6}>Attenzione</Col>
              </Row>
            </div>
            <br></br>
            <div>
              <Row>
                <Col span={6}>
                  <Select
                    value={dataForm.StepUtente.Punti}
                    name="Punti"
                    defaultValue="Meno di 10"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Punti: value
                        }
                      });
                    }}
                  >
                    <Option value="Meno di">Meno di 10</Option>
                    <Option value="Più di">Più di 10</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.StepUtente.PuntiMancanti}
                    name="PuntiMancanti"
                    defaultValue="Meno di 10"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          PuntiMancanti: value
                        }
                      });
                    }}
                  >
                    <Option value="Meno di">Meno di 10</Option>
                    <Option value="Più di">Più di 10</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.StepUtente.Attenzione}
                    name="Attenzione"
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Attenzione: value
                        }
                      });
                    }}
                  >
                    <Option value="Alta">Alta</Option>
                    <Option value="Bassa">Bassa</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <br></br>
            <p></p>
            <div>
              <Row>
                <Col span={6}>Data attivazione Fidelity</Col>
                <Col span={6}>Data ultimo passaggio di livello</Col>
              </Row>
            </div>
            <br></br>
            <Row>
              <Col span={6}>
                <DatePicker
                  value={moment(dataForm.StepUtente.DataAttivazione)}
                  name="DataAttivazione"
                  format={dateFormat}
                  onChange={(date, dateString) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        DataAttivazione: date.valueOf()
                      }
                    });
                  }}
                />
              </Col>
              <Col span={6}>
                <DatePicker
                  value={moment(dataForm.StepUtente.DataPassaggio)}
                  name="DataPassaggio"
                  format={dateFormat}
                  onChange={(date, dateString) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        DataPassaggio: date.valueOf()
                      }
                    });
                  }}
                />
              </Col>
            </Row>
          </Card>
        </div>
        <br></br>
        <p></p>
        <div>
          <Card title="Touch Point Prodotti" style={{ width: 1600 }}>
            <Row>
              <Col span={4}>Tipologia Merceologica</Col>
              <Col span={4}>Classe Merceologica</Col>
              <Col span={4}>Sottoclasse Merceologica</Col>
              <Col span={4}>Prodotto</Col>
              <Col span={4}>Livello di Interesse</Col>
            </Row>
            <br></br>
            <div>
              <Row>
                <Col span={4}>
                  <Select
                    value={dataForm.StepUtente.Tipologia}
                    name="Tipologia"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Tipologia: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={dataForm.StepUtente.Classe}
                    name="Classe"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Classe: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={dataForm.StepUtente.Sottoclasse}
                    name="Sottoclasse"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Sottoclasse: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={dataForm.StepUtente.Prodotto}
                    name="Prodotto"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Prodotto: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={dataForm.StepUtente.LivelloInteresse}
                    name="LivelloInteresse<"
                    defaultValue="l1"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          LivelloInteresse: value
                        }
                      });
                    }}
                  >
                    <Option value="l1">l1</Option>
                    <Option value="l2">l2</Option>
                  </Select>
                </Col>
                <Col>
                  <Button>Rimuovi</Button> <Button>Aggiungi</Button>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
        <br></br>
        <p></p>
        <div>
          <Card title="Analisi e Frequenza" style={{ width: 1600 }}>
            <Row>
              <Col span={6}>Frequenza media acquisto cliente</Col>
              <Col span={6}>Frequenza media accesso online</Col>
              <Col span={6}>Frequenza media accesso in negozio</Col>
            </Row>
            <br></br>

            <div>
              <Row>
                <Col span={6}>
                  <Select
                    value={dataForm.StepUtente.FrequenzaAcquisto}
                    name="FrequenzaAcquisto"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          FrequenzaAcquisto: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.StepUtente.FrequenzaOnline}
                    name="FrequenzaOnline"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          FrequenzaOnline: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.StepUtente.FrequenzaNegozio}
                    name="FrequenzaNegozio"
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          FrequenzaNegozio: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <br></br>
            <p></p>
            <div>
              <Row>
                <Col span={6}>Giorni da ultimo acquisto</Col>
                <Col span={6}>Giorno da ultimo accesso in negozio</Col>
                <Col span={6}>Giorni da ultimo accesso online</Col>
              </Row>
              <br></br>

              <div>
                <Row>
                  <Col span={6}>
                    <Select
                      value={dataForm.StepUtente.UltimoAcquisto}
                      name="UltimoAcquisto"
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={value => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            UltimoAcquisto: value
                          }
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      value={dataForm.StepUtente.AccessoNegozio}
                      name="AccessoNegozio"
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={value => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            AccessoNegozio: value
                          }
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      value={dataForm.StepUtente.AccessoOnline}
                      name="AccessoOnline"
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={value => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            AccessoOnline: value
                          }
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </div>
            <div>
              <br></br>
              <p></p>
              <Row>
                <Col span={6}>Fascia importo acquisto medio</Col>
              </Row>
              <br></br>

              <div>
                <Row>
                  <Col span={6}>
                    <Select
                      value={dataForm.StepUtente.FasciaImporto}
                      name="FasciaImporto"
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={value => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            FasciaImporto: value
                          }
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
          <div>
            <Card title="Negozio Favorito" style={{ width: 1600 }}>
              <div>
                <Row>
                  <Col span={6}>
                    <Radio.Group
                      value={dataForm.StepUtente.Negozio}
                      name="Negozio"
                      defaultValue="Italia"
                      options={option}
                      onChange={value => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            Negozio: value.target.value
                          }
                        });
                      }}
                    ></Radio.Group>
                  </Col>
                </Row>
                <br></br>
                <p></p>
                <div>
                  <Row>
                    <Col span={6}>Nazione</Col>
                    <Col span={6}>Tipologia POS</Col>
                    <Col span={6}>POS</Col>
                  </Row>
                </div>
                <br></br>
                <div>
                  <Row>
                    <Col span={6}>
                      <Select
                        value={dataForm.StepUtente.NazioneNegozio}
                        name="NazioneNegozio"
                        defaultValue="Italia"
                        style={{ width: 160 }}
                        onChange={value => {
                          setDataForm({
                            ...dataForm,
                            StepUtente: {
                              ...StepUtente,
                              Nazione: value
                            }
                          });
                        }}
                      >
                        <Option value="Italia">Italia</Option>
                        <Option value="Altro">Altro</Option>
                      </Select>
                    </Col>
                    <Col span={6}>
                      <Select
                        value={dataForm.StepUtente.TipologiaPOS}
                        name="TipologiaPOS"
                        defaultValue="Boutique"
                        style={{ width: 160 }}
                        onChange={value => {
                          setDataForm({
                            ...dataForm,
                            StepUtente: {
                              ...StepUtente,
                              TipologiaPOS: value
                            }
                          });
                        }}
                      >
                        <Option value="Boutique">Boutique</Option>
                        <Option value="Altro">Altro</Option>
                      </Select>
                    </Col>
                    <Col span={6}>
                      <Select
                        value={dataForm.StepUtente.POS}
                        name="POS"
                        defaultValue="sanGiovanni"
                        style={{ width: 160 }}
                        onChange={value => {
                          setDataForm({
                            ...dataForm,
                            StepUtente: {
                              ...StepUtente,
                              POS: value
                            }
                          });
                        }}
                      >
                        <Option value="sanGiovanni">
                          Piazza San Giovanni, 17
                        </Option>
                        <Option value="Altro"> Altro</Option>
                      </Select>
                    </Col>
                  </Row>
                </div>
                <br></br>
                <p></p>
                <Row>
                  <Col span={6}>Condizione Temporale</Col>
                  <Col span={6}>Tipologia POS</Col>
                </Row>
              </div>
              <br></br>
              <div>
                <Row>
                  <Col span={6}>
                    <Select
                      value={dataForm.StepUtente.CondizioneTemp}
                      name="CondizioneTemp"
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={value => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            CondizioneTemp: value
                          }
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      value={dataForm.StepUtente.Tipo}
                      name="Tipo"
                      defaultValue="Camerino"
                      style={{ width: 160 }}
                      onChange={value => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            Tipo: value
                          }
                        });
                      }}
                    >
                      <Option value="Camerino">Camerino</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
          <br></br>
          <p></p>

          <div style={{ paddingLeft: 100 }}>
            <Row>
              <Col span={6}>
                <Link to="/StepLocation">
                  <Button>Indietro</Button>
                </Link>
              </Col>
              <Col span={6}></Col>
              <Col span={6}></Col>

              <Col span={6}>
                <Link to="/StepActions">
                  <Button onClick={onChange}>Avanti</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
