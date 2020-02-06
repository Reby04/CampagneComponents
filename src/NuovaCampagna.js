import React from "react";
import { Row, Col, Input, DatePicker, Button } from "antd";
import moment from "moment";
import { Select } from "antd";
import { Link } from "@reach/router";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
// const defaultValue = {
//   nomeCampagna: "",
//   dataInizio: moment().valueOf(),
//   dataFine: moment().valueOf(),
//   profiloCampagna: "Global Campain",
//   note: "",
//   Campagna: ""
// };

export const NuovaCampagna = ({
  onNextPage,
  handlePreviousPage,
  dataForm,
  setDataForm
}) => {
  const { Option } = Select;
  const { TextArea } = Input;

  /* function handleChange(event) {
    console.log(`selected ${event}`);
  }
*/
  const onChangeInput = event => {
    console.log(event.target.name);
    setDataForm({
      ...dataForm,
      nuovaCampagna: {
        ...dataForm.nuovaCampagna,
        [event.target.name]: event.target.value
      }
    });
  };

  const onChange = () => {
    localStorage.setItem(
      "Nuova Campagna",
      JSON.stringify(dataForm.nuovaCampagna)
    );
    onNextPage();
    console.log(JSON.stringify(dataForm.nuovaCampagna));
  };

  return (
    <div style={{ paddingLeft: 80, paddingTop: 50, paddingRight: 80 }}>
      <br></br>
      <Row>
        <Col span={6}>Nome Campagna</Col>
        <Col span={6}>
          <Input
            name="nomeCampagna"
            placeholder=""
            value={dataForm.nuovaCampagna.nomeCampagna}
            onChange={onChangeInput}
          />
        </Col>
      </Row>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Data Inizio Campagna</Col>
          <Col span={6}>
            <DatePicker
              value={moment(dataForm.nuovaCampagna.dataInizio)}
              name="dataInizio"
              format={dateFormatList}
              onChange={(date, dateString) => {
                setDataForm({
                  ...dataForm,
                  nuovaCampagna: {
                    ...dataForm.nuovaCampagna,
                    dataInizio: date.valueOf()
                  }
                });
              }}
            />
          </Col>
        </Row>
      </div>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Data Fine Campagna</Col>
          <Col span={6}>
            <DatePicker
              value={moment(dataForm.nuovaCampagna.dataFine)}
              name="dataFine"
              format={dateFormatList}
              onChange={(date, dateString) => {
                setDataForm({
                  ...dataForm,
                  nuovaCampagna: {
                    ...dataForm.nuovaCampagna,
                    dataFine: date.valueOf()
                  }
                });
              }}
            />
          </Col>
        </Row>
      </div>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Profilo Campagna</Col>
          <Col span={6}>
            <Select
              value={dataForm.nuovaCampagna.profiloCampagna}
              name="profiloCampagna"
              defaultValue="Global"
              style={{ width: 160 }}
              onChange={value => {
                setDataForm({
                  ...dataForm,
                  nuovaCampagna: {
                    ...dataForm.nuovaCampagna,
                    profiloCampagna: value
                  }
                });
              }}
            >
              <Option value="Global">Global Campain</Option>
              <Option value="Local">Local Campain</Option>
            </Select>
          </Col>
        </Row>
      </div>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Note</Col>
          <Col span={6}>
            <TextArea
              value={dataForm.nuovaCampagna.note}
              name="note"
              onChange={onChangeInput}
              rows={2}
              style={{ paddingRight: 100 }}
            />
          </Col>
        </Row>
      </div>
      <div>
        <br></br>
        <p></p>

        <div>
          <Row>
            <Col span={6}></Col>
            <Col span={6}></Col>
            <Col span={6}></Col>

            <Col span={6}>
              <Link to="/StepTempo">
                <Button onClick={onChange}>Avanti</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
