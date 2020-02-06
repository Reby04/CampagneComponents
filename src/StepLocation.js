import React from "react";
import { Row, Col, Select, Radio, Card, Button } from "antd";
import { Link } from "@reach/router";

// const defaultValue = {
//   Country: "it-IT",
//   TipologiaPOS: "Boutique",
//   POS: "sanGiovanni",
//   DistanzaEntrata: "a30m",
//   DistanzaUscita: "a30m",
//   Distanza: "a30m",
//   Merce: "Abbigliamento",
//   Zona: "Camerino",
//   Classe: "Abito",
//   Sottoclasse: "Mini"
// };

export const StepLocation = ({
  onNextPage,
  onPreviousPage,
  dataForm,
  setDataForm
}) => {
  const { Option } = Select;

  const option = [
    { label: "Interno del negizio", value: "internoNegozio" },
    { label: "In Prossimit", value: "inProssimit" },
    { label: "200 m", value: "200m" },
    { label: "500 m", value: "500m" },
    { label: "1 Km", value: "1km" },
    { label: "5 Km", value: "5km" },
    { label: "30 Km", value: "30km" }
  ];

  const onChange = () => {
    localStorage.setItem(
      "Step Location",
      JSON.stringify(dataForm.StepLocation)
    );
    onNextPage();
    console.log(JSON.stringify(dataForm.StepLocation));
  };

  return (
    <div>
      <div style={{ paddingLeft: 100 }}>
        <p style={{ fontWeight: "bold" }}>Country</p>
        <Select
          value={dataForm.StepLocation.Country}
          name="Country"
          defaultValue="it-IT"
          style={{ width: 120 }}
          onChange={value => {
            setDataForm({
              ...dataForm,
              StepLocation: {
                ...dataForm.StepLocation,
                Country: value
              }
            });
          }}
        >
          <Option value="it-IT">it-IT</Option>
          <Option value="us-US"> us-US</Option>
        </Select>
        <br></br>
        <p></p>
        <Row>
          <Col span={4}>Tipologia POS</Col>
          <Col span={4}>POS</Col>
        </Row>
        <Row>
          <Col span={4}>
            <Select
              value={dataForm.StepLocation.TipologiaPOS}
              name="TipologiaPOS"
              defaultValue="Boutique"
              style={{ width: 160 }}
              onChange={value => {
                setDataForm({
                  ...dataForm,
                  StepLocation: {
                    ...dataForm.StepLocation,
                    TipologiaPOS: value
                  }
                });
              }}
            >
              <Option value="Boutique">Boutique</Option>
              <Option value="Altro">Altro</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select
              value={dataForm.StepLocation.POS}
              name="Pos"
              defaultValue="sanGiovanni"
              style={{ width: 160 }}
              onChange={value => {
                setDataForm({
                  ...dataForm,
                  StepLocation: {
                    ...dataForm.StepLocation,
                    POS: value
                  }
                });
              }}
            >
              <Option value="sanGiovanni">Piazza San Giovanni, 17</Option>
              <Option value="Altro">Altro</Option>
            </Select>
          </Col>
        </Row>
        <br></br>
        <p style={{ fontWeight: "bold" }}>Distanza dal negozio</p>
      </div>
      <div style={{ paddingLeft: 100 }}>
        <Radio.Group
          value={dataForm.StepLocation.Distanza}
          name="Distanza"
          options={option}
          onChange={event => {
            setDataForm({
              ...dataForm,
              StepLocation: {
                ...dataForm.StepLocation,
                Distanza: event.target.value
              }
            });
          }}
        ></Radio.Group>
      </div>
      <div style={{ paddingLeft: 100 }}>
        <br></br>
        <Card title="Prodotti disponibili nell'area" style={{ width: 800 }}>
          <Row>
            <Col span={6}>Tipo Zona</Col>
            <Col span={6}>Distanza logica da entrata</Col>
            <Col span={6}>Distanza logica da uscita</Col>
          </Row>
          <div>
            <br></br>
            <Row>
              <Col span={6}>
                <Select
                  value={dataForm.StepLocation.Zona}
                  name="Zona"
                  defaultValue="Camerino"
                  style={{ width: 160 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepLocation: {
                        ...dataForm.StepLocation,
                        Zona: value
                      }
                    });
                  }}
                >
                  <Option value="Camerino">Camerino</Option>
                  <Option value="Urbino">Urbino</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.StepLocation.DistanzaEntrata}
                  name="DistanzaEntrata"
                  defaultValue="a30m"
                  style={{ width: 160 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepLocation: {
                        ...dataForm.StepLocation,
                        DistanzaEntrata: value
                      }
                    });
                  }}
                >
                  <Option value="a30m">a 30 metri da ..</Option>
                  <Option value="a50m">a 50 metri da ..</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.StepLocation.DistanzaUscita}
                  name="DistanzaUscita"
                  defaultValue="a30m"
                  style={{ width: 160 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepLocation: {
                        ...dataForm.StepLocation,
                        DistanzaUscita: value
                      }
                    });
                  }}
                >
                  <Option value="a30m">a 30 metri da ..</Option>
                  <Option value="a50m">a 50 metri da ..</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </Card>
        <p></p>
        <div>
          <Card title="Zona" style={{ width: 800 }}>
            <Row>
              <Col span={6}>Tipologia merceologica</Col>
              <Col span={6}>Classe merceologica</Col>
              <Col span={6}>Sottoclasse merceologica</Col>
            </Row>
            <div>
              <br></br>
              <Row>
                <Col span={6}>
                  <Select
                    value={dataForm.StepLocation.Merce}
                    name="Merce"
                    defaultValue="Abbigliamento"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepLocation: {
                          ...dataForm.StepLocation,
                          Merce: value
                        }
                      });
                    }}
                  >
                    <Option value="Abbigliamento">Abbigliamento</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.StepLocation.Classe}
                    name="Classe"
                    defaultValue="Abito"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepLocation: {
                          ...dataForm.StepLocation,
                          Classe: value
                        }
                      });
                    }}
                  >
                    <Option value="Abito">Abito</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.StepLocation.Sottoclasse}
                    name="Sottoclasse"
                    defaultValue="Mini"
                    style={{ width: 160 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepLocation: {
                          ...dataForm.StepLocation,
                          Sottoclasse: value
                        }
                      });
                    }}
                  >
                    <Option value="Mini">Mini</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
        <br></br>
        <p></p>

        <div>
          <Row>
            <Col span={6}>
              <Link to="/StepTempo">
                <Button>Indietro</Button>
              </Link>
            </Col>
            <Col span={6}></Col>
            <Col span={6}></Col>

            <Col span={6}>
              <Link to="/StepUtente">
                <Button onClick={onChange}>Avanti</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
