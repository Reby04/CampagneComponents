import React from "react";
import {
  Row,
  Col,
  TimePicker,
  Button,
  Radio,
  Card,
  Checkbox,
  Select
} from "antd";
import moment from "moment";
import { Link } from "@reach/router";

// const defaultForm = {
//   Condizione: "Condizione Temporale",
//   Checkbox: "Lun",
//   Festivo: "Festivo",
//   TuttiGG: "TuttiGG",
//   Time1: moment().valueOf(),
//   Time2: moment().valueOf(),
//   Time3: moment().valueOf(),
//   Time4: moment().valueOf(),
//   Stagioni: "autunno",
//   Temp: "10",
//   TempAttuale: "10",
//   TempMax: "10",
//   Meteo: "Nuvoloso"
// };

export const StepTempo = ({
  onNextPage,
  onPreviousPage,
  dataForm,
  setDataForm
}) => {
  const { Option } = Select;
  const option = [
    { label: "Condizione temporale", value: "Condizione temporale" },
    { label: "Sempre", value: "Sempre" }
  ];

  const week = [
    { label: "Lun", value: "Lun" },
    { label: "Mar", value: "Mar" },
    { label: "Mer", value: "Mer" },
    { label: "Gio", value: "Gio" },
    { label: "Ven", value: "Ven" },
    { label: "Sab", value: "Sab" },
    { label: "Dom", value: "dom" }
  ];

  const format = "HH:mm";

  /* const onChangeWeek = e => {
    setSelectedWeek(e);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };*/

  const onChange = () => {
    localStorage.setItem("Step Tempo", JSON.stringify(dataForm.StepTempo));
    onNextPage();
    console.log(JSON.stringify(dataForm.StepTempo));
  };

  return (
    <div>
      <div style={{ paddingLeft: 130 }}>
        <Radio.Group
          name="Condizione"
          options={option}
          value={dataForm.StepTempo.Condizione}
          onChange={event => {
            console.log(event);
            setDataForm({
              ...dataForm,
              StepTempo: {
                ...dataForm.StepTempo,
                Condizione: event.target.value
              }
            });
          }}
        ></Radio.Group>
      </div>
      <br></br>
      <div style={{ paddingLeft: 100 }}>
        {StepTempo.Condizione === "Condizione temporale" && (
          <Card title="Condizione Temporale" style={{ width: 800 }}>
            <Checkbox.Group
              value={dataForm.StepTempo.Checkbox}
              name="Checkbox"
              options={week}
              defaultValue={["Lun"]}
              onChange={value => {
                setDataForm({
                  ...dataForm,
                  StepTempo: {
                    ...dataForm.StepTempo,
                    Checkbox: value
                  }
                });
              }}
            />
            <Checkbox
              value={dataForm.StepTempo.Festivo}
              name="Festivo"
              defaultChecked={false}
              onChange={value => {
                setDataForm({
                  ...dataForm,
                  StepTempo: {
                    ...dataForm.StepTempo,
                    Checkbox: value
                  }
                });
              }}
            >
              Festivo
            </Checkbox>
            <div>
              <Checkbox
                value={dataForm.StepTempo.TuttiGG}
                name="TuttiGG"
                style={{ paddingLeft: 444 }}
                defaultChecked={false}
                onChange={value => {
                  setDataForm({
                    ...dataForm,
                    StepTempo: {
                      ...dataForm.StepTempo,
                      Checkbox: value
                    }
                  });
                }}
              >
                Tutti i GG
              </Checkbox>
            </div>

            <div style={{ paddingLeft: 100 }}>
              <Row gutter={16}>
                <Col span={6}>
                  <p>Ora Inizio</p>
                  <TimePicker
                    value={moment(dataForm.StepTempo.Time1)}
                    name="Time1"
                    format={format}
                    onChange={(time, timeSring) =>
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm.StepTempo,
                          Time1: time.valueOf()
                        }
                      })
                    }
                  />
                </Col>
                <Col span={6}>
                  <p>Ora Fine</p>
                  <TimePicker
                    value={moment(dataForm.StepTempo.Time2)}
                    name="Time2"
                    format={format}
                    onChange={(time, timeString) =>
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm.StepTempo,
                          Time2: time.valueOf()
                        }
                      })
                    }
                  />
                </Col>
                <p></p>
                <br></br>
                <Col span={6}>
                  <Button>Rimuovi</Button>
                </Col>
              </Row>
              <p></p>
              <Row gutter={16}>
                <Col span={6}>
                  <TimePicker
                    value={moment(dataForm.StepTempo.Time3)}
                    name="Time3"
                    format={format}
                    onChange={(time, timeSring) =>
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm.StepTempo,
                          Time3: time.valueOf()
                        }
                      })
                    }
                  />
                </Col>
                <Col span={6}>
                  <TimePicker
                    value={moment(dataForm.StepTempo.Time4)}
                    name="Time4"
                    format={format}
                    onChange={(time, timeSring) =>
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm.StepTempo,
                          Time4: time.valueOf()
                        }
                      })
                    }
                  />
                </Col>
                <Col span={6}>
                  <Button>Rimuovi</Button>
                </Col>
                <Col>
                  <Button>Aggiungi</Button>
                </Col>
              </Row>
            </div>
          </Card>
        )}
        <br></br>
        <p></p>
        <br></br>
        <Card title="Condizioni meteo" style={{ width: 800 }}>
          <div>
            <Row>
              <Col span={6}>
                <p>Stagione</p>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.StepTempo.Stagioni}
                  name="Stagioni"
                  defaultValue="autunno"
                  style={{ width: 120 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepTempo: {
                        ...dataForm.StepTempo,
                        Stagioni: value
                      }
                    });
                  }}
                >
                  <Option value="autunno">Autunno</Option>
                  <Option value="inverno">Inverno</Option>
                  <Option value="estate">Estate</Option>
                  <Option value="Primavera">Primavera</Option>
                </Select>
              </Col>
              <Col span={6}>
                <p>Temperatura Max oderina</p>{" "}
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.StepTempo.Temp}
                  name="Temp"
                  defaultValue="10"
                  style={{ width: 120 }}
                  onChange={value => {
                    setDataForm({
                      ...dataForm,
                      StepTempo: {
                        ...dataForm.StepTempo,
                        Temp: value
                      }
                    });
                  }}
                >
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                  <Option value="13">13</Option>
                </Select>
              </Col>
            </Row>
            <div>
              <Row>
                <Col span={6}>
                  <p>Temperatura attuale </p>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.StepTempo.TempAttuale}
                    name="TempAttuale"
                    defaultValue="10"
                    style={{ width: 120 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm.StepTempo,
                          TempAttuale: value
                        }
                      });
                    }}
                  >
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                    <Option value="13">13</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <p>Temperatura Max periodo</p>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.StepTempo.TempMax}
                    name="TempMax"
                    defaultValue="10"
                    style={{ width: 120 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm.StepTempo,
                          TempMax: value
                        }
                      });
                    }}
                  >
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                    <Option value="13">13</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col span={6}>
                  <p>Meteo </p>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.StepTempo.Meteo}
                    name="Meteo"
                    defaultValue="Nuvoloso"
                    style={{ width: 120 }}
                    onChange={value => {
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm.StepTempo,
                          Meteo: value
                        }
                      });
                    }}
                  >
                    <Option value="Nuvoloso">Nuvoloso</Option>
                    <Option value="Soleggiato">Soleggiato</Option>
                    <Option value="Neve">Neve</Option>
                    <Option value="Pioggia">Pioggia</Option>
                  </Select>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </div>
      <br></br>
      <p></p>
      <div style={{ paddingLeft: 100 }}>
        <Row>
          <Col span={6}>
            <Link to="/NuovaCampagna">
              <Button>Indietro</Button>
            </Link>
          </Col>
          <Col span={6}></Col>
          <Col span={6}></Col>

          <Col span={6}>
            <Link to="/StepLocation">
              <Button onClick={onChange}>Avanti</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};
